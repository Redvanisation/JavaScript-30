const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const strip = (word) => {
    return word.replace(/^(a |the |an )/i, '').trim();
}

const sortedArr = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

console.log(sortedArr);

document.querySelector('#bands').innerHTML = 
    sortedArr.map(band => `<li>${band}</li>`).join('');