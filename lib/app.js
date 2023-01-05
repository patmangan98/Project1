//declare variables
let wordArr = []
let randomWord //answer
let incorrectGuesses//mis\
let letter = ''
let selection = ''
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z']

// let gameOver 





// let correctGuess 
// let spacesArray
// let spaces = ""
// let guess
// let guessArr = []
// let guessWord
// let outputLetters
//declare constants

// const letter = document.querySelector('#letter')
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
    
    console.log('init successful')
}
const getRandomWord = (wordsArr) => { //update this to output an array of letters 
    const randomIndex = Math.floor(Math.random() * wordArr.length)
    randomWord = wordArr[randomIndex]
        guessWord = ''
        for (let char of randomWord) {
            console.log(char)
            if(char === ' '){
                guessWord = guessWord + char
            } else {
                guessWord = guessWord + ' _ '
            }
        }



const playSpaceman = () => {

}    
    // outputLetters = randomWord.split('')
    // console.log(outputLetters)
    // return randomWord
    blankSpaces.innerHTML = `${guessWord}`
    console.log(guessWord)
    console.log(randomWord)
}
// const playSpaceman = () => { //update this to search ?
//     while(!gameOver) {
//        guess = prompt("guess a letter", 'your letter here')
//        for (let i = 0; spacesArray.length; i++){
//        if (outputLetters.includes(guess) != true) {
//             incorrectGuesses += 1 
//        }
//        if (outputLetters.includes(guess)) {
//             spacesArray[i] === guess
//        }
//     }
// }
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

// const playSpaceman = () => {
//     while(!gameOver){
//         guess = prompt("guess a letter", 'your letter here')
//        for (let i = 0; i < ; i++){
//             if(guessWord.includes(guess)) {
//                 blankSpaces.innerHTML = `${guessWord}`
//             } else {
//                 incorrectGuesses++
//             }
//        }
//       if(incorrectGuesses >= maxNumberGuesses && spacesArray.includes('_') != false) {
//         console.log('you lose')
//         gameOver = true
//       } 
//       if(incorrectGuesses <= maxNumberGuesses && spacesArray.includes('_') != true) {
//         console.log('you Win')
//         gameOver = true
//       }
        
//     }
       
// } 
    
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

newGame.addEventListener('click', render())
newGame.addEventListener('click', initalize())