const socket = io();

socket.on("message", (message) => {
  console.log(message);
});

const messageForm = document.querySelector("#message-form");

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const message = e.target.elements.message.value;

  socket.emit("sendMessage", message);
  messageForm.reset();
});
