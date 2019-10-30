'use strict';

(function($){
  $(function(){
    document.getElementById("protected_branch").value = localStorage.protectedBranch;
    document.getElementById("button_message").value = localStorage.buttonMessage;

    $('#save_btn').closest('form').submit(function(e) {
      e.preventDefault();
      localStorage.protectedBranch = document.getElementById("protected_branch").value;
      localStorage.buttonMessage = document.getElementById("button_message").value;

      window.alert('The options have been saved!');
    });
  });
})(jQuery);
