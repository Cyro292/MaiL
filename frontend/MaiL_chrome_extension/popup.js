document.addEventListener('DOMContentLoaded', function () {
    const emailDraftTextarea = document.getElementById('emailDraft');
    const getSuggestionsButton = document.getElementById('getSuggestions');
    const suggestionResults = document.getElementById('suggestionResults');
  
    getSuggestionsButton.addEventListener('click', async () => {
      const emailDraft = emailDraftTextarea.value;
  
      // Send the email draft to your backend API and handle the response here
      // Use fetch() or another AJAX library to make the API request
  
      // For example:
      // const response = await fetch('https://your-api-url.com/suggest', {
      //   method: 'POST',
      //   body: JSON.stringify({ emailDraft }),
      //   headers: { 'Content-Type': 'application/json' },
      // });
  
      // const suggestions = await response.json();
  
      // Display the suggestions in the suggestionResults element
      // suggestionResults.innerHTML = suggestions;
    });
  });
  