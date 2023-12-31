# user-overrides.js

These are custom configuration files for Firefox and Thunderbird that are intended to increase privacy and security. While the files introduce settings that match my personal preferences, they could be helpful to others who want to harden their Firefox/Thunderbird clients.

Please note that these files alter the default behavior of Firefox and Thunderbird. Do not use them without fully understanding how they are affecting your software.

## Firefox

1. Download the latest [arkenfox user.js](https://github.com/arkenfox/user.js).
2. Create a new Firefox profile.
3. Copy arkenfox's `user.js`, `updater.sh`, and `prefsCleaner.sh` to your profile folder.
4. Copy `firefox/user-override.js` to your new profile folder.
5. Run `updater.sh`, answer `y` to the prompt.
6. Run `prefsCleaner.sh`, answer `1` to the prompt.

Make sure your Firefox profile is not in use during steps 5 and 6.

As per arkenfox recommendations, after configuring your profile you will need to install [uBlock Origin](https://addons.mozilla.org/firefox/addon/ublock-origin/) and [Skip Redirect](https://addons.mozilla.org/firefox/addon/skip-redirect/). You should also add some lists to the uBlock default, including [AdGuard URL Tracking Protection](https://github.com/AdguardTeam/AdGuardFilters) and [Legitimate URL Shortener](https://raw.githubusercontent.com/DandelionSprout/adfilt/master/LegitimateURLShortener.txt). Please read the [arkenfox wiki](https://github.com/arkenfox/user.js/wiki) very thoroughly or you could end up with a compromised browser.

## Thunderbird

1. Download the latest [Horloge-Skynet user.js](https://github.com/HorlogeSkynet/thunderbird-user.js).
2. Create a new Thunderbird profile.
3. Copy HorlogeSkynet's `user.js` to your profile folder.
4. Copy `thunderbird/user-overrides.js` and `thunderbird/updater.sh` to your profile folder.
5. Run `updater.sh` and answer `y` to the prompt. This will download `prefsCleaner.sh`.
6. Run `prefsCleaner.sh` and answer `1` to the prompt.

Make sure your Thunderbird profile is not in use during steps 5 and 6.

Be aware that `thunderbird/user-overrides.js` includes a section with four privacy-breaking preferences that are necessary to authenticate into email accounts using Oauth2. If you do not need Oauth2, you can delete them. If you do need Oauth2, you can authenticate and then delete them. Run steps 5 and 6 again afterward.
