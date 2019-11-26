# JavaScript30 JS/CSS Clock

What I learned in this mini-project.

### The Date object 

``` javascript
const now = new Date();
const seconds = now.getSeconds();
const mins = now.getMinutes();
const hours = now.getHours();
```

How to get the current date/seconds/minutes/hours and use the Date object.

``` JavaScript
const secondDegrees = ((seconds / 60) * 360) + 90;
const minDegrees = ((mins / 60) * 360) + 90;
const hourDegrees = ((hours / 60) * 360) + 90;
```

How to how to calculate hands rotation count in a clock.


### transitionend event

``` javascript
secondHand.style.transform = `rotate(${secondDegrees}deg)`;
```

How to manipulate CSS properties dynamically.

