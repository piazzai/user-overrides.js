# user-overrides.js

These are my own configuration overrides for Firefox and Thunderbird, to be loaded on top of the [arkenfox user.js](https://github.com/arkenfox/user.js/) and HorlogeSkynet's [thunderbird-user.js](https://github.com/HorlogeSkynet/thunderbird-user.js/). Before using these overrides, please make sure to read and understand the wikis available in the upstream project repos.

## Usage



### Firefox

Download [updater.sh](https://github.com/arkenfox/user.js/blob/master/updater.sh), [prefsCleaner.sh](https://github.com/arkenfox/user.js/blob/master/prefsCleaner.sh), and [user.js](https://github.com/arkenfox/user.js/blob/master/user.js) from the arkenfox repo and place them in your Firefox profile folder. Place the Firefox `user-overrides.js` in this folder as well, then run:

```sh
bash updater.sh
bash prefsCleaner.sh
```

Make sure your Firefox profile is not currently in use while you run these scripts. Also, make sure to rerun the scripts periodically in order to keep your `user.js` file up-to-date.

### Thunderbird

Download [updater.sh](https://github.com/HorlogeSkynet/thunderbird-user.js/blob/master/updater.sh), [prefsCleaner.sh](https://github.com/HorlogeSkynet/thunderbird-user.js/blob/master/prefsCleaner.sh), and [user.js](https://github.com/HorlogeSkynet/thunderbird-user.js/blob/master/user.js) from HorlogeSkynet's repo, place them in your Thunderbird profile folder, add the Thunderbird `user-overrides.js`, then run the scripts as above.

Be aware that some of the preferences set by HorlogeSkynet's user.js make it impossible to log into email accounts using OAuth2. These preferences should be changed to the privacy-breaking values below, then reverted to the defaults after authentication.

```js
/* 1211 */
user_pref("security.OCSP.enabled", 0); // [DEFAULT: 1]
```

```js
/* 7016 */
user_pref("network.cookie.cookieBehavior", 1); // [DEFAULT: 5]
```

```js
/* 9320 */
user_pref("javascript.enabled", true); // [DEFAULT: false]
```

After authentication, it is also possible to clear any cookies saved during the process through the Thunderbird GUI. The email account should remain logged in after these cookies are gone.
