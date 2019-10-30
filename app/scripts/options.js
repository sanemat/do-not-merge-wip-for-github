(() => {
  'use strict';

  window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('protected_branch').value = localStorage.protectedBranch;
    document.getElementById('button_message').value = localStorage.buttonMessage;

    document.getElementById('save_btn').closest('form').addEventListener('submit', e => {
      e.preventDefault();
      localStorage.protectedBranch = e.target['protected_branch'].value;
      localStorage.buttonMessage = e.target['button_message'].value;

      window.alert('The options have been saved!');
    });
  });
})();
