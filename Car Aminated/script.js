// const { reverse } = require("dns");


var audio = document.createElement('audio');
audio.setAttribute('src', 'music/sound.mp3');
audio.loop = true;
// audio.play();

const speed = document.querySelector('.ac'),
    brek = document.querySelector('.bre'),
    car = document.querySelector('#car'),
    wheel = document.querySelector('.tyre'),
    cont = document.querySelector('.tyre1'),
    track = document.querySelector('#track'),
    tree = document.querySelector('#trees');

speed.addEventListener('click', () => {
    track.classList.remove('back');
    tree.classList.remove('back');
    wheel.classList.remove('ak-class');
    cont.classList.remove('ak-class');
    wheel.classList.toggle('v-class-resp');
    cont.classList.toggle('v-class-resp');
    track.classList.toggle('trees');
    tree.classList.toggle('trees');
    car.classList.remove('car-hil-2');
    car.classList.toggle('car-hil');
    audio.play();
});

brek.addEventListener('click', () => {
    track.classList.remove('trees');
    tree.classList.remove('trees');
    wheel.classList.remove('v-class-resp');
    cont.classList.remove('v-class-resp');
    wheel.classList.toggle('ak-class');
    cont.classList.toggle('ak-class');
    track.classList.toggle('back');
    tree.classList.toggle('back');
    car.classList.remove('car-hil');
    car.classList.toggle('car-hil-2');
    audio.play();
});
