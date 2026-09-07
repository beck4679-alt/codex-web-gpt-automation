# Codex Web GPT Automation Repository Rules

## GPT Automation Change Persistence

- Any durable change to GPT or ChatGPT skills, CodexPro/agbrowse bridges, browser runners, prompt or mode routing, recovery, state, locks, tabs, app registration, Web Multi-GPT, or their tests must include focused verification and a descriptive Git commit before the work is reported complete.
- The installed files under `%USERPROFILE%\.codex` are deployment copies, not the sole source of truth. Synchronize reusable fixes back into this repository instead of leaving them only in the global installation.
- Public-safe reusable changes must be committed to the clean public `main`, pushed, and checked in CI. Never copy credentials, host-only values, sensitive artifacts, or private Git history into this repository.
- Never push a private-history development branch to the public repository. If commit, push, or CI verification is blocked, report the exact dirty files and blocker and do not claim completion.

## Filesystem hygiene

- Never create test output, temporary directories, logs, downloaded archives, or dependency checkouts directly under a drive root such as `C:\` or `D:\`.
- Use the operating-system temp directory under a task-specific `Codex` child first. When a shorter Windows path is genuinely required, use the authoritative repository's gitignored `.codex-tmp\<task>` directory.
- Put reusable third-party source checkouts under `%LOCALAPPDATA%\Codex\Sources`, not a drive root. An explicitly user-approved project root is not temporary storage and must not be repurposed.
- Before cleaning an existing drive-root item, classify its ownership and active references. Preserve user projects, system folders, credentials, and ambiguous items; move confirmed automation artifacts to a recoverable archive instead of deleting them.

## First-install onboarding contract

- When a user only supplies this repository and asks for installation, run the
  lifecycle install and then continue into `python onboard.py start`. Ask at most
  three setup questions: project folders, stable-URL provider, and whether the
  optional Local Multi-GPT component is wanted.
- Drive remaining setup through `onboard.py next` and `onboard.py confirm
  <stage-id>`. Never skip a pending stage, re-run a verified stage, or accept a
  user confirmation that required non-secret evidence does not prove. Stable
  endpoint confirmation is the user's explicit approval of the fixed URL/root
  plan; later connectivity, login, persistence, app, and final-gate stages also
  require their own live or hash-bound evidence.
- Preserve every existing DevSpace `allowedRoots` entry when adding roots. A
  malformed existing config fails closed. Chrome Local Network policy may be
  changed only after explicit scoped consent for `https://chatgpt.com`.
- Onboarding state is non-secret by contract. Never write Owner passwords,
  tokens, cookies, or OAuth secrets into it, and never ask the user to paste the
  DevSpace Owner password to the agent.
- Do not report installation complete before `08_final_gate` verifies a fresh
  Latest/Pro Oracle read of the exact project root. Explicitly select the Latest
  model row, then set effort to Pro; never leave an arbitrary current model
  selected or select GPT-5.6 to obtain Pro. The Oracle `current` strategy is only
  the compatibility carrier; the patch must click Latest before verifying 6 Pro.
  Retain this compatibility route until Oracle explicitly supports 6 Pro and
  that native route passes model-identity, no-submission, and real read gates.
  An Oracle version update alone never authorizes removing this workaround;
  never pass unknown `gpt-6` or `latest` CLI model slugs.
  Report the precise
  pending completion state instead. The Codex Desktop DevSpace plugin is a
  different connection and is never that proof.
- The final gate must bind the exact Oracle run directory, source task, root,
  configured app, current model strategy, and a structured observed-picker
  receipt proving exact `Latest` checked, full `5/5` qualification, the
  composer's `Thinking effort` control, and a `6 Pro` signal in either the model
  menu or composer; requested values or a log line alone are insufficient. It also binds conversation URL,
  terminal state, output SHA-256, observed listing, and final outcome marker.
- ChatGPT developer mode, custom app creation, permission and tool selection,
  and Owner approval stay manual. When the create button is missing, triage the
  surface, workspace type, developer-mode toggle, and Apps/Plugins UI before
  ever concluding that a plan upgrade is required.

## Comprehensive-mode ownership

- Oracle ownership is task scoped, not project scoped. Two different Codex
  tasks may run concurrently against the same exact project root; each owns its
  own task ID, run, mission hash, slug/conversation, browser profile, dynamic
  CDP port, process tree, and lock. Only unresolved runs from the same task may
  block a new submission. Foreign-task sessions may be diagnosed but never
  recovered, harvested, stopped, settled, or adopted. Legacy unbound runs are
  never assigned to the newest project task by inference.

- macOS new-work support uses the portable Python lifecycle, POSIX identity,
  DevSpace/Tailscale Funnel, and `com.ventianima.codexpro-automation.*`
  LaunchAgents. It must never reuse, overwrite, or stop `com.openclaw.codexpro*`
  services or mutate `~/.codexpro`.
