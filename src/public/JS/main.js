document.addEventListener('DOMContentLoaded', () => {
  const socket = io();

  const messageForm = document.querySelector('#message-form');
  const messageInput = document.querySelector('#message-input');
  const messagesList = document.querySelector('#messages');

  messageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = messageInput.value.trim();
    if (message) {
      socket.emit('message', message);
      messageInput.value = '';
    }
  });

  socket.on('message', (message) => {
    const li = document.createElement('li');
    li.textContent = message;
    messagesList.appendChild(li);
  });
});