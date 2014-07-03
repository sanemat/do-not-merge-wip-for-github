'use strict';

(function($){
  $(function(){
    $('#protected_branch').val(localStorage.protectedBranch);

    $('#save_btn').closest('form').submit(function(e) {
      e.preventDefault();
      localStorage.protectedBranch = $('#protected_branch').val();

      window.alert('The options have been saved!');
    });
  });
})(jQuery);
