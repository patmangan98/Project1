//declare variables
let wordArr = []
let randomWord 
let incorrectGuesses
let gameOver 
let correctGuess 
let spacesArray
let spaces = ""
let guess
let outputLetters
//declare constants
// const alphabet = "abcdefghijklmnopqrstuvwxyz"
const letter = document.querySelector('#letter')
const letterSubmit = document.querySelector('#letterSubmit')
const maxNumberGuesses = 6 
// const wordSubmit = document.querySelector('#wordSubmit')
// const letterSubmit = document.querySelector()
const container = document.querySelector('#cont')
const newGame = document.querySelector('#newGame')
const blankSpaces = document.querySelector('#blankSpaces')
const printMsg = document.querySelector('#printmsg')
// const msgContainer = document.querySelector('#msgcontainer') 
const initalize = () => {
    incorrectGuesses = 0
    gameOver = false
    wordArr = ['Cat', 'bat', 'hat']
    getRandomWord()
    spacesArray = []
    render()
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
        printMsg.innerHTML = `you lose the word was ${word[index]}`
    }
    if (spaces[index].search('_') != -1 && incorrectGuesses <= maxNumberGuesses) {
        printMsg.innerHTML = `you win! the word was ${word[index]}`
    }
}
//renders
const msgPlayer = () => {
    printMsg.innerHTML ='message to player successful'
}
// const createLetterInput = () => {
//     let inputLetter = document.createElement('input')
//     console.log('letter input created')
// }
const createBlankSpaces  = () => { //check for compairson issues in logic
    for (let i = 0; i < outputLetters.length; i++) {
        spaces += "_"
        spacesArray.push('_')
    }
    // console.log(spaces)
    blankSpaces.innerHTML = `${spacesArray}`
    

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
    // playSpaceman()
}

// newGame.addEventListener('click', render())
newGame.addEventListener('click', initalize())