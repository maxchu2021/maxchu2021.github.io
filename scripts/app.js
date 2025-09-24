function scroll() {
    if (window.scrollY > document.querySelector('section').offsetHeight * 8 - 300) {
        document.querySelector('.scroll').innerHTML = '<span class="line">___</span> Scroll';
        document.querySelector('.scroll').style.marginRight = '0';
    } else if (window.scrollY > document.querySelector('section').offsetHeight - 300) {
        document.querySelector('.scroll').innerHTML = '<span class="line">___</span> Scroll <span class="line">___</span>';
        document.querySelector('.scroll').style.marginRight = '-30px';
    } else {
        document.querySelector('.scroll').innerHTML = 'Scroll <span class="line">___</span>';
        document.querySelector('.scroll').style.marginRight = '0';
    }
}

window.addEventListener('scroll', () => {
    scroll();
});

scroll();

new Glide('.glide', { autoplay: 2000 }).mount()
new Glide('.glide2', { autoplay: 2000 }).mount()
new Glide('.glide3', { autoplay: 2000 }).mount()
new Glide('.glide4', { autoplay: 2000 }).mount()
new Glide('.glide5', { autoplay: 2000 }).mount()