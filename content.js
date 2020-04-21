var findTicketNumber = function() {
  var pattern = /DEBIT-\d+\b/;
  var defaultTicketNumber = "DEBIT-XXXX";

  var pullRequestNameField = document.querySelector("#partial-discussion-header .js-issue-title");
  if(pullRequestNameField) {
    var pullRequestName = pullRequestNameField.textContent.trim();
    var match = pullRequestName.match(pattern);
    if(match) {
      return match[0];
    }
  }
  
  return defaultTicketNumber;
}

var squashMergeMessage = function() {
  var squashButton = document.querySelector('.merge-message .btn-group-squash');

  if (!squashButton) return;

  const squashAndMergeMessageTemplate = `https://ramseysolutions.atlassian.net/browse/DEBIT-XXXX

Overview: --

Before: --

After: --

Why: --`;

  squashButton.addEventListener('click', function() {
    var messageField = document.getElementById('merge_message_field');
    if (!messageField) return;

    messageField.value = squashAndMergeMessageTemplate.replace("DEBIT-XXXX", findTicketNumber());
  });
}

document.addEventListener('pjax:end', squashMergeMessage);
squashMergeMessage();
