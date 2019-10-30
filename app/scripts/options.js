'use strict';

(function($){
  $(function(){
    $('#protected_branch').val(localStorage.protectedBranch);
    $('#button_message').val(localStorage.buttonMessage);

    $('#save_btn').closest('form').submit(function(e) {
      e.preventDefault();
      localStorage.protectedBranch = document.getElementById("protected_branch").value;
      localStorage.buttonMessage = document.getElementById("button_message").value;

      window.alert('The options have been saved!');
    });
  });
})(jQuery);
