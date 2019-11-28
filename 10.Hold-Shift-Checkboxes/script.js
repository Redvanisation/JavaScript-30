const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;
let inBetween = false;

function handleCheck(e) {
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(chbx => {
            if (chbx === this || chbx === lastChecked) inBetween = !inBetween;
            if (inBetween) chbx.checked = true;
        });
    }

    lastChecked = this;
}

checkboxes.forEach(chbx => chbx.addEventListener('click', handleCheck));