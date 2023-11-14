// background.js

// This listener checks for updates in tabs to identify when you're on Gmail
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Make sure the URL is defined and the updated status is 'complete' before sending a message.
  if (changeInfo.status === 'complete' && tab.url && tab.url.includes('mail.google.com')) {
    // Send a message to the content script
    chrome.tabs.sendMessage(tabId, { action: "checkWebsite" });
  }
});

// Listener for fetching text, triggered by the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'fetchText' && sender.tab) {
    // Send a message back to the content script to perform the fetch
    chrome.tabs.sendMessage(sender.tab.id, { action: "fetchText" });
    return true; // Indicate that you wish to send a response asynchronously
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "sendPostRequest") {
    fetch('http://localhost:8000/openai/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ input_text: message.inputText })
    })
    .then(response => response.text())
    .then(text => sendResponse({ text: text }))
    .catch(error => console.error('Error:', error));

    return true; // Return true to indicate you wish to send a response asynchronously
  }
});