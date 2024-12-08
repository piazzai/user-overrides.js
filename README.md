# user-overrides.js

These are my own configuration overrides for Firefox and Thunderbird, to be loaded on top of the [arkenfox user.js](https://github.com/arkenfox/user.js/) and HorlogeSkynet's [thunderbird-user-js](https://github.com/HorlogeSkynet/thunderbird-user.js/).

## Usage

### Firefox

Download [updater.sh](https://github.com/arkenfox/user.js/blob/master/updater.sh), [prefsCleaner.sh](https://github.com/arkenfox/user.js/blob/master/prefsCleaner.sh), and [user.js](https://github.com/arkenfox/user.js/blob/master/user.js) from the arkenfox repo and place them in your Firefox profile folder. Place the Firefox `user-overrides.js` in this folder as well. Then run:

```sh
bash updater.sh
bash prefsCleaner.sh
```

Make sure your Firefox profile is not currently in use while you run the scripts.

### Thunderbird

Download [updater.sh](https://github.com/HorlogeSkynet/thunderbird-user.js/blob/master/updater.sh), [prefsCleaner.sh](https://github.com/HorlogeSkynet/thunderbird-user.js/blob/master/prefsCleaner.sh), and [user.js](https://github.com/HorlogeSkynet/thunderbird-user.js/blob/master/user.js) from HorlogeSkynet's repo, place them in your Thunderbird profile folder along with the Thunderbird `user-overrides.js`, then repeat the operations above.
