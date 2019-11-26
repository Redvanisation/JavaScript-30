const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
const p = document.querySelector('p');

function makeGreen() {
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular

console.log('Hello World!');

// Interpolated
console.log('This %s is an interporated word', '>>><<<');

// Styled
console.log('%c Hello world!', 'font-size: 40px; color: salmon');

// warning!
console.warn('this is a warning!');

// Error :|
console.error('This is an error!!!');

// Info
console.info('Too many information!');

// Testing

console.assert(p.classList == 'assert', 'Oops!');

// clearing

console.clear();

// Viewing DOM Elements
console.dir(p);

// Grouping together

dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This dog's name is ${dog.name}`);
    console.log(`He is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`);
});
console.log('--------------------------')
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`This dog's name is ${dog.name}`);
    console.log(`He is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`);
});

console.clear();

// counting

console.count('x');
console.count('x');
console.count('x');
console.count('x');

// timing

console.time('fetch request');
fetch('https://api.github.com/users/redvanisation')
    .then(res => res.json())
    .then(data => {
        console.timeEnd('fetch request');
        console.log(data);
    });