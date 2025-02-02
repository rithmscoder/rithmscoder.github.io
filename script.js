const messages = [
  "Are you sure?",
  "100% sure??",
  "No second thoughts?",
  "Mollyyy please...",
  "Just think about it :(",
  "It would break my heart if you refused...",
  "Fine, I will stop asking...",
  "Just kidding, say yes pleaseee! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}