user_pref("_user.js.parrot", "I don't have to do this, you know?");

/*** [SECTION 0800]: LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS ***/
/* 0815: disable tab-to-search [FF85+]
 * Alternatively, you can exclude on a per-engine basis by unchecking them in Options>Search
 * [SETTING] Search>Address Bar>When using the address bar, suggest>Search engines ***/
user_pref("browser.urlbar.suggest.engines", false);
/* 0820: disable coloring of visited links
 * [SETUP-HARDEN] Bulk rapid history sniffing was mitigated in 2010 [1][2]. Slower and more expensive
 * redraw timing attacks were largely mitigated in FF77+ [3]. Using RFP (4501) further hampers timing
 * attacks. Don't forget clearing history on exit (2811). However, social engineering [2#limits][4][5]
 * and advanced targeted timing attacks could still produce usable results
 * [1] https://developer.mozilla.org/docs/Web/CSS/Privacy_and_the_:visited_selector
 * [2] https://dbaron.org/mozilla/visited-privacy
 * [3] https://bugzilla.mozilla.org/1632765
 * [4] https://earthlng.github.io/testpages/visited_links.html (see github wiki APPENDIX A on how to use)
 * [5] https://lcamtuf.blogspot.com/2016/08/css-mix-blend-mode-is-bad-for-keeping.html ***/
user_pref("layout.css.visited_links_enabled", false);
/* 0830: enable separate default search engine in Private Windows and its UI setting
 * [SETTING] Search>Default Search Engine>Choose a different default search engine for Private Windows only ***/
user_pref("browser.search.separatePrivateDefault", false); // [FF70+]
user_pref("browser.search.separatePrivateDefault.ui.enabled", false); // [FF71+]

/*** [SECTION 2800]: SHUTDOWN & SANITIZING ***/
/* 2811: set/enforce what items to clear on shutdown (if 2810 is true) [SETUP-CHROME]
 * [NOTE] If "history" is true, downloads will also be cleared ***/
user_pref("privacy.clearOnShutdown.siteSettings", true); // [DEFAULT: false]
user_pref("privacy.clearOnShutdown_v2.siteSettings", true); // [FF128+] [DEFAULT: false]
/* 2812: set Session Restore to clear on shutdown (if 2810 is true) [FF34+]
 * [NOTE] Not needed if Session Restore is not used (0102) or it is already cleared with history (2811)
 * [NOTE] If true, this prevents resuming from crashes (also see 5008) ***/
user_pref("privacy.clearOnShutdown.openWindows", true);
/* 2820: set manual "Clear Data" items [SETUP-CHROME] [FF128+]
 * Firefox remembers your last choices. This will reset them when you start Firefox
 * [SETTING] Privacy & Security>Browser Privacy>Cookies and Site Data>Clear Data ***/
user_pref("privacy.clearSiteData.cookiesAndStorage", true); // keep false until it respects "allow" site exceptions
user_pref("privacy.clearSiteData.siteSettings", true);
/* 2830: set manual "Clear History" items, also via Ctrl-Shift-Del [SETUP-CHROME]
 * Firefox remembers your last choices. This will reset them when you start Firefox
 * [NOTE] Regardless of what you set "downloads" to, as soon as the dialog
 * for "Clear Recent History" is opened, it is synced to the same as "history"
 * [SETTING] Privacy & Security>History>Custom Settings>Clear History ***/
user_pref("privacy.cpd.downloads", true); // not used, see note above
user_pref("privacy.cpd.cookies", true);
user_pref("privacy.cpd.offlineApps", true); // [DEFAULT: false]
user_pref("privacy.clearHistory.cookiesAndStorage", true);
user_pref("privacy.cpd.openWindows", true); // Session Restore
user_pref("privacy.cpd.passwords", true);
user_pref("privacy.cpd.siteSettings", true);
user_pref("privacy.clearHistory.siteSettings", true);

/*** [SECTION 4500]: OPTIONAL RFP (resistFingerprinting) ***/
/* 4501: enable RFP
 * [NOTE] pbmode applies if true and the original pref is false
 * [SETUP-WEB] RFP can cause some website breakage: mainly canvas, use a canvas site exception via the urlbar.
 * RFP also has a few side effects: mainly that timezone is GMT, and websites will prefer light theme ***/
user_pref("privacy.resistFingerprinting", true); // [FF41+]
user_pref("privacy.resistFingerprinting.pbmode", true); // [FF114+]
/* 4504: enable letterboxing [FF67+]
 * Dynamically resizes the inner window by applying margins in stepped ranges [2]
 * If you use the dimension pref, then it will only apply those resolutions.
 * The format is "width1xheight1, width2xheight2, ..." (e.g. "800x600, 1000x1000")
 * [SETUP-WEB] This is independent of RFP (4501). If you're not using RFP, or you are but
 * dislike the margins, then flip this pref, keeping in mind that it is effectively fingerprintable
 * [WARNING] DO NOT USE: the dimension pref is only meant for testing
 * [1] https://bugzilla.mozilla.org/1407366
 * [2] https://hg.mozilla.org/mozilla-central/rev/6d2d7856e468#l2.32 ***/
