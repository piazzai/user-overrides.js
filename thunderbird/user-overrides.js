user_pref("_user.js.parrot", "I don't have to do this, you know?");

/*** [SECTION 0100]: STARTUP ***/
/* 0102: set START page [SETUP-CHROME]
 * [SETTING] General > Thunderbird Start Page ***/
user_pref("mailnews.start_page.enabled", false);

/*** [SECTION 0600]: BLOCK IMPLICIT OUTBOUND [not explicitly asked for - e.g. clicked on] ***/
/* 0610: enforce no "Hyperlink Auditing" (click tracking)
 * [1] https://www.bleepingcomputer.com/news/software/major-browsers-to-prevent-disabling-of-click-tracking-privacy-risk/ ***/
user_pref("browser.send_pings", false); // [DEFAULT: false]

/*** [SECTION 0800]: LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS ***/
/* 0808: disable recent searches [FF120+]
 * [NOTE] Recent searches are cleared with history (2811)
 * [1] https://support.mozilla.org/kb/search-suggestions-firefox ***/
user_pref("browser.urlbar.recentsearches.featureGate", false);

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
 * Thunderbird remembers your last choices. This will reset them when you start Thunderbird
 * [SETTING] Privacy & Security>Browser Privacy>Cookies and Site Data>Clear Data ***/
user_pref("privacy.clearSiteData.cookiesAndStorage", true); // keep false until it respects "allow" site exceptions
user_pref("privacy.clearSiteData.siteSettings", true);
/* 2830: set manual "Clear History" items, also via Ctrl-Shift-Del [SETUP-CHROME]
 * Thunderbird remembers your last choices. This will reset them when you start Thunderbird
 * [NOTE] Regardless of what you set "downloads" to, as soon as the dialog
 * for "Clear Recent History" is opened, it is synced to the same as "history" ***/
user_pref("privacy.cpd.downloads", true); // not used, see note above
user_pref("privacy.cpd.cookies", true);
user_pref("privacy.clearHistory.cookiesAndStorage", true);
user_pref("privacy.cpd.openWindows", true); // Session Restore
user_pref("privacy.cpd.passwords", true);
user_pref("privacy.cpd.siteSettings", true);
user_pref("privacy.clearHistory.siteSettings", true);

/*** [SECTION 4500]: OPTIONAL RFP (resistFingerprinting)
/* 4501: enable RFP
 * [NOTE] pbmode applies if true and the original pref is false
 * [SETUP-WEB] RFP can cause some website breakage: mainly canvas, use a canvas site exception via the urlbar.
 * RFP also has a few side effects: mainly that timezone is GMT, and websites will prefer light theme ***/
user_pref("privacy.resistFingerprinting", true); // [FF41+]
user_pref("privacy.resistFingerprinting.pbmode", true); // [FF114+]
/* 4506: disable RFP spoof english prompt [FF59+]
 * 0=prompt, 1=disabled, 2=enabled
 * [NOTE] When changing from value 2, preferred languages ('intl.accept_languages') is not reset.
 * [SETUP-WEB] when enabled, sets 'en-US, en' for displaying pages and 'en-US' as locale.
 * [SETTING] General>Language>Choose your preferred language for displaying pages>Choose>Request English... ***/
user_pref("privacy.spoof_english", 2);

/*** [SECTION 5000]: OPTIONAL OPSEC ***/
/* 5008: disable resuming session from crash
 * [TEST] about:crashparent ***/
user_pref("browser.sessionstore.resume_from_crash", false);
/* 5020: disable Windows native notifications and use app notications instead [FF111+] [WINDOWS] ***/
user_pref("alerts.useSystemBackend.windows.notificationserver.enabled", false);

/*** [SECTION 9000]: NON-PROJECT RELATED ***/
/* 9090: disable return receipt sending unconditionally ***/
user_pref("mail.mdn.report.enabled", false);

/*** [SECTION 9100]: THUNDERBIRD (AUTO CONFIG / UI / HEADERS / ADDRESS BOOK) ***/
/* 9113: Don't hide cookies and passwords related (advanced?) buttons ***/
user_pref("pref.privacy.disable_button.view_cookies", true);
user_pref("pref.privacy.disable_button.cookie_exceptions", true);
user_pref("pref.privacy.disable_button.view_passwords", true);

/*** [SECTION 9200]: EMAIL COMPOSITION (ENCODING / FORMAT / VIEW) ***/
/* 9210: Check spelling before sending
 * [1] https://bugzilla.mozilla.org/show_bug.cgi?id=667133 ***/
user_pref("mail.SpellCheckBeforeSend", false);
/* 9212: Compose email in plaintext unless expressly overridden
 * Sometimes HTML is useful especially when used with Markdown Here
 * [SETTING] Account Settings > Composition & Addressing > Composition > Compose messages in HTML format
 * [NOTE] Holding down shift when you click on "Write" will bypass
 * [1] http://kb.mozillazine.org/Plain_text_e-mail_%28Thunderbird%29
 * [2] https://support.mozilla.org/en-US/questions/1004181
 * [3] https://markdown-here.com ***/
user_pref("mail.html_compose", false);
/* 9217: Inline attachments [SETUP-FEATURE]
 * true=Show inlinable attachments (text, images, messages) after the message.
 * false=Do not display any attachments with the message ***/
user_pref("mail.inline_attachments.text", false);

/*** [SECTION 9300]: OTHER THUNDERBIRD COMPONENTS (CHAT / CALENDAR / RSS) ***/
/* 9306: When chat is enabled, do not connect to accounts automatically
 * 0=Do not connect / show the account manager,
 * 1=Connect automatically. (Default) ***/
user_pref("messenger.startup.action", 0);
/* 9307: When chat is enabled, do not report idle status ***/
user_pref("messenger.status.reportIdle", false);
/* 9308: Disable chat desktop notifications ***/
user_pref("mail.chat.show_desktop_notifications", false);
/* 9313: Disable calendar service performing event "extraction" from email content ***/
user_pref("calendar.extract.service.enabled", false);  // [DEFAULT: false]

user_pref("_user.js.parrot", "I'm a qualified brain surgeon!");

/*** CUSTOM PREFS ***/
/* disable line wrapping in mail reader ***/
user_pref("mailnews.wraplength", 0);

/*** OAUTH SETTINGS ***/
/* uncomment these lines and run the updater to log into your account using oauth
 * after login, comment them out and run the updater again to restore privacy-enhancing defaults ***/
// user_pref("security.OCSP.enabled", 0); // 1211 [DEFAULT: 1]
// user_pref("network.cookie.cookieBehavior", 1); // 7016 [DEFAULT: 5]
// user_pref("javascript.enabled", true); // 9230 [DEFAULT: false]
// user_pref("permissions.default.image", 3); // 9233 [DEFAULT: 2]

user_pref("_user.js.parrot", "I only do this 'cause I like bein' me own boss");
