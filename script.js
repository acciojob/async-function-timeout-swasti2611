//your JS code here. If required.
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const outputDiv = document.getElementById('output');
const submitBtn = document.getElementById('btn');

async function displayTextWithDelay() {
  const text = textInput.value;
  const delay = parseInt(delayInput.value);

  if (text && !isNaN(delay)) 
  {
    outputDiv.textContent = '';
    setTimeout(() => {
      outputDiv.textContent = text;
    }, delay);
  }
}

submitBtn.addEventListener('click', displayTextWithDelay);