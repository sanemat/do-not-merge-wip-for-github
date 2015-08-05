'use strict';

(function($){
  var changeMergeButtonState = function() {
    var $container = $('#js-repo-pjax-container');
    var issueTitle = $container.find('.js-issue-title').text();
    var $buttonMerge = $container.find('.merge-message button.js-merge-branch-action');
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
        var wipTitleRegex = /(\[wip\]|\[do\s*not\s*merge\]|\[dnm\])/i;
        var wipTagRegex = /(wip|do\s*not\s*merge|dnm)/i;

        var isWipTitle = wipTitleRegex.test(issueTitle);
        var isWipTaksList = $container.find('.timeline-comment:first input[type="checkbox"]:not(:checked)').length > 0;
        var isSquashCommits = false;
        $container.find('#commits_bucket .commit .commit-title').each(function(i, elem){
          isSquashCommits = isSquashCommits || $(elem).text().match(/^\s*(squash|fixup)!\s/);
        });

        var isWipTag = false;
        $container.find('#discussion_bucket .labels .label').each(function(i, elem) {
          isWipTag = isWipTag || $(elem).text().match(wipTagRegex);
        });

        disabled = (isWipTitle || isWipTaksList || isSquashCommits || isWipTag);

        var buttonMessage = '';

        if (localStorage && localStorage.buttonMessage) {
          buttonMessage = localStorage.buttonMessage;
        } else {
          buttonMessage = 'WIP! You can\'t merge!';
        }

        buttonHtml = '<span class="octicon octicon-git-merge"></span> ' + (disabled ? buttonMessage : 'Merge pull request');
      }

      $buttonMerge.attr('disabled', disabled);
      $buttonMerge.html(buttonHtml);
    });
  };

  changeMergeButtonState();
  setInterval(changeMergeButtonState, 1000);
})(jQuery);
