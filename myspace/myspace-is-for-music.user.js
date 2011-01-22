// ==UserScript==
// @name           Myspace is for music
// @namespace      http://www.tlvince.com/
// @author         Tom Vincent
// @description    Make Myspace usable by redirecting to the music player
// @include        http*://*myspace.com/*
// @version        0.2.0
// ==/UserScript==

redirect();

function redirect()
{
    var current = window.location.href;
    var player = "music-player";
    
    // Only redirect if we're not already on the music player page
    if (current.indexOf(player) == -1) {
        if (current.charAt(current.length - 1) != "/") {
            current = current + "/";
        }
        window.location.replace(current + player);
    }
}
