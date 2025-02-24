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

Be aware that some of the preferences set by HorlogeSkynet's user.js make it impossible to authenticate into email accounts using OAuth. These preferences are respected by the overrides file because they are privacy-enhancing. If you must use OAuth, you need to temporarily flip them to privacy-breaking values. Uncomment the following lines at the end of the file:

```js
// user_pref("javascript.enabled", true);
// user_pref("permissions.default.image", 3);
```

Run `updater.sh` and `prefsCleaner.sh` to enforce the new preferences, then launch Thunderbird and log into your account. Once this is done, you should clear any cookies saved during the process via the Thunderbird GUI, close the program, comment out the OAuth preferences, and run the scripts again to restore privacy-enhancing defaults.
