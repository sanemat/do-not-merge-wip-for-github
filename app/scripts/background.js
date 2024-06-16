'use strict';

// Define browser for cross-browser compatibility
var browser = (typeof browser !== 'undefined') ? browser : chrome;

browser.runtime.onInstalled.addListener(function (details) {
  if (details.reason === 'install') {
    // Handle installation logic
    console.log('Extension installed');
  } else if (details.reason === 'update') {
    console.log('previousVersion', details.previousVersion);
    // Handle update logic
  }
});

browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.subject === 'getStorage') {
    browser.storage.local.get(null, function (items) {
      sendResponse({ storageData: items });
    });
    return true; // Keep the message channel open for sendResponse
  }
});
