let countdown;

const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

const timer = (secs) => {
  // stop any previous timer
  clearInterval(countdown);

  const now = Date.now();
  const then = now + secs * 1000;
  displayTimeLeft(secs);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // Check if we should stop
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    // display
    displayTimeLeft(secondsLeft)
  }, 1000)
}

const displayTimeLeft = (secs) => {
 const mins = Math.floor(secs / 60);
 const remainderSecs = secs % 60;
 const display = `${mins}:${remainderSecs < 10 ? '0' : ''}${remainderSecs}`;
 timerDisplay.textContent = display;
 document.title = display;
}

const displayEndTime = (timestamp) => {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
