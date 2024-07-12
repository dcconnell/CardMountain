"use strict";
const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
    const cardSpan = card.querySelector('span');
    const cardP = card.querySelector('p');
    card.addEventListener('mouseenter', () => {
        card.classList.toggle('card-expand');
        cardSpan.innerHTML = '&#8659;';
        setTimeout(() => {
            cardP.style.display = 'block';
        }, 125);
    });
    card.addEventListener('mouseleave', () => {
        cardP.style.display = 'none';
        cardSpan.innerHTML = '&#8658;';
        setTimeout(() => {
            card.classList.toggle('card-expand');
            cardP.style.display = 'none';
        }, 125);
    });
});
