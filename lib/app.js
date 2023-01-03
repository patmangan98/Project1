//declare variables
let words = []
let randomWord 
let incorrectGuesses
let gameOver 
let correctGuess 
let spaces
//declare constants
const alphabet = "abcdefghijklmnopqrstuvwxyz"
// const maxNumberGuesses = 6 + words[i].length
const wordSubmit = document.querySelector('#wordSubmit')
// const letterSubmit = document.querySelector()
const container = document.querySelector('#cont')
const newGame = document.querySelector('#newGame')
const printMsg = document.querySelector('#printmsg')
const msgContainer = document.querySelector('#msgcontainer') 



const initalize = () => {
    incorrectGuesses = 0
    // console.log(incorrectGuesses)
    gameOver = false
    // console.log(gameOver)
    words = ['Wizards', 'Commanders', 'Capitals', 'Nationals']
    // console.log(words)
}

// const getRandomWord = () => {
//     const randomIndex = Math.floor(Math.random() * words.length)
//     return words[randomIndex]
// }

// while (!gameOver) {
//     printMsg.innerText = 'Guess A letter'
    
// }



// const playSpaceMan = () => {
//     const word = getRandomWord()
//     const wordLength = word.length
// }
//renders
const pickAWordScreen = () => {
   let button = document.createElement('button')
   button.setAttribute('id', 'wordSubmit')
   button.innerText = 'Random Word'
   msgContainer.appendChild(button)
}

const hideRandomWordbutton = () => {
    wordSubmit.display.style = "none"
}

const createRocket = () => {
    console.log('create rocket click worked')
}

const moveCounter = () => {
    console.log("your move")
}

newGame.addEventListener('click', initalize())
newGame.addEventListener('click', pickAWordScreen())
// wordSubmit.addEventListener('click', createRocket())

const render = () => {
    // hideRandomWordbutton()
    createRocket()
}
wordSubmit.addEventListener('click', render())

