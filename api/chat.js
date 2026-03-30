<script>
let firstMessage = true;

function sendMessage() {
  const input = document.getElementById("input");
  const chat = document.getElementById("chat");

  const userMessage = input.value;

  if (!userMessage) return;

  if (firstMessage) {
    chat.innerHTML = "";
    firstMessage = false;
  }

  chat.innerHTML += '<div class="message user">' + userMessage + '</div>';

  fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: userMessage })
  })
  .then(response => response.json())
  .then(data => {
    chat.innerHTML += '<div class="message ai">' + data.reply + '</div>';
    chat.scrollTop = chat.scrollHeight;
  });

  input.value = "";
}
</script>
