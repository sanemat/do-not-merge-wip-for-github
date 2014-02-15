'use strict';

(function($){
  var $container = $('#js-repo-pjax-container');
  var issueTitle = $container.find('#js-discussion-header .js-issue-title').text();
  if (/(\[wip\]|\[do\s*not\s*merge\])/i.test(issueTitle)) {
    var $buttonMerge = $container.find('#js-pull-merging button.merge-branch-action.js-details-target');
    $buttonMerge.attr('disabled', true);
    $buttonMerge.text("WIP! You can't merge!");
  }
})(jQuery);
