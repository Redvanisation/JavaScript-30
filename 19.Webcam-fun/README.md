# JavaScript30 Webcam Fun Filters

## Live link
**[Webcam Fun Filters](https://rawcdn.githack.com/Redvanisation/JavaScript-30/8d79b05822f186f92032da49b1ab84a5713d24de/19.Webcam-fun/index.html)**

What I learned in this mini-project.

### Access the use webcam video stream

``` javascript
const getVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            video.srcObject = localMediaStream;
            video.play();
        })
        .catch(err => console.error('Oh noo!', err));
}
```
How to get the user's webcam video stream using `navigator.mediaDevices.getUserMedia`.

### Set the video to display on a canvas element

``` javascript
const width = video.videoWidth;
const height = video.videoHeight;
canvas.width = width;
canvas.height = height;

return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
```

How to set the user's webcam stream to be displayed on a canvas element to be able to snap pictures on it later using `ctx.drawImage()` method on the canvas.

### Create downloadable picture elements

``` JavaScript
const data = canvas.toDataURL('image/jpeg');
const link = document.createElement('a');
link.href = data;
link.setAttribute('download', 'handsome');
link.innerHTML = `<img src=${data} alt="Handsome man">`;
strip.insertBefore(link, strip.firstChild);
```

How to set snap picture using `toDataURL()` method then storing it in an **HTML** <a> element and make it downloadable.

### Create a video filter

``` JavaScript
const redEffect = (pixels) => {
    for (let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 100; // RED
        pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // BLUE
    }
    return pixels;
}
```

How to create video filters modifying the pixels' colors on the canvas video.

### Apply filters to canvas video

``` JavaScript
const paintToCanvas = () => {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);

        // Get the pixels
        let pixels = ctx.getImageData(0, 0, width, height);

        // Apply custom filters
        ctx.globalAlpha = 0.1;

        pixels = rgbSplit(pixels);
        pixels = greenScreen(pixels);

        // Put them back
        ctx.putImageData(pixels, 0, 0);
    }, 16)
}
```

How to to apply the created filter to the video stream rendered on the canvas element.
