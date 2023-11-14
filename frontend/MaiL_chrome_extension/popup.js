// popup.js
const button = document.getElementById('test_button');


button.addEventListener('click', function () {
  const statusElement = document.getElementById('status');
  const contentElement = document.getElementById('content'); // Element to display the content of the div
  const lechat = document.getElementById('lechat');

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // Check if the current tab's URL is Gmail
    if (tabs[0].url.includes('mail.google.com')) {
      statusElement.textContent = 'Gmail is detected!';
      // Send message to content script to get the content of the div with id 'rf'
      chrome.tabs.sendMessage(tabs[0].id, { action: "getDivContent" }, function(response) {
        if (response && response.divContent) {
          // Display the content in your popup
          contentElement.textContent = response.divContent;
          lechat.textContent = response.text;
        } else {
          contentElement.textContent = 'No content found or an error occurred.';
        }
      });
    } else {
      statusElement.textContent = 'Gmail is not detected.';
      contentElement.textContent = 'This extension works only on Gmail.';
    }
  });
});
