# JavaScript30 Drum Kit

### Live Link:

**[Drum Kit](https://rawcdn.githack.com/Redvanisation/JavaScript-30/beeffc9bec58efaa344866a79dcf8d712bbba6f6/1.Drum-Kit/index.html)**

What I learned on this mini-project.

### querySelector and HTML attributes

``` javascript
const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
```

How to make use of template literals in a JavaScript query selector.

``` html
<div data-key="65" class="key">
    <kbd>A</kbd>
    <span class="sound">clap</span>
</div>
```

How to define the `data-` attributes in HTML and how to use them with JavaScript.


### transitionend event

``` javascript
key.addEventListener('transitionend', removeTransition)
```

Add an event listener when a CSS tranistion ends.

