//declare variables
let wordArr = []
let randomWord 
let incorrectGuesses
let gameOver 
let correctGuess 
let spaces
let guess
let outputLetters
//declare constants
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const letter = document.querySelector('#letter')
const letterSubmit = document.querySelector('#letterSubmit')
// const maxNumberGuesses = 6 + words[i].length
// const wordSubmit = document.querySelector('#wordSubmit')
// const letterSubmit = document.querySelector()
const container = document.querySelector('#cont')
const newGame = document.querySelector('#newGame')
// const printMsg = document.querySelector('#printmsg')
// const msgContainer = document.querySelector('#msgcontainer') 



const initalize = () => {
    incorrectGuesses = 0
    // console.log(incorrectGuesses)
    gameOver = false
    // console.log(gameOver)
    wordArr = ['Cat', 'bat', 'hat']
    // console.log(words)
    getRandomWord()
    // guess = letter.value
    console.log('init successful')
}



const getRandomWord = (wordsArr) => { //update this to output an array of letters 
    const randomIndex = Math.floor(Math.random() * wordArr.length)
    randomWord = wordArr[randomIndex]
    outputLetters = randomWord.split('')
    console.log(outputLetters)
    // return randomWord
    // console.log(randomWord)
}

const playSpaceman = () => { //update this to search ?
    while(!gameOver) {
       guess = prompt("guess a letter", 'your letter here')
       if (outputLetters.includes(guess) != true) {
            incorrectGuesses += 1 
       }
       if (outputLetters.includes(guess) = true) {
            spaces[index] === guess
       }
    }
    correctGuess = true
    if (correctGuess != true) {
        incorrectGuesses++
    }
    if (spaces[index].search('_') = -1 && incorrectGuesses >= maxNumberGuesses) {
        printMsg.innerText = `you lose the word was ${word[index]}`
    }
    if (spaces[index].search('_') != -1 && incorrectGuesses <= maxNumberGuesses) {
        printMsg.innerText = `you win! the word was ${word[index]}`
    }
}


//renders

const msgPlayer = () => {
    console.log('message to player successful')
}

// const createLetterInput = () => {
//     let inputLetter = document.createElement('input')
//     console.log('letter input created')
// }

const createBlankSpaces  = () => {
    spaces = ""
    for(let i = 0, i < outputLetters.length, i++) {
        spaces.push("_")
    }
    console.log(spaces)
}

const createRocket = () => {
    console.log('create rocket click worked')
}

const moveCounter = () => {
    console.log("your move")
}



const render = () => {
    msgPlayer()
    // createLetterInput()
    createBlankSpaces()
    moveCounter()
    createRocket()
}


newGame.addEventListener('click', initalize())
newGame.addEventListener('click', render())
