# JavaScript30-Canvas

## Live link
**[Canvas](https://rawcdn.githack.com/Redvanisation/JavaScript-30/5fb6aee69fb54a9cb57411dc60538cdaf80e8c7f/8.Canvas/index.html)**

What I learned in this mini-project.

### Setting up and initializing a canvas

``` javascript
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;
```

How to initialize and setup an HTML canvas.

### Using variables to manipulate the canvas

``` JavaScript
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = false;
```

How to use some variables to manipulate the canvas.

### Using event listeners to target the needed mouse events for drawing

``` JavaScript
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
```

How to use event listeners to actually draw on the canvas only when the mousedown event occures.


### Making a function to draw, change color and size

``` javascript
function draw(e) {
    if (!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if (hue > 360) hue = 0;
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) direction = !direction;
    direction ? ctx.lineWidth++ : ctx.lineWidth--;
}
```

How to use manipulate the canvas through the previously created variables and use then to change the drawing color and the line size up and down.

