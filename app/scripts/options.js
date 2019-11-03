(() => {
  'use strict';

  window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('buttonMessage').value = localStorage.buttonMessage;

    document.getElementById('save_btn').closest('form').addEventListener('submit', e => {
      e.preventDefault();
      localStorage.buttonMessage = e.target.buttonMessage.value;

      window.alert('The options have been saved!');
    });
  });
})();
