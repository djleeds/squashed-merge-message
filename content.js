var squashMergeMessage = function() {
  var squashButton = document.querySelector('.merge-message .btn-group-squash');

  if (!squashButton) return;

  const squashAndMergeMessageTemplate = `https://ramseysolutions.atlassian.net/browse/DEBIT-####

Overview: --

Before: --

After: --

Why: --`;

  squashButton.addEventListener('click', function() {
    var messageField = document.getElementById('merge_message_field');
    if (!messageField) return;

    messageField.value = squashAndMergeMessageTemplate;
  });
}

document.addEventListener('pjax:end', squashMergeMessage);
squashMergeMessage();
