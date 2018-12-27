#!/bin/sh
echo "The version would be: $1"
echo "export const CHOOSY_VERSION='$1'" > ./docs/environments/version.ts
echo "Version file updated!"
