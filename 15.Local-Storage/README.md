# JavaScript30 Local Storage and Event Delegation

## Live link
**[Local Storage and Event Delegation](https://rawcdn.githack.com/Redvanisation/JavaScript-30/dbc15f40bb47977214eb98bf6592a45145eae872/15.Local-Storage/index.html)**

What I learned in this mini-project.

### Populate and read local storage

``` javascript
localStorage.setItem('items', JSON.stringify(items));
JSON.parse(localStorage.getItem('items'))
```

How to populate the browser's local storage with data and how to read it.

### Prevent form's default behavious and reset it 

``` JavaScript
function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    }
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}
```

How to use `preventDefault()` method to prevent a form from updating the page and how to reset its input values, and how to populate local storage with the form's data.

### Using event delegation

``` JavaScript
itemsList.addEventListener('click', toggleDone);
```

``` JavaScript
function toggleDone(e) {
    if (!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}
```

How to use event delegation on a form element to only get the click events of **only** its `input` children and do some logic in them.
