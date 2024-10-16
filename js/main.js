const phrases = [
  "TEXTO QUE SE COMPLETA",
  "Nova frase 1",
  "Nova frase 2"
];

const textElement = document.getElementById("animated-text");
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let typingInterval;

function typeNextChar() {
  if (currentCharIndex < phrases[currentPhraseIndex].length) {
    textElement.textContent += phrases[currentPhraseIndex][currentCharIndex];
    currentCharIndex++;
    typingInterval = setTimeout(typeNextChar, 100);
  } else {
    clearTimeout(typingInterval);
    setTimeout(() => {
      currentCharIndex = 0;
      textElement.textContent = "";
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      typeNextChar();
    }, 2000);
  }
}

typeNextChar();
