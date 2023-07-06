
user_pref("_user.js.parrot", "OVERRIDES error: the parrot sleeps with the fishes!");

user_pref("browser.safebrowsing.downloads.remote.enabled", true);                       // enable safe browsing checks for downloads
user_pref("calendar.timezone.local", "Europe/Madrid");                                  // provide timezone to prevent automatic extraction
user_pref("clipboard.plainTextOnly", true);                                             // do not retain formatting when copy/pasting text
user_pref("dom.push.enabled", false)                                                    // disable push notifications
user_pref("dom.webnotifications.enabled", false);                                       // disable web notifications
user_pref("dom.webnotifications.serviceworker.enabled", false);                         // disable web notification service workers
user_pref("extensions.webextensions.restrictedDomains", "");                            // list of domains where extensions are not allowed
user_pref("general.useragent.compatMode.firefox", true);                                // limit sending extra user-agent data
user_pref("privacy.donottrackheader.enabled", false);                                   // disable dnt header (as it is fingerprintable)
user_pref("extensions.update.autoUpdateDefault", false);                                // disable automatic installation of extension updates
user_pref("mail.mdn.report.enabled", false);                                            // disable sending of return receipts
user_pref("mail.wrap_long_lines", false);                                               // do not wrap lines when sending plaintext mail
user_pref("mailnews.database.global.indexer.enabled", false);                           // disable search indexer
user_pref("mailnews.display.prefer_plaintext", true);                                   // display messages as plaintext
user_pref("mailnews.wraplength", 0)                                                     // disable line wrapping when sending plaintext mail
user_pref("messenger.startup.action", 0);                                               // disable chat on startup
user_pref("offline.autoDetect", false);                                                 // disable connection status autodetection
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);                 // allow styling with userChrome.css
user_pref("view_source.syntax_highlight", true);                                        // highlight source code of documents

user_pref("_user.js.parrot", "OVERRIDES success: the parrot's alive and well.");
