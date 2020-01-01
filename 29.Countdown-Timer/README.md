# JavaScript30 Countdown Timer

## Live link
**[Countdown Timer](https://rawcdn.githack.com/Redvanisation/JavaScript-30/002ed754c7d565b25a647d490bc10c047ee94f0a/29.Countdown-Timer/index.html)**

What I learned in this mini-project.

### Initialize the timer function

``` javascript
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
```

How to initialize the timer with `Date.now()` and make it countdown seconds using the `setIterval()` function.

### Display the timer on the web page

``` javascript
const displayTimeLeft = (secs) => {
 const mins = Math.floor(secs / 60);
 const remainderSecs = secs % 60;
 const display = `${mins}:${remainderSecs < 10 ? '0' : ''}${remainderSecs}`;
 timerDisplay.textContent = display;
 document.title = display;
}
```

How to use display the countdown on the webpage and add a **0** to the seconds when they are less than **10**.

### Display at what time the timer will stop

``` javascript
const displayEndTime = (timestamp) => {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}
```

How to use calculate at what time the timer will finish counting and display it on the page.

### Start the timer by click on the page's buttons

``` JavaScript
const buttons = document.querySelectorAll('[data-time]');
```

``` JavaScript
function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
```

How to select the page buttons with the `[data-time]` attribute and use its value to start the timer.

### Start the timer with a custom input value

``` JavaScript
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
```

How to select an html element that has a `name` attribute with `document.NameAttribute` then add an `EventListener` to it  and start the timer based on the value of the nested `<input>` element which is nested in it and selected the same way with the `name` attribute.
