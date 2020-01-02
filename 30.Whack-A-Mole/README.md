# JavaScript30 Whack A Mole

## Live link
**[Whack A Mole](https://rawcdn.githack.com/Redvanisation/JavaScript-30/5a027d2d172c1f6a403edb3668aafcdd4b626b1e/30.Whack-A-Mole/index.html)**

What I learned in this mini-project.

### Making random functions

``` javascript
const randomTime = (max, min) => Math.round(Math.random() * (max - min) + min);

const randomHoles = (holes) => {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHoles(holes);
  }
  lastHole = hole;
  return hole;
}
```

How to make functions to get random time and to get random DOM elements from a `nodeList`.

### The mole peep function

``` javascript
const peep = () => {
  const time = randomTime(200, 1000);
  const hole = randomHoles(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}
```

How to make the mole appear after a random time in a random hole using the previously defined functions, then adding the `up` class to it and removing it after a random time for the mole to disappear again.

### The start game function

``` JavaScript
const startGame = () => {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => timeUp = true, 10000);
}
```

How to reset the game then start it and make it play for **10 seconds**.

### Increasing the score on every mole whack

``` JavaScript
function bonk(e) {
  if (!e.isTrusted) return;
  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));
```

How to check if the click is a real one by the user and not a generated one using the event's `isTrusted` property, then increase the **score** variable and display it on the page then make the mole disappear.
