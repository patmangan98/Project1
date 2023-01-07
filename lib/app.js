//declare variables
let wordArr = []
let randomWord //answer
let correctGuessedLetters = [] //mis\
let letter = ''
let letterClicked = ''//letter clicked
let guessesRemaining 
let wordSpaces
let guess ='' 
let incorrectTally 
let allLettersGuessed = []

//declare constants
const maxNumberGuesses = 6 
const container = document.querySelector('#cont')
const newGame = document.querySelector('#newGame')
const blankSpaces = document.querySelector('#blankSpaces')
const printMsg = document.querySelector('#printMsg')
const alphabetCont = document.querySelector('#alphabetCont')
const getPlayerGuess = document.querySelectorAll('.letterButton')
const guessesLeftMsg = document.querySelectorAll('#guessesLeft')
const guesses = document.querySelector('#guesses')
const hideElements = document.querySelector('main')
const startGame = document.querySelector('#startGame')


const initNewGame = () => {
    newGame.style.display ='none'   
    wordArr = ['moon', 'spacesuit', 'stars', 'earth', 'home', 'commanders', 'wizards', 'nationals', 'capitals']
    incorrectTally = 0
}
initNewGame()

//display the game at launch 
const beginGame = () => {
    hideElements.style.display = 'flex'
    startGame.style.display = 'none'
    console.log('click')
   
}

//get a random word 
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

//update the move counter
const moveCounter = (num1, num2) => {
    guessesRemaining = num1 - num2
    guessesLeft.innerText = `${guessesRemaining + 1}`
}
//disable the buttons after click 
const disableButton = (button) => {
    button.setAttribute('disabled', true)
}

const playerGuess = () => {
    getPlayerGuess.forEach(item => {
     item.addEventListener('click', event => {
         const clickedItem = event.target
         disableButton(clickedItem)
         letterClicked = clickedItem.innerText
         console.log(letterClicked) 
         let spaceStr = wordSpaces.replace(/\s/g, '')
        if(randomWord.includes(letterClicked)){
             printMsg.innerText = `Correct!, Keep Going!` 
             correctGuessedLetters.push(letterClicked)
             const spaceArr = spaceStr.split('') 
             let wordArray = randomWord.split('')
             for (let i = 0; i < wordArray.length; i++) {
                 if(wordArray[i] === letterClicked){
                     spaceArr[i] = letterClicked 
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

//show the corrrectly guessed letters to the players 
const updateDisplayLetters = () => {
    blankSpaces.innerHTML = `${wordSpaces}`
}


//win loss logic 
const isGameOver = () => {
    if (incorrectTally >= maxNumberGuesses && wordSpaces.includes('_') != false) {
        alphabetCont.style.display = 'none'
        blankSpaces.innerText = `You Lose, the word was ${randomWord}`
        printMsg.style.display ='none'
        newGame.style.display ='flex'
        
    }
    if(correctGuessedLetters.length === randomWord.length || randomWord === wordSpaces) {
        alphabetCont.style.display = 'none'
        blankSpaces.innerText = 'You win, Would you like to play again?'
        printMsg.style.display ='none'
        newGame.style.display ='flex'
    } 
    
}

const playAgain = () => {
    document.reload 
}

startGame.addEventListener('click', beginGame)
newGame.addEventListener('click', playAgain)