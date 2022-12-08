const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
let result = 0
let hitPosition
let currentTime = 60
let timerId = null
let countDownTimerId = setInterval(countDown, 1000)

// Check if the mole has been clicked on to increment the score
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function randomSquare() {
    // Remove mole if it exists
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    // Pick a random square to make the mole
    let randomS = squares[Math.floor(Math.random() * squares.length)]
    randomS.classList.add('mole')
    hitPosition = randomS.id
}

function moveMole() {
    // Pops up a mole at random
    timerId = setInterval(randomSquare, 500)
}


function countDown() {
    currentTime--
    timeLeft.textContent=currentTime

    // Handle what happens when timer hits 0
    if (currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }

}

moveMole()