# JavaScript30 Event Capture, Propagation and Once

What I learned in this mini-project.

### Stop event bubbling

``` javascript
function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation();
}
```

How to stop event bubbling up or down using `e.stopPropagation()`.

### Get the event capture (from top to bottom)

``` javascript
divs.forEach(div => div.addEventListener('click', logText, {
  capture: true,
}));
```

How to get the event capture using the `capture` option in the `eventListener` (getting event's the elements from top to bottom instead of the opposite).

### Remove an eventListener

``` JavaScript
btn.addEventListener('click', () => console.log('Clicked once!'), { once: true });
```

How to use the `once` option to remove an `eventListener` after it occured one time on the page.
