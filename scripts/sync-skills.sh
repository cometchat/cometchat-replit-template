#!/usr/bin/env bash
# sync-skills.sh — Refresh .agents/skills/ from the canonical skills/ directory.
#
# Run this after editing any skill in the parent monorepo to keep the Replit
# Template's pre-bundled copy in sync. Re-bundle ships the updated skills to
# every fork of the published Template.
#
# Run from the repo root: bash replit-template/scripts/sync-skills.sh

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
SRC="$REPO_ROOT/skills"
DEST="$REPO_ROOT/replit-template/.agents/skills"

# Web-only skills — Replit Template targets web (React + Vite). RN skills
# live in a separate template (not yet built).
WEB_SKILLS=(
  cometchat
  cometchat-core
  cometchat-components
  cometchat-placement
  cometchat-react-patterns
  cometchat-nextjs-patterns
  cometchat-react-router-patterns
  cometchat-astro-patterns
  cometchat-theming
  cometchat-features
  cometchat-customization
  cometchat-production
  cometchat-troubleshooting
)

if [[ ! -d "$SRC" ]]; then
  echo "error: $SRC not found — run from inside the cometchat-skills monorepo" >&2
  exit 1
fi

rm -rf "$DEST"
mkdir -p "$DEST"

for skill in "${WEB_SKILLS[@]}"; do
  if [[ ! -d "$SRC/$skill" ]]; then
    echo "warn: skill $skill not found in $SRC, skipping" >&2
    continue
  fi
  cp -r "$SRC/$skill" "$DEST/"
done

count=$(find "$DEST" -name SKILL.md | wc -l | tr -d ' ')
echo "synced $count skills → replit-template/.agents/skills/"
