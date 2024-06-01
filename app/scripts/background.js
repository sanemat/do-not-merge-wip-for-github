'use strict';

const browser = require('webextension-polyfill.min');

browser.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

browser.runtime.onMessage.addListener(function(request, sender, sendResponse){
  if (request.subject === 'localStorage') {
    sendResponse({localStorage: localStorage});
  }
});
