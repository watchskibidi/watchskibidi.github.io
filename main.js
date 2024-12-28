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

    const toast = document.createElement('div');
    toast.id = 'fullscreen-toast';
    toast.textContent = 'Press escape to exit fullscreen';
    document.body.appendChild(toast);

    toast.style.position = 'fixed';
    toast.style.top = '-75px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.backgroundColor = '#333';
    toast.style.color = '#fff';
    toast.style.padding = '20px 30px';
    toast.style.borderRadius = '15px';
    toast.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
    toast.style.zIndex = '1000';
    toast.style.transition = 'top 0.5s ease';
    toast.style.fontSize = '18px';

    setTimeout(() => {
        toast.style.top = '15px';
    }, 300);

    setTimeout(() => {
        toast.style.top = '-100px';
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 4000);
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

document.addEventListener('keydown', (event) => {
    if (event.key === 'f') {
        fullscreen();
    }
});