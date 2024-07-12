function showHideElements(className: string, showHide: boolean){
    let selectedClassElements: NodeListOf<HTMLElement> = document.querySelectorAll(className)
    selectedClassElements.forEach( (element: HTMLElement) => {
        if (showHide === true){
            element.style.visibility = 'hidden'
        }
        else{
            element.style.visibility = 'visible'
        }
    })
}

function changePropertyOfClass(className: string, property: string, value: string){
    let selectedClassElements: NodeListOf<HTMLElement> = document.querySelectorAll(className)
    selectedClassElements.forEach( (element: HTMLElement) => {
        if (property === 'cursor'){
            element.style.cursor = value
        }
    })
}

function showHideLandingPage(){
    const landingPage: HTMLElement = document.getElementById('landing-page')!
    const mainParallax: HTMLElement = document.getElementById('main-parallax')!
    const homeSearch: HTMLInputElement = document.getElementById('home-search')! as HTMLInputElement
    const appTitle: HTMLDivElement = document.querySelector('.app-title')! as HTMLDivElement
    if (landingPage.style.display === 'none') {
        landingPage.style.display = 'flex'
        mainParallax.style.display = 'block'
        homeSearch.style.display = 'block'
        appTitle.style.display = 'flex'
    }
    else {
        landingPage.style.display = 'none'
        mainParallax.style.display = 'none'
        homeSearch.style.display = 'none'
        appTitle.style.display = 'none'
    }
}

function backToLandingPage(elementsToRemove: HTMLElement[]){
    elementsToRemove.forEach((element: HTMLElement) => {
        element.style.display = 'none'
    })
    showHideLandingPage()
}