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
    spacesArray = []
    gameOver = false
  
    wordArr = ['Cat', 'bat', 'hat']
    
    getRandomWord()
   
    // console.log('init successful')
}



const getRandomWord = (wordsArr) => { //update this to output an array of letters 
    const randomIndex = Math.floor(Math.random() * wordArr.length)
    randomWord = wordArr[randomIndex]
    outputLetters = randomWord.split('')
    console.log(outputLetters)
    // return randomWord
    // console.log(randomWord)
}

// const playSpaceman = () => { //update this to search ?
//     while(!gameOver) {
//        guess = prompt("guess a letter", 'your letter here')
//        if (outputLetters.includes(guess) != true) {
//             incorrectGuesses += 1 
//        }
//        if (outputLetters.includes(guess)) {
//             outputLetters === spacesArray[1]  
//        }
//     }
//     correctGuess = true
//     if (correctGuess != true) {
//         incorrectGuesses++
//     }
//     if (spaces[index].search('_') = -1 && incorrectGuesses >= maxNumberGuesses) {
//         printMsg.innerHTML = `you lose the word was ${word[index]}`
//     }
//     if (spaces[index].search('_') != -1 && incorrectGuesses <= maxNumberGuesses) {
//         printMsg.innerHTML = `you win! the word was ${word[index]}`
//     }
// }
const playSpaceman = () => { //update this to search ?
    while(!gameOver) { //start of game loop
        //get input from player
       guess = prompt("guess a letter", 'your letter here') 
// loop the length of the outputLetters(randomWord in array form)
       for(let i = 0; i < outputLetters.length; i++){ 
        //check if the array includes the player's guess
            if (outputLetters.includes(guess) != true) { //false 
                incorrectGuesses += 1 //add 
            }
            if (outputLetters.includes(guess)) {
                spacesArray.push(guess)
             }  
        }
    }
    correctGuess = true
    if (correctGuess != true) {
        incorrectGuesses++
    }
    if (spacesArray.search('_') = -1 && incorrectGuesses >= maxNumberGuesses) {
        printMsg.innerHTML = `you lose the word was ${word[index]}`
    }
    if (spacesArray.search('_') != -1 && incorrectGuesses <= maxNumberGuesses) {
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
    blankSpaces.innerHTML = `${spaces}`
   
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
    playSpaceman()
}


newGame.addEventListener('click', initalize())
newGame.addEventListener('click', render())
