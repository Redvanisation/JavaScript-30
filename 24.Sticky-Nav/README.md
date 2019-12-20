# JavaScript30 Sticky Nav

## Live link
**[Sticky Nav](https://rawcdn.githack.com/Redvanisation/JavaScript-30/1c8160cdd91668093558f7e9b25ec77b25f5df9d/24.Sticky-Nav/index.html)**

What I learned in this mini-project.

### Getting the nav top value

``` javascript
const nav = document.querySelector('#main');
const navTop = nav.offsetTop;
```

How to get the nav element's `offsetTop` value which represents its top edge.

### Fire-up a function on windows scroll event

``` javascript
window.addEventListener('scroll', fixNav);
function fixNav() {
  .
  .
  .
}
```

How to fire up a function depending when the window scroll event happens.

### Check if the scroll position and apply a fixed class

``` JavaScript
  if (window.scrollY >= navTop) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
```

How to check if the `window.scrollY` is greater or equal to the `nav.offsetTop` (which means the vertical scrolling is at the nav's position or has passed it) then apply a CSS class on the body element to give the nav a `position: fixed` and replace the nav's previous location with a `paddingTop` of the `nav.offsetHeight` (which is the nav's height); and do the opposite in the other case.

### Increase the size of an element when the nav gets fixed

``` CSS
li.logo {
  max-width: 0;
  overflow: hidden;
  background: white;
  transition: all .8s;
  font-weight: 600;
  font-size: 30px;
}

.fixed-nav li.logo {
  max-width: 500px;
}
```

How to make the logo appear when then nav is sticked on the top of the screen, making use of the `max-width` CSS property.
