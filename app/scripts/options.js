'use strict';

(function($){
  $(function(){
    $('#protected_branch').val(localStorage.protectedBranch);
    $('#button_message').val(localStorage.buttonMessage);

    $('#save_btn').closest('form').submit(function(e) {
      e.preventDefault();
      localStorage.protectedBranch = $('#protected_branch').val();
      localStorage.buttonMessage = $('#button_message').val();

      window.alert('The options have been saved!');
    });
  });
})(jQuery);
