# JavaScript30 Mouse Move Shadow

## Live link
**[Mouse Move Shadow](https://rawcdn.githack.com/Redvanisation/JavaScript-30/c4c9a3a6182d5997cd311ffeebd283def68c7193/16.Mouse-Move-Shadow/index.html)**

What I learned in this mini-project.

### Calculate where the mouse is on the page

``` javascript
let { offsetX: x, offsetY: y } = e;
```
How to get the mouse coordenates on the page depending on the `offsetX` and `offsetY` of the `mousemove` event.

### Get the exact coordenated of the mouse

``` javascript
if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
}
```

How to check if the target is the wanted element and then set the variable value of the total width/height of the window.

### Use the screen height/width to set the shadow's distance

``` JavaScript
const walk = 100;
const { offsetWidth: width, offsetHeight: height } = hero;

const xWalk = Math.round((x / width * walk) - (walk / 2));
const yWalk = Math.round((y / height * walk) - (walk / 2));
```

How to calculate how far should the shadow go from the wanted element in the **X** and **Y** positions and limiting it to a **100px** (between: 50px and -50px).

### Using calculated value to render the shadow

``` JavaScript
text.style.textShadow = `
    ${xWalk * -1}px ${yWalk * -1}px 10px rgba(0,0,0,.5)
`;
```

How to use the previously calculated values to render the text shadow on the element with ES6.