- The 4,800-second mark is only a caution/status-audit threshold. At that
  threshold inspect the exact run's process liveness, output/log progress,
  known conversation binding, and terminal evidence, then continue the same
  process or exact-slug live recovery while it remains live or uncertain.
  Elapsed time alone never stops work, releases ownership, marks failure, or
  authorizes a replacement submission. Only a real provider hard limit,
  explicit terminal evidence, user stop, or verified inability may end an
  observation path; prompt-not-observed and no-duplicate rules remain strict.
- Do not blanket-fan-out Codex native subagents. Normal operation starts with
  at most two concurrent workers and the global hard cap is three spawned
  threads. Concurrent writers require explicit, non-overlapping file lists or
  distinct worktrees. Oracle Web Multi remains separately bounded to five
  provider sessions, and local-subagent and Oracle-web phases do not overlap.

- Every non-implementation cognitive requirement uses Oracle with the manually registered `@codex` app under standing approval: requirements, design, planning, research, comparison, advice, critique, review, adjudication, and semantic verification. Browser proof must show exact `Latest` checked, full `5/5` qualification, the composer's `Thinking effort` control, and a `6 Pro` signal in either the model menu or composer; this is not a per-run opt-in. If that observed UI proof cannot be established, fail closed instead of falling back to GPT-5.6 or GPT-5.5. The validated CLI carrier remains `model: gpt-5.6-sol`, `model_strategy: current`, and `thinking_time: pro`; never invent a `gpt-6` or `latest` model slug or claim a new Oracle engine. Do not use CGW or `chatgpt-web/*`.
- Native `gpt-5.6-sol` owns implementation, repair, file changes, and commands. Native Luna owns chores and focused testing. Astra owns orchestration, exact recovery, deterministic receipt/hash/process verification, integration, release, and final reporting. Oracle Latest/6 Pro is read-only and non-implementation.
- New GPT comprehensive workflows use `codex.chatgpt.oracle-comprehensive/v1`. Existing CodexPro/agbrowse comprehensive v1-v4 state remains exact recovery-only.
- Comprehensive, Web Multi, `pro-attachment`, selector-era, `ultra-gpt`, and `closed_audit` profiles are explicit compatibility workflows, not the standing default. Preserve their schemas, stage names, receipts, and persisted authorities during exact execution or recovery; never rewrite recovered authority to match the standing split.
- The explicit `ultra-gpt` comprehensive compatibility profile moves all semantic subagent roles to separate web GPT sessions. Local Codex is a deterministic controller only; parallel web writers run in distinct pre-created Git worktrees with host-audited pairwise-disjoint project-relative ownership, an all-lanes barrier, and bounded concurrency. Its Pro advisory retains the profile's existing contract rather than defining the standing default.
- The `ultra-gpt` profile may explicitly opt into a `closed_audit` contract that adds hash-bound dependency, authority, advisory Research Governor, identity-ledger, local-gate, and workflow-audit artifacts without creating another execution mode. Never enable it silently, weaken its no-extra-key validation, count advisory artifacts as execution, or grant its optional pre-workflow Pro binding in-workflow authority. Legacy `workflow_profile: strict-ultra` manifests remain recovery-compatible but are not a new-work profile.
- The completing web GPT stage authors the next stage's semantic prompt. Local Codex may validate UTF-8, hashes, stage identity, immutable bindings, transport, recovery, and deterministic final tests, but must not rewrite the next prompt or take over expensive exploration/implementation.
- A selected Web Multi advisory uses genuine independent Oracle sessions. Provider generation is limited to at most five concurrent children; larger accepted topologies run in capacity waves without reducing their logical lane count.
- Comprehensive review owns plan repair and finalization. It fixes every locally resolvable defect inline, writes the corrected final plan and implementation mission, then returns PASS or PASS_WITH_NOTES. New work never loops review back to plan; legacy REVISE is terminal compatibility only, and FAIL requires a concrete external blocker.
- Every regular Oracle stage is bound to one exact project root and one exact mission path. DevSpace may retry that same root once after listing registered workspaces, but must never substitute a parent, child, similarly named, active workspace, or shell boundary workaround.
- The standing Oracle Latest/6 Pro route has the same exact-root binding and may broadly inspect decision-relevant material, but is read-only and limited to non-implementation cognition. It must not create, edit, or remove files, run commands, or alter accounts, app settings, or external state; native Sol owns authorized actions. Persisted compatibility and legacy `pro-devspace` write runs preserve their exact original authority only during execution or recovery. Once the one-time DevSpace qualification is complete, do not re-check app/settings state per run.
- Before the first DevSpace-backed Oracle submission for a new exact project root, verify exact equality against the current local DevSpace `allowedRoots`. Cache that qualification against the config hash; revalidate only when the config changes. Missing, parent, child, or similarly named roots fail before Oracle/browser creation. This lightweight root guard must not automate or repeatedly inspect ChatGPT app/settings state.
- Pro DevSpace completion requires a v1 `TASK_OUTCOME` marker as the final nonempty line, with citations and reference definitions before it. A bounded provider-rendering exception may accept exactly one marker followed only by single-line HTTP(S) Markdown reference definitions; ordinary prose or another marker remains unknown. Exit zero plus a durable answer is not successful execution when the session exposed no callable DevSpace tools or could not read the exact mission/root. A durably terminal `NOT_EXECUTED` run may release that task's project lock for one fresh retry with identical mission bytes and SHA-256; a repeated tool-exposure failure is `attention_required`, with no automatic app-settings manipulation or attachment fallback.
- Transport and runner recovery retain the exact workflow/stage identity. They must not create a replacement workflow or reset the semantic revision budget.
- CodexPro and agbrowse are frozen for new work. Their code may be invoked only to recover an exact persisted legacy run, never as an Oracle fallback.
- Every new Oracle run must use a throwaway copy of the manually signed-in profile and an Oracle-owned hidden window. Never share the manual-login Chrome process across concurrent projects.
- Oracle ownership is task-scoped, not project-scoped. Two different Codex tasks may run against the same exact project root concurrently, with separate task-bound mutexes, run IDs, slugs, dynamic CDP ports, browser profiles, conversation bindings, and receipts. Only an unresolved run owned by the same task blocks that task's next submission. A foreign task may be listed for diagnosis but must never be adopted, recovered, harvested, followed up, canceled, or stopped. Never infer a legacy unbound run's owner from the project root or newest timestamp.
- Every cross-task incident or completion report that contains an operational instruction must name both `evaluated_from_thread` and `target_source_thread_id` and bind the exact run ID/slug. Generate a separate report for each target task; never copy one task's recovery, settlement, or stop instruction into another task's report. If the exact run is already terminal and harvested, its operational action is `none` even when the local status remains `attention_required`.
- A same-conversation Pro follow-up is allowed only through the runner's internal `followup` command against a task-bound terminal `pro-devspace-readonly` parent. Raw Oracle `--followup`, `--browser-follow-up`, and `session` injection remain forbidden. The default `archive=auto` for new read-only Pro parents is normalized to `never`; explicit `always` is a single-turn choice. Every round uses a new task-bound Oracle run/slug while reopening the exact persisted ChatGPT conversation. A historical or explicitly archived exact parent may be restored only through the bounded compatibility path and then re-archived. If that restore fails before the composer, do not harvest: preserve the exact run and request explicit user no-submission confirmation before `settle-no-submission`. Append-only reservation and result receipts bind the mission, state, output, transcript, conversation, archive transition, and child task identity. A changed or unproven conversation/archive state fails closed and never authorizes a replacement prompt.
- Follow-up dry-run is side-effect free. A live attempt must create child state/logs before local preflight and append parent launch/result evidence. Preserve a historical reservation-only round key exactly as written; never delete or replay it. Only after proving its detached controller ended may the owner choose a new unique round key.
- Exact-slug recovery may relaunch a bounded recovery browser from the persisted profile seed and open only the recorded conversation URL. It must never restart, resubmit, or create a replacement conversation.
- If Oracle has already saved the official terminal output and strict completed session metadata but the outer state remains stale, only the owning task may use `settle-saved-output`. It must bind the prior state/output/stdout/meta hashes, immutable ownership and follow-up receipts, exact conversation/profile, canonical saved-output log record, terminal outcome/schema, and stopped observer/controller/Chrome PIDs. When the saved settlement proves a reserved-versus-observed CDP port mismatch, seal the separate v2 browser identity receipt automatically (or migrate an already reconciled run with owner-only `seal-saved-output-browser-identity`) so the exact conversation can remain a follow-up parent without rewriting the original expected port. Do not weaken ordinary recovery's browser-receipt gate or edit state manually.
- A task-bound qualified-Pro prompt-commit timeout that occurred before the conversation-bound browser receipt was sealed may use only one prompt-free exact-slug `harvest`, never `live`, when the immutable ownership receipt, the exact recorded Oracle version's zero-turn commit probe, root composer, dynamic CDP port, isolated profile/target, and absent output/conversation URL all agree. That harvest does not release ownership; normal no-tab/no-URL evidence and the explicit user no-submission confirmation remain mandatory. Later project-mission edits are tolerated only when the immutable run copy and ownership receipt still bind the same original SHA-256; legacy-unbound runs keep the current-source requirement.
- A nonzero Oracle exit after submission, including a browser response timeout, is attention-required rather than web-terminal failure. It retains exact-session ownership and allows only exact-slug live/harvest recovery.
- Exact session authority is monotonic. `terminal_observed` cannot regress to `live`; observer disagreement remains attention-required under the same task-scoped project lock until a later exact terminal harvest produces fresh nonempty durable output.
- A web worker must never inspect, poll, wait for, invoke, or recover its own exact Oracle run/slug or launch nested Oracle automation. Only the bounded conjunction of exact own identity, own running/pending/output-absent/continue-observing evidence, and terminal BLOCKED is recursive self-observation. Comprehensive mode terminalizes that stage and releases its workflow scope without auto-retry; a direct fresh run additionally requires the append-only hash-bound user-authority settlement.
