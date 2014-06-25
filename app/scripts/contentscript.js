'use strict';

(function($){
  var changeMergeButtonState = function() {
    var $container = $('#js-repo-pjax-container');
    var issueTitle = $container.find('#js-discussion-header .js-issue-title').text();

    var isWipTitle = /(\[wip\]|\[do\s*not\s*merge\])/i.test(issueTitle);
    var isWipTaksList = $container.find('.timeline-comment:first input[type="checkbox"]:not(:checked)').length > 0;
    var isWip = (isWipTitle || isWipTaksList);

    var $buttonMerge = $container.find('#js-pull-merging button.merge-branch-action.js-details-target');
    var buttonHtml = isWip ? 'WIP! You can\'t merge!' : '<span class="octicon octicon-git-merge"></span> Merge pull request';
    $buttonMerge.attr('disabled', isWip);
    $buttonMerge.html(buttonHtml);
  };
  setInterval(changeMergeButtonState, 1000);
})(jQuery);
