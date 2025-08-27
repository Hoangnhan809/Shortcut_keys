// ==UserScript==
// @name         Shortcut Keys
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Press Alt + T to duplicate the current tab.
// @author       You
// @match        *://*/*
// @grant        GM_openInTab
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('keydown', function(event) {
        // Duplicate Tab
        let altK=event.altKey;
        if (altK && event.key === 't') {
            event.preventDefault();
            const currentUrl = window.location.href;
            GM_openInTab(currentUrl, { active: true });
        }
        if (altK && event.key === 'g') {
            event.preventDefault();
            GM_openInTab("https://gemini.google.com/app?hl=vi", { active: true });
        }
    });
})();
