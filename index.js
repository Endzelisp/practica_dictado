const dictationTextarea = document.querySelector('#dictation_textarea');
const verificationBtn = document.querySelector('#verification_btn');

const VALID_TEXT = 'Este texto está en Español';

// Array of each letter typed by the user
// each letter is stored individually
const userText = [];

dictationTextarea.addEventListener('keydown', function(e) {
  const keyStroke = e.key;

  if (keyStroke === 'Backspace') {
    // do something
    return
  }

  // do something more
})

verificationBtn.addEventListener('click', function() {
  // do something here too
})
