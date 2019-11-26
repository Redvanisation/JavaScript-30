# JavaScript30 Type Ahead Feature

What I learned in this mini-project.

### The Fetch Function

``` javascript
fetch(endpoint)
    .then(res => res.json())
    .then(data => cities.push(...data));
```

How to the JS `fetch()` api to get data in real-time.

``` JavaScript
function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}
```

How to use regular expressions to search for words in an input.

``` JavaScript
const regex = new RegExp(this.value, 'gi');
const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
```

How to use regular expressions find inputed words then apply a CSS class on them.


### Display typed values in real-time

``` javascript
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
```

How to use JS to catch the value of the input and display it in real-time.

