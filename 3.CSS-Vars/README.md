# JavaScript30 Update CSS Variables with JS

## Live link
**[Update CSS Variables with JS](https://rawcdn.githack.com/Redvanisation/JavaScript-30/61b4e97d622cab895f701433596f26241722ad6f/3.CSS-Vars/index.html)**

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

