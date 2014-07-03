'use strict';

(function($){
  var changeMergeButtonState = function() {
    var $container = $('#js-repo-pjax-container');
    var issueTitle = $container.find('#js-discussion-header .js-issue-title').text();
    var $buttonMerge = $container.find('.merge-message button.merge-branch-action');
    var disabled = false;
    var buttonHtml = '';

    chrome.runtime.sendMessage({from: 'content', subject: 'localStorage'}, function(response){
      if (!response) { return; }

      var localStorage = response.localStorage;
      if ($('.merge-message .octicon-git-branch-delete').length > 0) {
        if (localStorage && localStorage.protectedBranch) {
          disabled = (new RegExp(localStorage.protectedBranch)).test($('.merge-message .css-truncate-target').text());
        }
        buttonHtml = '<span class="octicon octicon-git-branch-delete"></span> ' + (disabled ? 'Protected branch' : 'Delete branch');
      } else {
        var isWipTitle = /(\[wip\]|\[do\s*not\s*merge\])/i.test(issueTitle);
        var isWipTaksList = $container.find('.timeline-comment:first input[type="checkbox"]:not(:checked)').length > 0;
        disabled = (isWipTitle || isWipTaksList);
        buttonHtml = '<span class="octicon octicon-git-merge"></span> ' + (disabled ? 'WIP! You can\'t merge!' : 'Merge pull request');
      }

      $buttonMerge.attr('disabled', disabled);
      $buttonMerge.html(buttonHtml);
    });
  };

  changeMergeButtonState();
  setInterval(changeMergeButtonState, 1000);
})(jQuery);
