'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  if (request.subject === 'localStorage') {
    sendResponse({localStorage: localStorage});
  }
});
