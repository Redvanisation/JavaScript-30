# JavaScript30 Sorting Without Articles

## Live link
**[Sorting Without Articles](https://rawcdn.githack.com/Redvanisation/JavaScript-30/b22e2a0a629efafead1730d14bdc9a3c53aeabd7/17.Sorting-Without-Articles/index.html)**

What I learned in this mini-project.

### Regular expressions with trim()

``` javascript
const strip = (word) => {
    return word.replace(/^(a |the |an )/i, '').trim();
}
```
How to use a regular expression to target words and remove them from a string with `trim()` method.

### Sort an array without the trimmed values

``` javascript
const sortedArr = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
```

How to sort an sort an array of strings using trimmed version of strings and getting the whole original version sorted and returned.

### Use map() to display the array on the page

``` JavaScript
document.querySelector('#bands').innerHTML = 
    sortedArr.map(band => `<li>${band}</li>`).join('');
```

How to use `array.map()` method to display the array values as `<li>` elements on a web page.
