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
      var wipTitleRegex = /[\[(^](do\s*n[o']?t\s*merge|wip|dnm)[\]):]/i;
      var wipTagRegex = /(wip|do\s*not\s*merge|dnm)/i;

      var isWipTitle = wipTitleRegex.test(issueTitle);
      var isWipTaskList = $container.find('.timeline-comment:first input[type="checkbox"]:not(:checked)').length > 0;
      var isSquashCommits = false;
      for (const commitMessage of container.querySelectorAll('.commit-message')) {
        isSquashCommits = isSquashCommits || commitMessage.textContent.match(/(squash|fixup)!/);
      }

      var isWipTag = false;
      for (const label of container.querySelectorAll('.js-issue-labels .IssueLabel')) {
        isWipTag = isWipTag || label.textContent.match(wipTagRegex);
      }

      disabled = (isWipTitle || isWipTaskList || isSquashCommits || isWipTag);

      var buttonMessage = '';

      if (localStorage && localStorage.buttonMessage) {
        buttonMessage = localStorage.buttonMessage;
      } else {
        buttonMessage = 'WIP! You can\'t merge!';
      }

      buttonHtml = disabled ? buttonMessage : 'Merge pull request';

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
