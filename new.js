let cards = document.querySelectorAll('.card');
let container = document.querySelector('.container');

container.addEventListener('mouseover', () => {
    cards.forEach(card => {
        card.classList.add('selected')
    })
})

container.addEventListener('mouseleave', () => {
    cards.forEach(card => {
        card.classList.remove('selected')
    })
})