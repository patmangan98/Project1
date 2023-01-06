//declare variables
let wordArr = ['moon', 'spacesuit', 'stars', 'earth', 'home', 'commanders', 'wizards', 'nationals', 'capitals']
let randomWord //answer
let correctGuessedLetters = [] //mis\
let letter = ''
let letterClicked = ''//letter clicked
let guessesRemaining 
let wordSpaces
let guess ='' 

let incorrectTally = 0

let allLettersGuessed = []

//declare constants
// const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z']
const maxNumberGuesses = 6 
const container = document.querySelector('#cont')
const newGame = document.querySelector('#newGame')
const blankSpaces = document.querySelector('#blankSpaces')
const printMsg = document.querySelector('#printMsg')
const alphabetCont = document.querySelector('#alphabetCont')
const getPlayerGuess = document.querySelectorAll('button')
const guessesLeftMsg = document.querySelectorAll('#guessesLeft')
const guesses = document.querySelector('#guesses')



const init = () => {
    // startNewGameDisplay() 
}
  
// const startNewGameDisplay = () => {
//     guesses.style.display = 'flex'
//     guessesLeftMsg.style.display = 'flex'
//     alphabetCont.style.display = 'flex'
//     printMsg.style.display = 'flex'
//     newGame.style.display = 'none'
//     document.reload()
// }




const getRandomWord = (arr) => { 
    const randomIndex = Math.floor(Math.random() * arr.length)
    randomWord = wordArr[randomIndex] 
    wordSpaces = ''
        for(let char of randomWord) {
            if(char === ' '){
                wordSpaces = wordSpaces + char
            } else {
                wordSpaces = wordSpaces + ' _ '
            } 
            blankSpaces.innerText = `${wordSpaces}`
            console.log(randomWord)
        }
}
getRandomWord(wordArr)

const moveCounter = (num1, num2) => {
    guessesRemaining = num1 - num2
    guessesLeft.innerText = `${num1 - num2}`
}

const disableButton = (button) => {
    button.setAttribute('disabled', true)
}

const playerGuess = () => {
    getPlayerGuess.forEach(item => {
     item.addEventListener('click', event => {
         const clickedItem = event.target
         disableButton(clickedItem)
         // console.log(clickedItem.innerText)
         letterClicked = clickedItem.innerText
         console.log(letterClicked) 
         let spaceStr = wordSpaces.replace(/\s/g, '')
         // console.log(spaceArr)
        if(randomWord.includes(letterClicked)){
            //  console.log('true')
             printMsg.innerText = `Correct!, Keep Going!` 
             correctGuessedLetters.push(letterClicked)
             const spaceArr = spaceStr.split('') 
             let wordArray = randomWord.split('')
             for (let i = 0; i < wordArray.length; i++) {
                 if(wordArray[i] === letterClicked){
                     spaceArr[i] = letterClicked 
                    //  console.log(spaceArr)
                 }
             }
            wordSpaces = spaceArr.join('') 
            updateDisplayLetters()
             isGameOver()
            
             console.log(wordSpaces)
        } else {
             console.log('false')
             printMsg.innerText ='Incorrect! Try Again!'
             isGameOver()
             incorrectTally++
             console.log(incorrectTally)
             moveCounter(maxNumberGuesses, incorrectTally)
            
        }
        allLettersGuessed.push(letterClicked)
        console.log(allLettersGuessed)
        

     })
    })
 }
playerGuess()


const updateDisplayLetters = () => {
    blankSpaces.innerHTML = `${wordSpaces}`
}

const isGameOver = () => {
    if (incorrectTally >= maxNumberGuesses && wordSpaces.includes('_') != false) {
        // console.log('you loose')
        alphabetCont.style.display = 'none'
        blankSpaces.innerText = `You Lose, the word was ${randomWord}`
        printMsg.style.display ='none'
        
    }
    if(correctGuessedLetters.length === randomWord.length) {
        console.log('you win')
        alphabetCont.style.display = 'none'
        blankSpaces.innerText = 'You win, Would you like to play again?'
        printMsg.style.display ='none'
    } 
    
}
    

const createRocket = () => {
    console.log('create rocket click worked')
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
newGame.addEventListener('click', init())