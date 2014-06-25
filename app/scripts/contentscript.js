'use strict';

(function($){
  var changeMergeButtonState = function() {
    var $container = $('#js-repo-pjax-container');
    var issueTitle = $container.find('#js-discussion-header .js-issue-title').text();
    var caution = /(\[wip\]|\[do\s*not\s*merge\])/i.test(issueTitle);
    var $buttonMerge = $container.find('#js-pull-merging button.merge-branch-action.js-details-target');
    var buttonText = caution ? 'WIP! You can\'t merge!' : '<span class="octicon octicon-git-merge"></span> Merge pull request';
    $buttonMerge.attr('disabled', caution);
    $buttonMerge.html(buttonText);
  };
  setInterval(changeMergeButtonState, 1000);
})(jQuery);
