// ==UserScript==
// @name         He4rt Spotify
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make web discord pretty
// @author       You
// @match        https://open.spotify.com/
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  const css = `
    #main {
      background: #383E56 !important;
    }

    .Root__top-container {
      padding: 40px;
    }

    .Root__main-view {
      background: #9DB6E0 !important;
    }
  `;

  GM_addStyle(css);
})();