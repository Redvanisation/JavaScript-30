# JavaScript30 Update CSS Variables with JS

What I learned in this mini-project.

### Dataset attribute 

``` javascript
const suffix = this.dataset.sizing || '';
```

How to the values set in the `data-` attribute set in the HTML.

``` JavaScript
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
```

How to how to change the values of root CSS variables through JS code.


### mousemove and change events

``` javascript
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('click', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
```

How to use the click and mousemove events for all inputs as well as the change event for the `color` input.

