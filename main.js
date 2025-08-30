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
        let alt=event.altKey,
            ctrl=event.ctrlKey,
            shift=event.shiftKey;
        const currentUrl = window.location.href;
        if (alt && event.key === 't') {
            event.preventDefault();
            GM_openInTab(currentUrl, { active: true });
        }
        //Open Gemini
        if (alt && event.key === 'g') {
            event.preventDefault();
            GM_openInTab("https://gemini.google.com/app?hl=vi", { active: true });
        }
        // Auto Capslock in Geogebra
        if (currentUrl === 'https://www.geogebra.org/geometry') {
            let c = event.key, x=c.charCodeAt(0);
            if (alt && ctrl) {
                return ;
            }
            if (x > 64 && x < 91) {
                x+=32;
                document.execCommand('insertText',false,String.fromCharCode(x));
            } else if (x > 96 && x < 123) {
                x-=32;
                document.execCommand('insertText',false,String.fromCharCode(x));
            }
        }
    });
})();
