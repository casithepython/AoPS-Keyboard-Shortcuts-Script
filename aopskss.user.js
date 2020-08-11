// ==UserScript==
// @name         AoPS Keyboard Shortcuts Script
// @namespace    http://tampermonkey.net/
// @version      v1.0
// @description  If you want a new shortcut added, PM casi at artofproblemsolving.com/community
// @author       casi
// @match        https://artofproblemsolving.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @run-at document-start
// ==/UserScript==

function feedKeyPress(e) {

    // this would test for whichever key is 40 and the ctrl key at the same time
    if (e.ctrlKey && e.altKey && e.keyCode == 82) {
        // call your function to do the thing
        if ($("#feed-wrapper").hasClass("feed-open")) {
            $("#feed-topic > div > div.cmty-topic-posts-outer-wrapper > div > div.aops-scroll-inner > div > div.cmty-topic-posts-bottom > div").click()
        } else {
            $(".cmty-topic-mini-reply").click()
        }
    }
}
document.addEventListener('keyup', feedKeyPress, false);