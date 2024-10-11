document.getElementById('sendButton').addEventListener('click', () => {
    const userInput = document.getElementById('userInput').value;

    fetch('http://localhost:8080/http://localhost:11434/generate', {  // Proxy through localhost:8080
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:5500' // Example origin header for local server
      },
      body: JSON.stringify({
        model: 'llama2',
        prompt: userInput
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('response').textContent = data.response;
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('response').textContent = 'Error: ' + error.message;
    });
});
