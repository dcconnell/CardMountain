const startQuizBtn: HTMLElement = document.getElementById('start-quiz')!
const quizDiv: HTMLElement = document.getElementById('quiz-div')!
const quizHeader: HTMLElement = document.getElementById('quiz-header')!
const quizDescriptionHeader: HTMLElement = document.getElementById('question-description-header')!
const quizDescription: HTMLElement = document.getElementById('question-description')!
const quizInstructionHeader: HTMLElement = document.getElementById('question-instruction-header')!
const quizInstruction: HTMLElement = document.getElementById('question-instruction')!
const questionHeader: HTMLElement = document.getElementById('question-answers')!
const questionDiv: HTMLElement = document.getElementById('questions')!
const back: HTMLElement = document.getElementById('back-button')!

back.addEventListener('click', () => {backToLandingPage([quizDiv, back])})

function generateQuestions(questions: string[]){
    let allQuestions: string[] = []
    for (let i = 0; i < questions.length; ++i){
        allQuestions.push(`<div class="question">
                            <div id="correct-answer-animation-element${i}" class="correct-answer q${i}" style="display:none;"></div>
                            <p class="q-text q${i}">${questions[i]}</p>
                            <input type="text" id="answer-text${i}" class="answer-text q${i}" placeholder="${placeholders[i]}"></input>
                            <button id="answer-submit-btn${i}" class="answer-submit q${i}" onclick="checkAnswer(this, ${i})">&#10004; Submit</button>
                           </div>`)
    }
    return allQuestions.join('')
}

function startQuiz(){
    showHideLandingPage()
    back.style.display = 'block'
    quizDiv.style.display = 'block'
    quizHeader.innerHTML = 'Assessment Quiz'
    quizDescriptionHeader.innerHTML = 'Background'
    quizDescription.innerHTML = 'Background of question'
    quizInstructionHeader.innerHTML = 'Instructions'
    quizInstruction.innerHTML = 'Instructions to answer the question'
    questionHeader.innerHTML = '<span>Answer the questions below</span>'
    questionDiv.innerHTML = generateQuestions(questions)
}

function checkAnswer(submitBtn: HTMLElement, questionNumber: number){
    const correctAnswerAnimationElement: HTMLElement = document.getElementById(`correct-answer-animation-element${questionNumber}`)!
    const answerGiven: HTMLInputElement = document.getElementById(`answer-text${questionNumber}`)! as HTMLInputElement
    if (answerGiven.value === answers[questionNumber]){
        if (submitBtn.classList.contains('answer-submit-wrong')){
            submitBtn.classList.remove('answer-submit-wrong')
        }
        correctAnswerAnimationElement.style.display = 'block'
        correctAnswerAnimationElement.classList.toggle('correct-answer-animation')
        submitBtn.innerHTML = 'Correct!'
        setTimeout(() => {
            correctAnswerAnimationElement.classList.remove('correct-answer-animation')
            correctAnswerAnimationElement.style.backgroundColor = 'lightgreen'
        }, 750);
        console.log(`Answer was correct!`)
    }
    else {
        if (!submitBtn.classList.contains('answer-submit-wrong')){
            submitBtn.classList.toggle('answer-submit-wrong')
        }
        submitBtn.innerHTML = 'Wrong &#9785;, try again!'
        submitBtn.classList.toggle('buttonShake')
        setTimeout(() => {
            submitBtn.classList.remove('buttonShake')
            submitBtn.classList.remove('answer-submit-wrong')
            submitBtn.innerHTML = '&#10004; Submit'
        }, 750)
        console.log('Answer was wrong!')
    }
}