#!/bin/bash
set -euv

if [[ "${TRAVIS_TAG}" ]]; then
  npm run build
  ls -a package/
  echo "ziped!"
else
  echo "Not Release"
fi
