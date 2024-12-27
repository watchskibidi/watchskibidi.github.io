console.log('skibidi toilet')
let skibiditoilet;

var movie = document.getElementById('embed');
var gofullscreen = document.getElementById('gofullscreen');

function fullscreen() {
    movie.style.width = '100%';
    movie.style.height = '100vh';
    movie.style.position = 'fixed';
    movie.style.borderRadius = '0';
    movie.style.top = '0';
    movie.style.left = '0';
    gofullscreen.style.display = 'none';
}

function exitFullscreen() {
    movie.style.width = '1050px';
    movie.style.height = '590px';
    movie.style.borderRadius = '20px';
    movie.style.position = 'relative';
    gofullscreen.style.display = 'block';
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        exitFullscreen();
    }
});