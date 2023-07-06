user_pref("_user.js.parrot", "OVERRIDES error: the parrot sleeps with the fishes!");

user_pref("browser.cache.memory.enable", false);                                        // disable memory cache
user_pref("browser.chrome.site_icons", false);                                          // disable favicons in history and bookmarks
user_pref("browser.contentblocking.report.lockwise.enabled", false);                    // disable reporting of visited sites to check for breaches
user_pref("browser.download.autohideButton", false);                                    // do not auto-hide downloads button
user_pref("browser.download.open_pdf_attachments_inline", true);                        // do not autodownload PDF files before opening them
user_pref("browser.pagethumbnails.capturing_disabled", true);                           // disable page thumbnail collection
user_pref("browser.safebrowsing.downloads.remote.enabled", true);                       // enable safe browsing checks for downloads
user_pref("browser.tabs.closeWindowWithLastTab", false);                                // do not close window after closing last tab
user_pref("browser.tabs.firefox-view", false);                                          // disable tab syncing across devices
user_pref("browser.urlbar.autoFill", false);                                            // do not autocomplete text in the address bar
user_pref("browser.urlbar.suggest.bookmark", false);                                    // do not suggest bookmarks
user_pref("browser.urlbar.suggest.engines", false);                                     // do not suggest search engines
user_pref("browser.urlbar.suggest.history", false);                                     // do not suggest history
user_pref("browser.urlbar.suggest.openpage", false);                                    // do not suggest currently open pages
user_pref("browser.urlbar.suggest.topsites", false);                                    // do not suggest top sites
user_pref("dom.block_download_insecure", true);                                         // block downloads from an insecure protocol (like http)
user_pref("dom.push.connection.enabled", false);                                        // disable push notifications connection
user_pref("dom.push.enabled", false);                                                   // disable push notifications
user_pref("dom.push.userAgentID", "");                                                  // user-agent id for push services
user_pref("dom.security.https_only_mode.upgrade_local", true);                          // upgrade to https protocol for local resources
user_pref("dom.webnotifications.enabled", false);                                       // disable web notifications
user_pref("dom.webnotifications.serviceworker.enabled", false);                         // disable background web notifications
user_pref("extensions.formautofill.addresses.enabled", false);                          // disable autofilling of addresses
user_pref("extensions.formautofill.creditCards.enabled", false);                        // disable autofilling of credit cards
user_pref("extensions.formautofill.heuristics.enabled", false);                         // disable autofilling heuristics
user_pref("extensions.pocket.enabled", false);                                          // disable pocket
user_pref("extensions.pocket.onSaveRecs", false);                                       // disable pocket recommendations
user_pref("extensions.systemAddon.update.enabled", false);                              // disable updating of system add-ons
user_pref("extensions.systemAddon.update.url", "");                                     // url of system add-on updates
user_pref("extensions.update.autoUpdateDefault", false);                                // disable automatic installation of extension updates
user_pref("extensions.update.enabled", true);                                           // enable checking of extension updates
user_pref("extensions.webextensions.restrictedDomains", "");                            // list of domains where extensions are not allowed
user_pref("findbar.highlightAll", true);                                                // highlight all instances of search terms
user_pref("identity.fxaccounts.enabled", false);                                        // disable firefox syncing
user_pref("media.autoplay.blocking_policy", 2);                                         // audio/video content is click-to-play
user_pref("media.autoplay.default", 5);                                                 // block all media playbacks
user_pref("permissions.memory_only", true)                                              // permissions are session-only
user_pref("privacy.cpd.cookies", true);                                                 // delete cookies upon clearing history
user_pref("privacy.cpd.offlineApps", true);                                             // delete offline website data upon clearing history
user_pref("privacy.cpd.openWindows", false);                                            // delete open windows upon clearing history
user_pref("privacy.cpd.passwords", false);                                              // delete saved passwords upon clearing history
user_pref("privacy.cpd.siteSettings", false);                                           // delete site settings upon clearing history
user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);              // open container choice on new tab clicks
user_pref("signon.firefoxRelay.feature", "disabled");                                   // disable firefox relay
user_pref("signon.generation.enabled", false);                                          // disable password generation
user_pref("signon.management.page.breach-alerts.enabled", false);                       // disable alert for logins into breached websites
user_pref("signon.rememberSignons", false);                                             // disable saving of login credentials
user_pref("startup.homepage_override_url", "");                                         // url of What's New page after browser update
user_pref("startup.homepage_welcome_url", "");                                          // url of Welcome page
user_pref("startup.homepage_welcome_url.additional", "");                               // url of additional Welcome page
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);                 // allow styling with userChrome.css

user_pref("_user.js.parrot", "OVERRIDES success: the parrot's alive and well.");
