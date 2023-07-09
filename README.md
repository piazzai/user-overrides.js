# user-overrides.js

This is a set of custom configuration files for Firefox and Thunderbird that are intended to increase privacy and security when using the two programs. While these files introduce settings that match my personal preferences, they could be helpful to other people seeking to harden their Firefox/Thunderbird clients.

Please note that these override files contain preferences that can considerably change the default behavior of Firefox/Thunderbird. You should not use them without fully understanding how they are affecting your software. Delete every preference you do not want or do not understand.

### Firefox

First, create a new Firefox profile. Download the [arkenfox user.js](https://github.com/arkenfox/user.js) and place `user.js`, `updater.sh`, and `prefsCleaner.sh` in your new profile folder. Then, move the Firefox `user-override.js` to the same folder, run the updater, and run the preference cleaner.

Following arkenfox recommendations, you will need to install [uBlock Origin](https://addons.mozilla.org/firefox/addon/ublock-origin/) and [Skip Redirect](https://addons.mozilla.org/firefox/addon/skip-redirect/) for protection. You should also add some lists to the uBlock default lists, including [Legitimate URL Shortener](https://raw.githubusercontent.com/DandelionSprout/adfilt/master/LegitimateURLShortener.txt). Please read the [arkenfox wiki](https://github.com/arkenfox/user.js/wiki) very thoroughly or you could end up with a compromised browser.

### Thunderbird

First, create a new Thunderbird profile. Download the [HorlogeSkynet user.js](https://github.com/HorlogeSkynet/thunderbird-user.js) and place `user.js` in your new profile folder. Then, move the Thunderbird `user-overrides.js` and `updater.sh` to your new profile folder, run the updater, and run the preference cleaner. Please note that the preference cleaner will be downloaded automatically when running the updater.

The Thunderbird override file includes a separate section with four privacy-breaking overrides that are necessary to authenticate into email accounts that use Oauth2, such as Gmail. If you do not need to authenticate into such an account, it is best to delete these settings.
