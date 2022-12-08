const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
let result = 0

function randomSquare() {
    // Remove mole if it exists
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    // Pick a random square to make the mole
    let randomS = squares[Math.floor(Math.random() * squares.length)]
    randomS.classList.add('mole')
}

randomSquare()