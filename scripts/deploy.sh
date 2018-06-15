#!/bin/bash

ember deploy production --activate --verbose
scripts/netlifyctl deploy -m "$TRAVIS_COMMIT_MESSAGE" -A $NETLIFY_TOKEN -P ./build
