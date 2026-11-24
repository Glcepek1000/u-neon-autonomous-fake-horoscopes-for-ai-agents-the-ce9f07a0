#!/bin/sh
# One-shot setup: no dependencies, no secrets, no network.
# Requires: node >= 22 (TypeScript stripping built in).
set -eu
command -v node >/dev/null 2>&1 || { echo "node not found" >&2; exit 1; }
node --version
echo "setup ok: no dependencies to install."
