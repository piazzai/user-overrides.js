#!/bin/bash

if [ -f user.js ]; then
    echo "Creating user.js backup"
    mkdir -p userjs_backups
    mv user.js "userjs_backups/user.js.backup.$(date +"%Y-%m-%d_%H%M")"
fi

echo "Downloading latest user.js"
curl https://raw.githubusercontent.com/HorlogeSkynet/thunderbird-user.js/master/user.js > user.js

if [ -f user-overrides.js ]; then
    echo "Applying user-overrides.js"
    cat user-overrides.js >> user.js
fi

echo "Done! Please run prefsCleaner.sh"
