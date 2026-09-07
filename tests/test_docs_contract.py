import importlib.util
from pathlib import Path


ROOT = Path(__file__).parents[1]
SPEC = importlib.util.spec_from_file_location("check_docs", ROOT / "scripts" / "check_docs.py")
assert SPEC and SPEC.loader
MODULE = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(MODULE)


def test_public_docs_brand_assets_and_versions_are_consistent() -> None:
    assert MODULE.check_repository(ROOT) == []


def test_social_preview_has_github_recommended_dimensions() -> None:
    preview = ROOT / "docs" / "assets" / "brand" / "social-preview.png"
    assert MODULE._png_dimensions(preview) == (1280, 640)


def test_install_docs_define_latest_6_pro_manifest_and_exact_command() -> None:
    docs = [
        (ROOT / "docs" / "FIRST_INSTALL.md").read_text(encoding="utf-8"),
        (ROOT / "docs" / "INSTALL_AGENT.md").read_text(encoding="utf-8"),
    ]
    for value in docs:
        assert '"schema": "codex.chatgpt.oracle-run/v1"' in value or '"schema":"codex.chatgpt.oracle-run/v1"' in value
        assert '"model": "gpt-5.6-sol"' in value or '"model":"gpt-5.6-sol"' in value
        assert '"model_strategy": "current"' in value or '"model_strategy":"current"' in value
        assert '"thinking_time": "pro"' in value or '"thinking_time":"pro"' in value
        assert 'chatgpt_oracle_run.py" run' in value
        assert "oracle-latest-6-pro.json" in value
        assert "`Latest`" in value and ("모델 picker" in value or "모델 메뉴" in value)
        assert "exact `Latest` checked" in value
        assert "`5/5`" in value
        assert "`Thinking effort` control" in value
        assert "`6 Pro` signal" in value
        assert "model menu" in value and "composer" in value
        assert "structured observed-picker receipt" in value
        assert "gpt-6" in value and "latest" in value


def test_install_docs_keep_role_and_compatibility_boundaries() -> None:
    combined = "\n".join(
        (ROOT / "docs" / name).read_text(encoding="utf-8")
        for name in ("FIRST_INSTALL.md", "INSTALL_AGENT.md")
    )
    assert "standing default" in combined
    assert "gpt-5.6-sol" in combined
    assert "Luna" in combined
    assert "Astra" in combined
    assert "CGW" in combined and "chatgpt-web/*" in combined
    assert "comprehensive" in combined and "selector-era" in combined
    assert "원래 권한" in combined
