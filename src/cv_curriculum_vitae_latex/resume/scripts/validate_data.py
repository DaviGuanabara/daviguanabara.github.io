#!/usr/bin/env python3

from __future__ import annotations

from pathlib import Path

import yaml


ROOT = Path(__file__).resolve().parents[2]
RESUME_DIR = ROOT / "resume"


def load_yaml(path: Path):
    with path.open("r", encoding="utf-8") as handle:
        return yaml.safe_load(handle)


def main() -> None:
    required = [
        RESUME_DIR / "data" / "person.yaml",
        RESUME_DIR / "data" / "skills.yaml",
        RESUME_DIR / "data" / "education.yaml",
        RESUME_DIR / "data" / "experience.yaml",
        RESUME_DIR / "data" / "projects.yaml",
    ]
    for path in required:
        load_yaml(path)
        print(f"ok: {path.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
