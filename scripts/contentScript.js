const currentURL = window.location.href;
const currentContent = document.body.innerText; // Simple method; consider improvements for accuracy

fetch('https://yourserver.com/generateQuestions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    url: currentURL,
    content: currentContent,
    userID: 'YourUserID' // Implement user ID generation/storage
  }),
})
.then(response => response.json())
.then(data => {
  window.open(`https://factsticker.com/questions.html?data=${encodeURIComponent(JSON.stringify(data))}`, '_blank');
})
.catch(error => console.error('Error:', error));
