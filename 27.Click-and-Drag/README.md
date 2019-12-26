# JavaScript30 Click and Drag Scroll

## Live link
**[Click and Drag Scroll](https://rawcdn.githack.com/Redvanisation/JavaScript-30/da0d69b206363892482caa25c16414260cf98c09/27.Click-and-Drag/index.html)**

What I learned in this mini-project.

### Calling functions on the four needed events for the scroll

``` javascript
slider.addEventListener('mousedown', handleMouseDown);
slider.addEventListener('mouseleave', handleMouseLeave);
slider.addEventListener('mouseup', handleMouseup);
slider.addEventListener('mousemove', handleMouseMove);
```

Calling four functions when the four events needed for that effect occure on the **slider** element.

### Setting up the initial variables to scroll

``` javascript
function handleMouseDown(e) {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}
```

Set up the needed variables to get the mouse position when the `mousedown` event occures on the **slider** element and setting the `isDown` variable to `true`.

### Manipulating the flag variable on different events

``` JavaScript
function handleMouseLeave() {
  isDown = false;
  slider.classList.remove('active');
}
```

``` JavaScript
function handleMouseup() {
  isDown = false;
  slider.classList.remove('active');
}
```

How to set up the flag variable `isDown` to false so the scroll doesn't occure only when the mouse button is down and the flag variable is set to `true`.

### Handeling the scroll event when the mouse moves horizontally

``` javascript
function handleMouseMove(e) {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
}
```

- How to stop the scroll from happening if the flag variable is set to `false`, if not then getting the current mouse down position while moving the mouse and subtracting it from the `offsetLeft` of the **slider** element to get the actual position without marging. 
- Then setting the `walk` varibale to the difference value between the `x` and the `startX` variable which is the initial click position on the first `mousedown` event.
- Finally setting the `slider.scrollLeft` to the difference between the previously defined `scrollLeft` and the `walk` variables.
