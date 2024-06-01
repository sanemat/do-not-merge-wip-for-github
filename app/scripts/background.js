'use strict';

// Define browser for cross-browser compatibility
var browser = (typeof browser !== 'undefined') ? browser : chrome;

function migrateLocalStorageToChromeStorage() {
  // Check if localStorage is not null and contains any keys
  if (!localStorage || Object.keys(localStorage).length === 0) {
    console.log('No localStorage data to migrate.');
    return;
  }

  // Get all localStorage keys
  const localStorageKeys = Object.keys(localStorage);
  const dataToMigrate = {};

  localStorageKeys.forEach((key) => {
    dataToMigrate[key] = localStorage.getItem(key);
  });

  // Store data in broswer.storage
  browser.storage.local.set(dataToMigrate, () => {
    console.log('Data migrated to browser.storage', dataToMigrate);

    // Clear localStorage after migration
    localStorage.clear();
  });
}

browser.runtime.onInstalled.addListener(function (details) {
  if (details.reason === 'install') {
    // Handle installation logic
    console.log('Extension installed');
  } else if (details.reason === 'update') {
    console.log('previousVersion', details.previousVersion);
    // Handle update logic
    migrateLocalStorageToChromeStorage();
  }
});

browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.subject === 'getStorage') {
    browser.storage.local.get(null, function(items) {
      sendResponse({storageData: items});
    });
    return true; // Keep the message channel open for sendResponse
  }
});
