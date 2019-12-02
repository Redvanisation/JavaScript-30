# JavaScript30 Custon HTML5 Video Player

## Live link
**[Custon HTML5 Video Player](https://rawcdn.githack.com/Redvanisation/JavaScript-30/ee33b553b0cfcbbed156e4df090de54138aef2d0/11.Custom-HTML5-Video-Player/index.html)**

What I learned in this mini-project.

### Play/Pause a video

``` javascript
const togglePlay = () => {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}
```

How to play and pause a video depending on the `.paused` property.

### Using datasets to skip and rewind a video

``` HTML
<button data-skip="-10" class="player__button">« 10s</button>
<button data-skip="25" class="player__button">25s »</button>
```

``` JavaScript
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}
```

How to use datasets' values to manipulate the video's current play time.

### Using HTML name attributes to update range input's value

``` HTML
<input type="range" name="volume" class="player__slider" min="0" max="1" step="0.05" value="1">
<input type="range" name="playbackRate" class="player__slider" min="0.5" max="2" step="0.1" value="1">
```

``` JavaScript
function handleRangeUpdate () {
    video[this.name] = this.value;
}
```

``` JavaScript
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
```

How to use the name property to manipulate a range input's value on `change` or `mousemove` events.


### Making a continiously updating video progress bar

``` javascript
const handleProgress = () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}
```

``` javascript
video.addEventListener('timeupdate', handleProgress);

```

How to use the `timeupdate` event to update the video progress bar in real-time.

### Implement the click and drag to skip or rewind the video

``` javascript
const scrub = (e) => {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}
```

``` javascript
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
```

How to use a **flag variable** to update the video's current play time while clicking and dragging the progress bar, making the variable `true` only when the `mousedown` event is happening.
