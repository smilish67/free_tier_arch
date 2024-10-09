document.getElementById('send-button').addEventListener('click', sendMessage);

function sendMessage() {
  const inputElement = document.getElementById('user-input');
  const message = inputElement.value.trim();

  if (message === "") return;

  addMessage(message, 'user-message');
  inputElement.value = '';

  // Simulate an AI response (you'd replace this with actual API call logic)
  setTimeout(() => {
    addMessage("I'm here to help you!", 'ai-message');
  }, 1000);
}

function addMessage(text, className) {
  const messageContainer = document.createElement('div');
  messageContainer.className = 'message ' + className;
  messageContainer.textContent = text;

  const messagesElement = document.getElementById('messages');
  messagesElement.appendChild(messageContainer);
  messagesElement.scrollTop = messagesElement.scrollHeight;
}
