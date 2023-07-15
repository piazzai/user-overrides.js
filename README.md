# user-overrides.js

This is a set of custom configuration files for Firefox and Thunderbird that are intended to increase privacy and security when using the two programs. While these files introduce settings that match my personal preferences, they could be helpful to other people seeking to harden their Firefox/Thunderbird clients.

Please note that these override files contain preferences that can considerably change the default behavior of Firefox/Thunderbird. You should not use them without fully understanding how they are affecting your software. Delete every preference you do not want or do not understand.

### Firefox

Create a new Firefox profile. Download the arkenfox [user.js](https://github.com/arkenfox/user.js) and place in your new profile folder the files `user.js`, `updater.sh`, and `prefsCleaner.sh`, which you can find in the arkenfox package. Then, move `firefox/user-override.js` to the same folder, run the updater, and run the preference cleaner. Make sure your Firefox profile is not in use while running these scripts.

Following arkenfox recommendations, after configuring your profile you will need to install [uBlock Origin](https://addons.mozilla.org/firefox/addon/ublock-origin/) and [Skip Redirect](https://addons.mozilla.org/firefox/addon/skip-redirect/) for additional protection. You should also add some lists to the uBlock default lists, including [AdGuard URL Tracking Protection](https://github.com/AdguardTeam/AdGuardFilters) and [Legitimate URL Shortener](https://raw.githubusercontent.com/DandelionSprout/adfilt/master/LegitimateURLShortener.txt). Please read the [arkenfox wiki](https://github.com/arkenfox/user.js/wiki) very thoroughly or you could end up with a compromised browser.

### Thunderbird

Create a new Thunderbird profile. Download [thunderbird-user.js](https://github.com/HorlogeSkynet/thunderbird-user.js) and place the `user.js` file it contains in your new profile folder. Then, move `thunderbird/user-overrides.js` and `thunderbird/updater.sh` to the same folder and run the updater, which will also download the preference cleaner. Finally, run the preference cleaner. Make sure your Thunderbird profile is not in use while running these scripts.

Please note that `thunderbird/user-overrides.js` includes a section with four privacy-breaking preferences that are necessary to authenticate into email accounts using Oauth2. If you do not need to authenticate into your account in this way, it is best to delete these preferences.
