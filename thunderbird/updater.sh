#!/bin/bash

if [ -f user.js ]; then
    mkdir -p userjs_backups
    mv user.js "userjs_backups/user.js.backup.$(date +"%Y-%m-%d_%H%M")"
fi

curl -sO https://raw.githubusercontent.com/HorlogeSkynet/thunderbird-user.js/master/user.js
curl -sO https://raw.githubusercontent.com/arkenfox/user.js/master/prefsCleaner.sh

if [ -f user-overrides.js ]; then
    cat user-overrides.js >> user.js
fi

echo "Done! Please run prefsCleaner.sh"
