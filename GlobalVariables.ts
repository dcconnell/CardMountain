// left Card Generator variables
const leftCardTitles: string[] = ['Example Card 1', 'Example Card 2', 'Example Card 3']
const leftCardDescriptions: string[] = ['Description Example', 'Description Example', 'Description Example']
const leftCardOnClickFunc: string[] = ['', '', '']
const leftCardParent: HTMLDivElement = document.querySelector('.left-card-parent') as HTMLDivElement

// center Card Generator variables
const centerCardTitles: string[] = ['Click Me', 'Example Card 2', 'Example Card 3', 'Example Card 4', 'Example Card 5']
const centerCardDescriptions: string[] = ['Test your Knowledge', 'Test your Knowledge', 'Test your Knowledge', 'Test your Knowledge', 'Test your Knowledge']
const centerCardOnClickFunc: string[] = ['startQuiz()', '', '', '', '']
const centerCardParent: HTMLDivElement = document.querySelector('.center-card-parent') as HTMLDivElement

// right Card Generator variables
const rightCardTitles: string[] = ['Anything Works', 'When You Put', 'Your Mind To It']
const rightCardDescriptions: string[] = ['Description Example', 'Description Example', 'Description Example']
const rightCardOnClickFunc: string[] = ['', '', '']
const rightCardParent: HTMLDivElement = document.querySelector('.right-card-parent') as HTMLDivElement

// Quiz variables
const questions: string[] = ['What is the distance from the Earth to the Sun in Miles?', 'What is the distance from the Earth to the Moon in Miles?']
const answers: string[] = ['54.805 million miles', '238,900 miles']
const placeholders: string[] = ['Ex. 54.805 million miles', 'Ex. 238,900 miles']