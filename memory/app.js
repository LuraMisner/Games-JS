const cardArray = [{
    name: 'crown',
    img: 'images/crown.jpg'
},
{
    name: 'cupcake',
    img: 'images/cupcake.jpg'
},
{
    name: 'donut',
    img: 'images/donut.jpg'
},
{
    name: 'rainbow',
    img: 'images/rainbow.jpg'
},
{
    name: 'star',
    img: 'images/star.jpg'
}, 
{
    name: 'unicorn',
    img: 'images/unicorn.jpg'
},
{
    name: 'crown',
    img: 'images/crown.jpg'
},
{
    name: 'cupcake',
    img: 'images/cupcake.jpg'
},
{
    name: 'donut',
    img: 'images/donut.jpg'
},
{
    name: 'rainbow',
    img: 'images/rainbow.jpg'
},
{
    name: 'star',
    img: 'images/star.jpg'
}, 
{
    name: 'unicorn',
    img: 'images/unicorn.jpg'
}]

// Shuffle randomly
cardArray.sort(() => 0.5 -Math.random())

const grid = document.querySelector('#grid')
const cardsWon = []
const result =  document.querySelector('#score')
let cardsChosen = []
let cardsChosenIds = []

function createBoard() {
    for (let i = 0; i < cardArray.length; ++ i){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/back.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.append(card)
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')

    if (cardsChosenIds[0] == cardsChosenIds[1]) {
        alert("You have clicked the same image")
        cards[cardsChosenIds[0]].setAttribute('src', 'images/back.jpg')
    }
    else if (cardsChosen[0] == cardsChosen[1]) {
        alert("You found a match!")
        cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/white.png')
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
   } else {
        alert("Not a match, try again!")
        cards[cardsChosenIds[0]].setAttribute('src', 'images/back.jpg')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/back.jpg')
   }

   result.innerHTML = cardsWon.length
   cardsChosen = []
   cardsChosenIds = []

   if (cardsWon.length == (cardArray.length/2)) {
        result.innerHTML = 'Congratulations! You found them all!'
   } 
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}



createBoard()