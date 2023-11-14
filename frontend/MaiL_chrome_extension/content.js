// content.js

// Listener for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "checkWebsite") {
    // Logic to check if the current webpage is Gmail
    // This logic would typically be used to toggle the state of the popup or perform other actions
    console.log('Gmail detected, perform actions as necessary.');
  } else if (message.action === "fetchText") {
    // Perform the fetch text action
    const draftText = getDraftTextFromPage();
    sendResponse({ draftText: draftText });
  }
  return true; // Keep the message channel open for the sendResponse callback
});

// Function to extract the draft text from Gmail's DOM
function getDraftTextFromPage() {
  // Use the selector that your screenshot indicated
  const draftSelector = 'div[aria-label="Message Body"]';
  const draftElement = document.querySelector(draftSelector);
  return draftElement ? draftElement.textContent : '';
}

// content.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getDivContent") {
    // Select the div with the id 'rf' and get its content
    // const divContent = document.querySelector('.Am.Al.editable.LW-avf.tS-tW').textContent;
    const divContent = document.querySelector('.Am').textContent;
    
    let input_text = ''
    
    chrome.runtime.sendMessage({action: "sendPostRequest", inputText: divContent}, (response) => {
      if (response && response.text) {
        // Assuming you have an element with the id 'aiResponse' to display the response
        input_text = response.text;
      } else {
        // Handle no response or error
        console.log('Failed to get a response from the AI.');
      }
    });
    

    sendResponse({ divContent: divContent, input_text: input_text });
  }
});

