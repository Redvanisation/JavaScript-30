# JavaScript30 Stripe Follow Along Nav

## Live link
**[Stripe Follow Along Nav](https://rawcdn.githack.com/Redvanisation/JavaScript-30/0254cc9c92667c6a50dd446ccee0336afb77fbcf/26.Stripe-Follow-Along-Nav/index.html)**

What I learned in this mini-project.

### Show the nav element with a transition when the mouseenter event occures

``` javascript
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
```

``` javascript
function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
  background.classList.add('open');
  .
  .
  .
}
```

How to get the display of a `<nav>`'s `<li>` element to block and then animate its `opacity` to make it show on the page with a tranistion when the `<li>`'s `mouseenter` event occures.

### Get the exact coordinates of an element on the page

``` javascript
const dropdown = this.querySelector('.dropdown');
const dropdownCoords = dropdown.getBoundingClientRect();
const navCoords = nav.getBoundingClientRect();
```

``` javascript
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
  }
  ```

How to use the `getBoundingClientRect()` to get the coords of an `<li>` element then get its exact **coords** using its parent element coords for the `top` and `left` properties.

### Change CSS properties depending on the calculated values

``` JavaScript
background.style.setProperty('height', `${coords.height}px`);
background.style.width = `${coords.width}px`;
background.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
```

How to set the CSS properties of the background `<div>` to be the exact size of the `<li>` element and to be transformed whenever we hover on a new `<li>` element in the `<nav>`.

### Removing the style when the mouseleave event occures

``` javascript
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
```

``` javascript
function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}
```

How to remove the added styles when the `mouseleave` event occures out of the `<li>` element.
