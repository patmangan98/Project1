//declare variables
let words = []
let randomWord 
let incorrectGuesses
let gameOver 
let correctGuess 
let spaces
//declare constants
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const maxNumberGuesses = 6 + word[i].length
const wordSubmit = document.querySelector()
const letterSubmit = document.querySelector()
const container = document.querySelector()
const newGame = document.querySelector('#newGame')


const initalize = () => {
    incorrectGuesses = 0
    console.log(incorrectGuesses)
    gameOver = false
    console.log(gameOver)
    words = ['Wizards', 'Commanders', 'Capitals', 'Nationals']
    console.log(words)
}


newGame.addEventListener('click', initalize())