user_pref("privacy.resistFingerprinting.letterboxing", true); // [HIDDEN PREF]
/* 4506: disable RFP spoof english prompt [FF59+]
 * 0=prompt, 1=disabled, 2=enabled
 * [NOTE] When changing from value 2, preferred languages ('intl.accept_languages') is not reset.
 * [SETUP-WEB] when enabled, sets 'en-US, en' for displaying pages and 'en-US' as locale.
 * [SETTING] General>Language>Choose your preferred language for displaying pages>Choose>Request English... ***/
user_pref("privacy.spoof_english", 2);
/* 4520: disable WebGL (Web Graphics Library) ***/
user_pref("webgl.disabled", true);

/*** [SECTION 5000]: OPTIONAL OPSEC ***/
/* 5002: disable memory cache
 * capacity: -1=determine dynamically (default), 0=none, n=memory capacity in kibibytes ***/
user_pref("browser.cache.memory.enable", false);
user_pref("browser.cache.memory.capacity", 0);
/* 5003: disable saving passwords
 * [NOTE] This does not clear any passwords already saved
 * [SETTING] Privacy & Security>Logins and Passwords>Ask to save logins and passwords for websites ***/
user_pref("signon.rememberSignons", false);
/* 5004: disable permissions manager from writing to disk [FF41+] [RESTART]
 * [NOTE] This means any permission changes are session only
 * [1] https://bugzilla.mozilla.org/967812 ***/
user_pref("permissions.memory_only", true); // [HIDDEN PREF]
/* 5005: disable intermediate certificate caching [FF41+] [RESTART]
 * [NOTE] This affects login/cert/key dbs. The effect is all credentials are session-only.
 * Saved logins and passwords are not available. Reset the pref and restart to return them ***/
user_pref("security.nocertdb", true);
/* 5006: disable favicons in history and bookmarks
 * [NOTE] Stored as data blobs in favicons.sqlite, these don't reveal anything that your
 * actual history (and bookmarks) already do. Your history is more detailed, so
 * control that instead; e.g. disable history, clear history on exit, use PB mode
 * [NOTE] favicons.sqlite is sanitized on Firefox close ***/
user_pref("browser.chrome.site_icons", false);
/* 5007: exclude "Undo Closed Tabs" in Session Restore ***/
// user_pref("browser.sessionstore.max_tabs_undo", 0);
/* 5008: disable resuming session from crash
 * [TEST] about:crashparent ***/
user_pref("browser.sessionstore.resume_from_crash", false);
/* 5009: disable "open with" in download dialog [FF50+]
 * Application data isolation [1]
 * [1] https://bugzilla.mozilla.org/1281959 ***/
user_pref("browser.download.forbid_open_with", true);
/* 5010: disable location bar suggestion types
 * [SETTING] Search>Address Bar>When using the address bar, suggest ***/
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.topsites", false); // [FF78+]
/* 5011: disable location bar dropdown
 * This value controls the total number of entries to appear in the location bar dropdown ***/
user_pref("browser.urlbar.maxRichResults", 0);
/* 5012: disable location bar autofill
 * [1] https://support.mozilla.org/kb/address-bar-autocomplete-firefox#w_url-autocomplete ***/
user_pref("browser.urlbar.autoFill", false);
/* 5013: disable browsing and download history
 * [NOTE] We also clear history and downloads on exit (2811)
 * [SETTING] Privacy & Security>History>Custom Settings>Remember browsing and download history ***/
// user_pref("places.history.enabled", false);
/* 5014: disable Windows jumplist [WINDOWS] ***/
user_pref("browser.taskbar.lists.enabled", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled", false);
user_pref("browser.taskbar.lists.tasks.enabled", false);
/* 5017: disable Form Autofill
 * If .supportedCountries includes your region (browser.search.region) and .supported
 * is "detect" (default), then the UI will show. Stored data is not secure, uses JSON
 * [SETTING] Privacy & Security>Forms and Autofill>Autofill addresses
 * [1] https://wiki.mozilla.org/Firefox/Features/Form_Autofill ***/
user_pref("extensions.formautofill.addresses.enabled", false); // [FF55+]
user_pref("extensions.formautofill.creditCards.enabled", false); // [FF56+]
/* 5018: limit events that can cause a pop-up ***/
user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");
/* 5019: disable page thumbnail collection ***/
user_pref("browser.pagethumbnails.capturing_disabled", true); // [HIDDEN PREF]
/* 5020: disable Windows native notifications and use app notications instead [FF111+] [WINDOWS] ***/
user_pref("alerts.useSystemBackend.windows.notificationserver.enabled", false);

user_pref("_user.js.parrot", "I'm a qualified brain surgeon!");

/*** CUSTOM PREFS ***/
/* disable translation prompts ***/
user_pref("browser.translations.enable", false);
/* disable pocket ***/
user_pref("extensions.pocket.enabled", false);
/* disable firefox account sign-in ***/
user_pref("identity.fxaccounts.enabled", false);

user_pref("_user.js.parrot", "I only do this 'cause I like bein' me own boss");
