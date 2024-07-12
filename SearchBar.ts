const cardTitles: NodeListOf<HTMLElement> = document.querySelectorAll('.card-title')
const searchBar: HTMLInputElement = document.getElementById('home-search') as HTMLInputElement

async function recordKey(){
    let currentSearchText: string = searchBar.value.toLowerCase()
    console.log(`'${currentSearchText}'`)
    for(let i = 0; i < cardTitles.length; ++i){
        await validateInSearch(cards[i], cardTitles[i], currentSearchText)
        cards[i].removeEventListener('animationend', () => {
            cards[i].style.display = 'none'
        })
    }
}

async function validateInSearch(card: HTMLElement, title: HTMLElement, currentSearch: string) {
    
    let searchInTitlePromise = new Promise((resolve) => {
        if (!title.innerHTML.toLowerCase().includes(currentSearch)){
            resolve(true)
        }
        else {
            resolve(false)
        }
    }).then(e => {
        if (e){
            card.classList.add('fadeAway')
            card.addEventListener('animationend', animationEndListener)
        }
        else {
            card.classList.remove('fadeAway')
            card.style.display = 'flex'
        }
    })
    searchInTitlePromise
}
searchBar.addEventListener('keyup', recordKey)

function animationEndListener(){
    if (this.classList.contains('fadeAway')){
        this.style.display = 'none'
    }
}