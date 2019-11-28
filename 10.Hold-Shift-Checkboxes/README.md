# JavaScript30 Shift Checked Checkboxes

### Live link:
**[Shift Checked Checkboxes](https://rawcdn.githack.com/Redvanisation/JavaScript-30/525b3d8b86e651b27d5e8646042cc49da578303c/10.Hold-Shift-Checkboxes/index.html)**

What I learned in this mini-project.

### Using the event properties

``` javascript
if (e.shiftKey && this.checked)
```

How to use the `shiftKey` property of an event.

### Using a boolean variable to manipulate the DOM elements

``` JavaScript
let inBetween = false;
if (chbx === this || chbx === lastChecked) inBetween = !inBetween;
if (inBetween) chbx.checked = true;
```

How to manipulate checkboxes depending on a boolean's variable value.

### Using a variable to keep track of the previous value triggered by the event

``` JavaScript
lastChecked = this;
if (chbx === this || chbx === lastChecked)
```

How to store the value of `this` in a variable and use it to keep track of the event.
