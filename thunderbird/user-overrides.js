
/* error message */
user_pref("_user.js.parrot", "OVERRIDES error: the parrot sleeps with the fishes!");

/* overrides */
user_pref("browser.safebrowsing.downloads.remote.enabled", true);                       // enable safe browsing checks for downloads
user_pref("calendar.timezone.local", "Europe/Madrid");                                  // provide timezone to prevent automatic extraction
user_pref("calendar.week.start", 1);                                                    // start the week on monday
user_pref("clipboard.plainTextOnly", true);                                             // do not retain formatting when copy/pasting text
user_pref("dom.push.connection.enabled", false);                                        // disable push notifications connection
user_pref("dom.push.enabled", false);                                                   // disable push notifications
user_pref("dom.webnotifications.enabled", false);                                       // disable web notifications
user_pref("dom.webnotifications.serviceworker.enabled", false);                         // disable background web notifications
user_pref("extensions.webextensions.restrictedDomains", "");                            // list of domains where extensions are not allowed
user_pref("general.useragent.compatMode.firefox", true);                                // limit sending extra user-agent data
user_pref("privacy.donottrackheader.enabled", false);                                   // disable dnt header (it is fingerprintable)
user_pref("extensions.update.autoUpdateDefault", false);                                // disable automatic installation of extension updates
user_pref("mail.mdn.report.enabled", false);                                            // disable sending of return receipts
user_pref("mail.wrap_long_lines", false);                                               // do not wrap lines when sending plaintext mail
user_pref("mailnews.database.global.indexer.enabled", false);                           // disable search indexer
user_pref("mailnews.display.prefer_plaintext", true);                                   // display messages as plaintext
user_pref("mailnews.wraplength", 0)                                                     // disable line wrapping when sending plaintext mail
user_pref("offline.autoDetect", false);                                                 // disable connection status autodetection
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);                 // allow styling with userChrome.css
user_pref("view_source.syntax_highlight", true);                                        // highlight source code of documents

/* oauth2 settings */
user_pref("network.cookie.cookieBehavior", 1);                                          // accept same-origin cookies (default: 2)
user_pref("network.http.referer.XOriginPolicy", 0);                                     // always send cross-origin referrer (default: 2)
user_pref("network.http.sendRefererHeader", 2);                                         // send referrer header and set document referrer (default: 0)
user_pref("javascript.enabled", true);                                                  // enable javascript (default: false)
user_pref("permissions.default.image", 3);                                              // allow visual captcha (default: 2)
user_pref("dom.webaudio.enabled", true);                                                // allow audio captcha (default: false)

/* success message */
user_pref("_user.js.parrot", "OVERRIDES success: the parrot's alive and well.");
