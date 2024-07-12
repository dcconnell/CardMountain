const cards: NodeListOf<HTMLElement> = document.querySelectorAll('.card')

cards.forEach((card: HTMLElement) => {
    const cardSpan: HTMLElement = card.querySelector('span')!
    const cardP: HTMLElement = card.querySelector('p')!

    card.addEventListener('mouseenter', () => {
        card.classList.toggle('card-expand')
        cardSpan.innerHTML = '&#8659;'
        setTimeout(() => {
            cardP.style.display = 'block'
        }, 125)
    })
    card.addEventListener('mouseleave', () => {
        cardP.style.display = 'none'
        cardSpan.innerHTML = '&#8658;'
        setTimeout(() => {
            card.classList.toggle('card-expand')
            // doubling down on this because it looks buttery when it is removed instantly but when you move your mouse
            // over it too fast it will still be there before the card reverts, this fixes that visual issue
            cardP.style.display = 'none'
        }, 125)
    })
})