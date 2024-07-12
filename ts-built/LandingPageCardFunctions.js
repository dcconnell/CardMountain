"use strict";
function generateLeftCards(cardTitles, cardDescriptions, cardOnClickFunc) {
    const cards = [];
    for (let i = 0; i < cardTitles.length; i++) {
        if (i === 0) {
            cards.push(`<h3>Left Category 🏗️</h3>
                               <div class="card below" onclick="${cardOnClickFunc[i]}">
                               <h3 class="card-title">${cardTitles[i]}</h3>
                               <span class="card-arrow">&#8658;</span>
                               <p class="card-description">${cardDescriptions[i]}</p>
                               </div>`);
        }
        else {
            cards.push(`<div class="card below" onclick="${cardOnClickFunc[i]}">
                <h3 class="card-title">${cardTitles[i]}</h3>
                <span class="card-arrow">&#8658;</span>
                <p class="card-description">${cardDescriptions[i]}</p>
                </div>`);
        }
    }
    return cards.join('');
}
function generateCenterCards(cardTitles, cardDescriptions, cardOnClickFunc) {
    const cards = [];
    for (let i = 0; i < cardTitles.length; i++) {
        if (i === 0) {
            cards.push(`<h3>Center Category ⚡</h3>
                               <div class="card below" onclick="${cardOnClickFunc[i]}">
                               <h3 class="card-title">${cardTitles[i]}</h3>
                               <span class="card-arrow">&#8658;</span>
                               <p class="card-description">${cardDescriptions[i]}</p>
                               </div>`);
        }
        else {
            cards.push(`<div class="card below" onclick="${cardOnClickFunc[i]}">
                <h3 class="card-title">${cardTitles[i]}</h3>
                <span class="card-arrow">&#8658;</span>
                <p class="card-description">${cardDescriptions[i]}</p>
                </div>`);
        }
    }
    return cards.join('');
}
function generateRightCards(cardTitles, cardDescriptions, cardOnClickFunc) {
    const cards = [];
    for (let i = 0; i < cardTitles.length; i++) {
        if (i === 0) {
            cards.push(`<h3>Right Category 💣</h3>
                               <div class="card below" onclick="${cardOnClickFunc[i]}">
                               <h3 class="card-title">${cardTitles[i]}</h3>
                               <span class="card-arrow">&#8658;</span>
                               <p class="card-description">${cardDescriptions[i]}</p>
                               </div>`);
        }
        else {
            cards.push(`<div class="card below" onclick="${cardOnClickFunc[i]}">
                <h3 class="card-title">${cardTitles[i]}</h3>
                <span class="card-arrow">&#8658;</span>
                <p class="card-description">${cardDescriptions[i]}</p>
                </div>`);
        }
    }
    return cards.join('');
}
leftCardParent.innerHTML = generateLeftCards(leftCardTitles, leftCardDescriptions, leftCardOnClickFunc);
centerCardParent.innerHTML = generateCenterCards(centerCardTitles, centerCardDescriptions, centerCardOnClickFunc);
rightCardParent.innerHTML = generateRightCards(rightCardTitles, rightCardDescriptions, rightCardOnClickFunc);
