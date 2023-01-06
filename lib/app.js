//declare variables
let wordArr = ['cat', 'bat', 'hat']
let randomWord //answer
let correctGuessedLetters = [] //mis\
let letter = ''
let letterClicked = ''//letter clicked
let incorrectGuesses = 0

let wordSpaces

let guess ='' 

let incorrectTally = 0



//declare constants
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z']
const maxNumberGuesses = 6 

// const letter = document.querySelector('#letter')
const container = document.querySelector('#cont')
// const newGame = document.querySelector('#newGame')
// const guessesLeft = document.querySelector()
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



const getRandomWord = (arr) => { //update this to output an array of letters 
    const randomIndex = Math.floor(Math.random() * arr.length)
    randomWord = wordArr[randomIndex] 
    wordSpaces = ''
        for(let char of randomWord) {
            // console.log(char)
            if(char === ' '){
                wordSpaces = wordSpaces + char
            } else {
                wordSpaces = wordSpaces + ' _ '
            } //else if 
            blankSpaces.innerText = `${wordSpaces}`
        }
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
        let spaceArr = wordSpaces.replace(/\s/g, '')
        // console.log(spaceArr)
       if(randomWord.includes(letterClicked)){
            console.log('true')
            correctGuessedLetters.push(letterClicked)
            spaceArr.split('_')
            let arr =randomWord.split('')
            for (let i = 0; i < arr.length; i++) {
                if(arr[i] = spaceArr[i]){
                    wordSpaces.replace('_',letterClicked) 
                    console.log(wordSpaces)
                }
            }
            console.log(spaceArr)
            isGameOver()
            console.log(wordSpaces)
       } else {
            // console.log('false')
            isGameOver()
            incorrectTally++
            console.log(incorrectTally)
       }
    })
   })
}
playerGuess()

// const updateRemainingGuesses = () => {
//     incorrectTally = 0 
//     if () 
// }


// const clearBlankSpaces = () => {
//     for(let char of randomword) {
//         if (char === guess) {
//             wordSpaces.spilt('_')[i] =gue
//         }
//     }
// }



const displayWord = () => {
    console.log('here is your word')
}

const getCurrentWordStatus = () => {
    console.log('heres the current word')
}

const isGameOver = () => {
    if (incorrectTally >= maxNumberGuesses && wordSpaces.includes('_') != false) {
        console.log('you loose')
    }
    if(correctGuessedLetters.length === randomWord.length) {
        console.log('you win')
    } 
    
}
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