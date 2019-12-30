# JavaScript30 Video Speed Controller

## Live link
**[Video Speed Controller](https://rawcdn.githack.com/Redvanisation/JavaScript-30/0664ab95ec33e7fd78043faca89ed3ccba5ed276/28.Video-Speed-Controller/index.html)**

What I learned in this mini-project.

### Increase or decrease the video playback speed 

``` javascript
function handlePlayback(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 10;
  const height = Math.round(percent * 100) + '%';
  const playbackRate = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(1) + 'x';
  video.playbackRate = playbackRate;
}
```

How to increase or decrease the video playback speed by manipulating the height of the speed bar on the viewport.

### Fire up the function on mouse move or touch move 

``` JavaScript
speed.addEventListener('mousemove', handlePlayback);
speed.addEventListener('touchmove', handlePlayback);
```

How to fire up the `handlePlayback` function when the `mousemove` or `touchmove` events occur.
