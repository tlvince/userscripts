// ==UserScript==
// @name           Myspace Only Music
// @namespace      http://www.tlvince.com/
// @author         Tom Vincent
// @description    Make Myspace usable by redirecting to the music player
// @include        http*://*myspace.com/*
// @version        0.1.0
// ==/UserScript==

redirect();

function redirect()
{
    var player = "music-player"
    
    // Only redirect if we're not already on the music player page
    if (window.location.href.indexOf(player) == -1) {
        document.location.replace(document.URL + "/" + player)
    }
}
