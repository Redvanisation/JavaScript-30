const divs = document.querySelectorAll('div');
const btn = document.querySelector('button');

function logText(e) {
  console.log(this.classList.value);
  // StopPropagation is used to stop bubbling elements in the event listen and get only the first one
  e.stopPropagation();
}

divs.forEach(div => div.addEventListener('click', logText, {
  // Turns on the event capture from outer-most to inner-most if set to true
  capture: false,
}));

// ONCE option removes the event listener after it gets fired one time
btn.addEventListener('click', () => console.log('Clicked once!'), { once: true });