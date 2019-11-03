'use strict';

(function($){
  var changeMergeButtonState = function() {
    var $container = $('#js-repo-pjax-container');
    var container = document.querySelector('#js-repo-pjax-container');
    var issueTitle = container.querySelector('.js-issue-title').textContent;
    var buttonMerges = container.querySelectorAll('.merge-message button[data-details-container]');
    var buttonMergeOptions = container.querySelectorAll('.merge-message button[data-details-container] + .select-menu-button');
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
        var wipTitleRegex = /[\[(^](do\s*n[o']?t\s*merge|wip|dnm)[\]):]/i;
        var wipTagRegex = /(wip|do\s*not\s*merge|dnm)/i;

        var isWipTitle = wipTitleRegex.test(issueTitle);
        var isWipTaskList = $container.find('.timeline-comment:first input[type="checkbox"]:not(:checked)').length > 0;
        var isSquashCommits = false;
        $container.find('#commits_bucket .commit .commit-title').each(function(i, elem){
          isSquashCommits = isSquashCommits || $(elem).text().match(/^\s*(squash|fixup)!\s/);
        });

        var isWipTag = false;
        $container.find('#discussion_bucket .labels .label').each(function(i, elem) {
          isWipTag = isWipTag || $(elem).text().match(wipTagRegex);
        });

        disabled = (isWipTitle || isWipTaskList || isSquashCommits || isWipTag);

        var buttonMessage = '';

        if (localStorage && localStorage.buttonMessage) {
          buttonMessage = localStorage.buttonMessage;
        } else {
          buttonMessage = 'WIP! You can\'t merge!';
        }

        buttonHtml = disabled ? buttonMessage : 'Merge pull request';
      }

      for (const buttonMerge of buttonMerges) {
        buttonMerge.disabled = disabled;
        buttonMerge.innerHTML = buttonHtml;
      }
      for (const buttonMergeOption of buttonMergeOptions) {
        buttonMergeOption.disabled = disabled;
      }
    });
  };

  changeMergeButtonState();
  setInterval(changeMergeButtonState, 1000);
})(jQuery);
