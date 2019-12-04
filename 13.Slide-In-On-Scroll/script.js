function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/////////////////////////////

const sliderImages = document.querySelectorAll('.slide-in');

const checkSlide = () => {
  sliderImages.forEach(slideImg => {
    // Half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - slideImg.height / 2;
    
    // bottom of the image
    const imageBottom = slideImg.offsetTop + slideImg.height;

    const halfWayShown = slideInAt > slideImg.offsetTop;
    const notScrolledPast = window.scrollY < imageBottom;

    if (halfWayShown && notScrolledPast) {
      slideImg.classList.add('active');
    } else {
      slideImg.classList.remove('active');
    }


  });
}

window.addEventListener('scroll', debounce(checkSlide));
