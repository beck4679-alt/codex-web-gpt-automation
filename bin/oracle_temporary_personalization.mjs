// This changes only the current temporary conversation, never account settings.
export async function ensureTemporaryChatPersonalization(Runtime, logger = () => {}) {
  const result = await Runtime.evaluate({
    expression: `(${enableTemporaryPersonalization.toString()})()`,
    awaitPromise: true,
    returnByValue: true,
  });
  if (result.exceptionDetails || result.result?.value?.enabled !== true) {
    throw new Error(`Temporary chat personalization was not confirmed: ${result.exceptionDetails?.exception?.description || result.exceptionDetails?.text || 'missing confirmation'}`);
  }
  logger('[browser] Temporary chat personalization: enabled');
  return result.result.value;
}

export async function enableTemporaryPersonalization() {
  const visible = element => element.isConnected && element.getClientRects().length > 0;
  const buttons = label => [...document.querySelectorAll('button')].filter(element =>
    visible(element) && (element.getAttribute('aria-label') || element.innerText).trim() === label);
  const temporary = () => location.origin === 'https://chatgpt.com' &&
    new URL(location.href).searchParams.get('temporary-chat') === 'true';
  const assertTemporary = () => { if (!temporary()) throw new Error('Expected an owned temporary ChatGPT conversation'); };
  const selectedRows = () => [...document.querySelectorAll('[role="menuitemradio"]')].filter(element =>
    visible(element) && (element.querySelector('.truncate')?.textContent || element.innerText.split('\n')[0]).trim() === 'Personalized');
  assertTemporary();
  if (buttons('Personalized').length === 1 && buttons('Unpersonalized').length === 0) return { enabled: true, changed: false };
  if (selectedRows().length === 0) {
    const triggers = buttons('Unpersonalized');
    if (triggers.length !== 1) throw new Error('Temporary personalization control missing or ambiguous');
    triggers[0].click();
  }
  for (let attempt = 0; attempt < 40; attempt++) {
    assertTemporary();
    const rows = selectedRows();
    if (rows.length > 1) throw new Error('Ambiguous personalization option');
    if (rows.length === 1) {
      const menu = rows[0].closest('[role="menu"]');
      const other = [...(menu?.querySelectorAll('[role="menuitemradio"]') || [])].filter(element =>
        visible(element) && (element.querySelector('.truncate')?.textContent || element.innerText.split('\n')[0]).trim() === 'Unpersonalized');
      if (other.length !== 1) throw new Error('Not the temporary personalization menu');
      const checked = rows[0].getAttribute('aria-checked');
      if (checked !== 'true' && checked !== 'false') throw new Error('Unknown personalization state');
      if (checked === 'false') rows[0].click();
      for (let confirmation = 0; confirmation < 40; confirmation++) {
        assertTemporary();
        if (buttons('Personalized').length === 1 && buttons('Unpersonalized').length === 0) {
          return { enabled: true, changed: checked === 'false' };
        }
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      throw new Error('Personalization did not become enabled');
    }
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  throw new Error('Temporary personalization menu did not appear');
}
