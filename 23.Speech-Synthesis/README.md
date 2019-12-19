# JavaScript30 Speech Synthesis Voiceinator

## Live link
**[Speech Synthesis Voiceinator](https://rawcdn.githack.com/Redvanisation/JavaScript-30/73a325e1a0d1a6c1c6b4876ce881050c979b4e8f/23.Speech-Synthesis/index.html)**

What I learned in this mini-project.

### Initializing a new Speech Synthesis Utterance

``` javascript
const msg = new SpeechSynthesisUtterance();
msg.text = document.querySelector('[name="text"]').value;
```

How to set up a new Speech Synthesis Utterance and set its default value to the default input value.

### Populate the speech synthesis object with voices

``` javascript
speechSynthesis.addEventListener('voiceschanged', populateVoices);
```

``` javascript
function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .map(voice => `<option value="${voice.name}">${voice.name} ${voice.lang}</option>`)
    .join('');
}
```

How to populate the speech synthesis object with voices using `getVoices()` method and fill up the HTML drop down list with the available populated voices.

### Change the voice

``` JavaScript
voicesDropdown.addEventListener('change', setVoice);

function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
}
```

How to change the used voice when choosing a different one from the drop-down list.

### Starting and stopping voices

``` JavaScript
const toggle = (startOver = true) => {
  speechSynthesis.cancel();
  if (startOver) speechSynthesis.speak(msg);
}
```

How to make a function to toggle between playing and stopping voices.

### Changing voice options (rate/pitch)

``` JavaScript
function setOption() {
  msg[this.name] = this.value;
  toggle();
}
```

``` JavaScript
options.forEach(option => option.addEventListener('change', setOption));
```

How to use the name and value from HTML to modify the voice message prefences when the `change` even happens.

### Start and Stop the voice synthesis

``` JavaScript
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', toggle.bind(null, false));
```

How to play and stop the voice synthesis using the previously defined `toggle` function, and how to **bind the function to the scope of `this`** then set give it a false argument to make the voice stop.
