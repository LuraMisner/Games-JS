const grid = document.querySelector('.grid')
const logsLeft = document.querySelectorAll('.log-left')
const logsRight = document.querySelectorAll('.logs-right')
const resultDisplay = document.querySelector('#result')
const squares = document.querySelectorAll('.grid div')
const startPauseButton = document.querySelector('#start-pause')
const timeDisplay = document.querySelector('#time-left')
const width = 9

let currentIndex = 76

function moveFrog(e) {
    squares[currentIndex].classList.remove('frog')

    switch(e.key) {
        case 'ArrowLeft':
            if (currentIndex % width !== 0) {
                currentIndex -= 1
            }
            break
        case 'ArrowRight':
            if (currentIndex % width < width - 1) {
                currentIndex += 1
            }
            break
        case 'ArrowDown':
            if (currentIndex + width < width * width) {
                currentIndex += width
            }
            break
        case 'ArrowUp':
            if (currentIndex - width >= 0) {
                currentIndex -= width
            }
            break
    }
    
    squares[currentIndex].classList.add('frog')
}

document.addEventListener('keyup', moveFrog)


function moveLogLeft () {
    switch(true) {
    
    }
}

