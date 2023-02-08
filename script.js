//  selectors
'use strict'
const dice = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new ')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

const current0 = document.querySelector('#current--0')
const current1 = document.querySelector('#current--0')
const scoreEl0 = document.querySelector('#score--0')
const scoreEl1 = document.querySelector('#score--1')
dice.style.display = 'none'

//Changes
let currentScore = 0;
let activPlayer = 0;
let score = [0, 0]
let gameOver = true

// Event
btnRoll.addEventListener('click', ()=>{
    if (gameOver) {
        //RandomNumber
        let random = Math.floor(Math.random() * 6 + 1)
        dice.style.display = 'block'
        dice.src = `dice-${random}.png`
        if (random != 1) {
            currentScore += random
            document.querySelector(`#current--${activPlayer}`).textContent = currentScore
        } else {
            changePlayer()
        }
    }
})
btnHold.addEventListener('click', () => {
    if (gameOver) {
        score[activPlayer] += currentScore
        document.querySelector(`#score--${activPlayer}`).textContent = score[activPlayer]
        if (score[activPlayer] >= 100) {
            gameOver = false
            document.querySelector(`.player--${activPlayer}`).classList.add('player--winner')
        } else {
            changePlayer()

        }
    }
})
//Fuctions
function changePlayer() {
    document.querySelector(`#current--${activPlayer}`).textContent = 0
    activPlayer = activPlayer == 0 ? 1 : 0
    document.querySelector('.player--0').classList.toggle('player--active')
    document.querySelector('.player--1').classList.toggle('player--active')

}
btnNew.addEventListener('click', () => {
    currentScore = 0;
    activPlayer = 0;
    score = [0, 0]
    gameOver = true
    document.querySelector('.player--0').classList.remove('player--winner')
    document.querySelector('.player--0').classList.remove('player--winner')
    document.querySelector('.player--1').classList.add('player--active')
    document.querySelector('.player--1').classList.remove('player--active')
    current0.textContent = 0
    current1.textContent = 0
    scoreEl0.textContent = 0
    scoreEl1.textContent = 0
    dice.style.display = 'none'

})