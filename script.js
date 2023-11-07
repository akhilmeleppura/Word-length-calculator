function calculateWordLength() {
    const text = document.getElementById('text-input').value;
    const words = text.trim().split(/\s+/);
    const wordCount = words.length;
    document.getElementById('word-length').innerText = wordCount;
  }
  