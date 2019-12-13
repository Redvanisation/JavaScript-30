# JavaScript30 Tally String Times

## Live link
**[Tally String Times](https://rawcdn.githack.com/Redvanisation/JavaScript-30/c41e7e47ef83e536851f21bdd3cd9203ac6d661f/18.Tally-String-Times/index.html)**

What I learned in this mini-project.

### Select all elements with an attribute

``` javascript
const timesNodes = Array.from(document.querySelectorAll('[data-time]'));
```
How to use select all the elements on the page that have the same attribute.

### Get minutes and seconds from the dataset and convert them

``` javascript
const seconds = timesNodes
    .map(node => (node.dataset.time))
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        return (mins * 60) + secs;
    })
    .reduce((mins, secs) => mins + secs);
```

How to get the minutes and seconds from the `data-time` attribute and use `map()` and `reduce()` to convert them into integers.

### Count the total time

``` JavaScript
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
```

How to use the `modulo` operator to count the remaining seconds and store them into a variable then calculate the total time.
