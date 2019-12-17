# JavaScript30 Geolocation Compass

## Live link
**[Geolocation Compass](https://rawcdn.githack.com/Redvanisation/JavaScript-30/95b0ebde78ed2977c7bb92bdad0b5c8667ae6f11/21.Geolocation/index.html)**

What I learned in this mini-project.

### Watch the updating geolocation data

``` javascript
navigator.geolocation.watchPosition((data) => {}
```

How to get and watch geolocation data from the browser using `navigator`.

### Using Geolocation data

``` javascript
speed.textContent = data.coords.speed;
arrow.style.transform = `rotate(${data.coords.heading}deg)`;
```

How to use the obtained Geolocation data to update the webpage content on the go.

### Handle errors when using Geolocation

``` JavaScript
(err) => {
    console.err(err);
    alert('Permission has to be allowed for the app to work'); }
```

How to handle errors in case there the Geolocation permission has been denied by the user.

_The app works only when the user is on the move, it's better to try it on a mobile phone or on a mac using the **xCode** mobile simulator_
