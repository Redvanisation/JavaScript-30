# JavaScript30 Follow Along Link Highlighter

## Live link
**[Follow Along Link Highlighter](https://rawcdn.githack.com/Redvanisation/JavaScript-30/d90580443dd254fc63c3397bd370d2e23626584e/22.Follow-Along-Link-Highlighter/index.html)**

What I learned in this mini-project.

### Using an HTML element as a dynamic background with a CSS class

``` javascript
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);
```

How to set up a new HTML `<span>` element and give it a class to use it as a dynamic background on the page.

### Get the element's data

``` javascript
const linkCoords = this.getBoundingClientRect();
```

How to use the method `getBoundingClientRect()` to get the element's width, height, top and left data.

### Correct the element's data on scroll

``` JavaScript
const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
}
```

How to correct the element's data we got with the `getBoundingClientRect()` on scroll and get the exact new coordinates.

### Make the dynamic element follows along with an event

``` JavaScript
function highlightLink() {
    .
    .
    .

    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}
```

``` JavaScript
const triggers = document.querySelectorAll('a');
triggers.forEach(a => a.addEventListener('mouseover', highlightLink));
```

How to make the `<span>` dynamic element follow along with hovered element then changes it's width, height and transforms its position to become its background with a smooth effect.
