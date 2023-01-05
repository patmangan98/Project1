//declare variables
let wordArr = ['Cat', 'bat', 'hat']
let randomWord //answer
let guessedLetters = [] //mis\
let letter = ''
let letterClicked = ''//letter clicked
let incorrectGuesses = 0
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z']


//declare constants

// const letter = document.querySelector('#letter')
const letterSubmit = document.querySelector('#letterSubmit')
const maxNumberGuesses = 6 
const container = document.querySelector('#cont')
const newGame = document.querySelector('#newGame')
const blankSpaces = document.querySelector('#blankSpaces')
const printMsg = document.querySelector('#printmsg')
const alphabetCont = document.querySelector('#alphabetCont')
// const msgContainer = document.querySelector('#msgcontainer')

const displayButtons = () => {
    let lettersList = document.createElement('ul')
    for (let i = 0; i < alphabet.length; i++) {
        lettersList.id = "alphabet"
        letter = document.createElement('li')
        letter.id = alphabet[i]
        letter.innerHTML = alphabet[i]
        alphabetCont.appendChild(lettersList)
        lettersList.appendChild(letter)
    }
}
displayButtons()


// const playerGuess = () => {
//     document.querySelectorAll
// }
const getRandomWord = (arr) => { //update this to output an array of letters 
    const randomIndex = Math.floor(Math.random() * arr.length)
    randomWord = wordArr[randomIndex]
        // guessWord = ''
    console.log(randomWord)
}
getRandomWord(wordArr)

const playerGuess = () => {
   const getPlayerGuess = document.querySelectorAll('li')
   getPlayerGuess.forEach(item => {
    item.addEventListener('click', event => {
        const clickedItem = event.target
        // console.log(clickedItem.innerText)
        letterClicked = clickedItem.innerText
        console.log(letterClicked)
       if(randomWord.includes(letterClicked)){
        console.log('true')
        guessedLetters.push(letterClicked)
        console.log(guessedLetters)
       } else {
        console.log('false')
       }
    })
   })
}
playerGuess()

const displayWord = () = {

} 


const getCurrentWordStatus = () => {
    console.log('heres the current word')
}
// const getRandomWord = (wordArr) => { //update this to output an array of letters 
//     const randomIndex = Math.floor(Math.random() * wordArr.length)
//     randomWord = wordArr[randomIndex]
//     console.log(randomWord) 
// }
// const initalize = () => {
//     incorrectGuesses = 0
//     gameOver = false
//     wordArr = ['Cat', 'bat', 'hat']
//     getRandomWord()
//     spacesArray = []
    
//     console.log('init successful')
// }
// const getRandomWord = (wordsArr) => { //update this to output an array of letters 
//     const randomIndex = Math.floor(Math.random() * wordArr.length)
//     randomWord = wordArr[randomIndex]
//         guessWord = ''
//         for (let char of randomWord) {
//             console.log(char)
//             if(char === ' '){
//                 guessWord = guessWord + char
//             } else {
//                 guessWord = guessWord + ' _ '
//             }
//         }
//             blankSpaces.innerHTML = `${guessWord}`
//     }
// getRandomWord()


    
const msgPlayer = () => {
    printMsg.innerHTML ='message to player successful'
}
// const createLetterInput = () => {
//     let inputLetter = document.createElement('input')
//     console.log('letter input created')
// }
// const createBlankSpaces  = () => { //check for compairson issues in logic
//     for (let i= 0; i < outputLetters; i++) {
//         spaces += "_"
//         spacesArray.push('_')
//     }
//     console.log(outputLetters)
//     blankSpaces.innerHTML = `${spaces}`
    

// }

// const createBlankSpaces = () => {
//     // guessWord = ''
//     // for (let char of randomWord) {
//     //     console.log(char)
//     //     if(char === ' '){
//     //         guessWord = guessWord + char
//     //     } else {
//     //         guessWord = guessWord + '_'
//     //     }
//     // }
//     // console.log(guessWord)
// }

const createRocket = () => {
    console.log('create rocket click worked')
}
const moveCounter = () => {
    console.log("your move")
}
const render = () => {
    msgPlayer()
    // createLetterInput()
    // createBlankSpaces()
    moveCounter()
    createRocket()
    // playSpaceman()
}

// newGame.addEventListener('click', render())
// newGame.addEventListener('click', initalize())