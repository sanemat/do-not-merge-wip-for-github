'use strict';

// Define browser for cross-browser compatibility
if (typeof browser === 'undefined') {
  browser = chrome;
}

browser.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

browser.runtime.onMessage.addListener(function(request, sender, sendResponse){
  if (request.subject === 'localStorage') {
    sendResponse({localStorage: localStorage});
  }
});
