"use strict";
function showHideElements(className, showHide) {
    let selectedClassElements = document.querySelectorAll(className);
    selectedClassElements.forEach((element) => {
        if (showHide === true) {
            element.style.visibility = 'hidden';
        }
        else {
            element.style.visibility = 'visible';
        }
    });
}
function changePropertyOfClass(className, property, value) {
    let selectedClassElements = document.querySelectorAll(className);
    selectedClassElements.forEach((element) => {
        if (property === 'cursor') {
            element.style.cursor = value;
        }
    });
}
function showHideLandingPage() {
    const landingPage = document.getElementById('landing-page');
    const mainParallax = document.getElementById('main-parallax');
    const homeSearch = document.getElementById('home-search');
    const appTitle = document.querySelector('.app-title');
    if (landingPage.style.display === 'none') {
        landingPage.style.display = 'flex';
        mainParallax.style.display = 'block';
        homeSearch.style.display = 'block';
        appTitle.style.display = 'flex';
    }
    else {
        landingPage.style.display = 'none';
        mainParallax.style.display = 'none';
        homeSearch.style.display = 'none';
        appTitle.style.display = 'none';
    }
}
function backToLandingPage(elementsToRemove) {
    elementsToRemove.forEach((element) => {
        element.style.display = 'none';
    });
    showHideLandingPage();
}
