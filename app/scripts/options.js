(() => {
  'use strict';

  // Define browser for cross-browser compatibility
  var browser = (typeof browser !== 'undefined') ? browser : chrome;

  window.addEventListener('DOMContentLoaded', () => {
    browser.storage.local.get('buttonMessage', function (result) {
      document.getElementById('buttonMessage').value = result.buttonMessage || '';
    });

    document.getElementById('save_btn').closest('form').addEventListener('submit', e => {
      e.preventDefault();
      const buttonMessage = e.target.buttonMessage.value;
      browser.storage.local.set({ buttonMessage: buttonMessage }, function () {
        window.alert('The options have been saved!');
      });
    });
  });
})();
