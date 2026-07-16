document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.product_card_wrapper');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
});

window.addEventListener('load', () => {
    const heroVideo = document.querySelector('.hero_video');
    if (heroVideo) {
        const sources = heroVideo.querySelectorAll('source');
        sources.forEach(source => {
            source.setAttribute('src', source.src); 
        });
        heroVideo.load();
    }
});

let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
        if (scrollTop > lastScrollTop) {
            header.classList.add('header_hidden');
        } else {
            header.classList.remove('header_hidden');
        }
    } else {
        header.classList.remove('header_hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});

