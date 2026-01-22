const textarea = document.getElementById("userInput");
const charCount = document.getElementById("charCount");
const sendBtn = document.getElementById("sendBtn");

textarea.addEventListener("input", () => {
  charCount.textContent = `${textarea.value.length}/500`;
});

sendBtn.addEventListener("click", () => {
  const message = textarea.value.trim();
  if (message) {
    alert("Message sent: " + message); // Replace with actual AI logic
    textarea.value = "";
    charCount.textContent = "0/500";
  }
});
