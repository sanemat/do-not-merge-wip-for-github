browser = require('webextension-polyfill'); // eslint-disable-line no-global-assign

const handleMessage = (request, sender, sendResponse) => {
  if (request === 'settings') {
    browser.storage.local.get().then(settings => {
      sendResponse({ settings: settings });
    });
  }
};

browser.runtime.onMessage.addListener(handleMessage);
