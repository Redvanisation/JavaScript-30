# JavaScript30 Speech Recognition

## Live link
**[Speech Recognition](https://rawcdn.githack.com/Redvanisation/JavaScript-30/2dfaeeb244591d28364a40b4d340223ec8601c91/20.Speech-Detection/index.html)**

What I learned in this mini-project.

### Initialize and start speech recognition for Chrome

``` javascript
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;
```

``` javascript
recognition.start();
```

How to initialize speech recognition for Chrome browser and how to start it after initialization.

### Using speech recognition event listeners

``` javascript
recognition.addEventListener('result', (e) => {...
recognition.addEventListener('end', recognition.start);
```

How to use speech recognition even listeners to get the user voice input as soon as there is a **result** by the event and to start that function again after the event ends to make it work over and over again.

### Render the event results on the screen

``` JavaScript
const transcript = Array.from(e.results)
    .map(res => res[0])
    .map(res => res.transcript)
    .join('');

p.textContent = transcript;

if (e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
}
```

How to use get the user's voice input using the speech recognition and render it on the webpage.
