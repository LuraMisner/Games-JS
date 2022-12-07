const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const result = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)

    if (randomNumber === 1) {
        computerChoice = 'rock'
    } else if (randomNumber === 2) {
        computerChoice = 'scissors'
    } else {
        computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice
    getResult()
}

function getResult() {
    if (computerChoice === userChoice){
        result.innerHTML = 'Its a draw!'
    } else if (computerChoice === 'rock' && userChoice === 'scissor') {
        result.innerHTML = 'You lost!'
    } else if (computerChoice === 'paper' && userChoice === 'rock') {
        result.innerHTML = 'You lost!'
    } else if (computerChoice === 'scissors' && userChoice === 'paper') {
        result.innerHTML = 'You lost!'
    } else {
        result.innerHTML = 'You win!'
    }
    
}
