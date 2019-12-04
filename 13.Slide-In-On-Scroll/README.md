# JavaScript30 Slide In On Scroll Effect

## Live link
**[Slide in on scroll]()**

What I learned in this mini-project.

### Calculate element values on scroll

``` javascript
const slideInAt = (window.scrollY + window.innerHeight) - slideImg.height / 2;
const imageBottom = slideImg.offsetTop + slideImg.height;
```

How to calculate the desired values depending on the `window.scrollY` of a `scroll` event.

### Using debounce functions

``` JavaScript
window.addEventListener('scroll', debounce(checkSlide));
```

How to use a **debounce** function to reduce the times that the `scroll` event happens and improve performance of the page.

### Showing elements depending on the scroll position

``` JavaScript
const halfWayShown = slideInAt > slideImg.offsetTop;
const notScrolledPast = window.scrollY < imageBottom;
```

``` JavaScript
if (halfWayShown && notScrolledPast) {
    slideImg.classList.add('active');
} else {
    slideImg.classList.remove('active');
}
```

How to use the `scroll` event to determine weither there has been a scroll half way through the image and the image hasn't been scrolled past then apply a CSS class to it.
