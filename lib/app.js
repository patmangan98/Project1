//declare variables
let wordArr = []
// randomWord is the word to be guessed 
let randomWord 
let correctGuessedLetters = [] 
let letter = ''
let letterClicked = ''
let guessesRemaining 
let wordSpaces
let guess ='' 
let incorrectTally 


//declare constants
const maxNumberGuesses = 6 
const newGame = document.querySelector('#newGame')
const blankSpaces = document.querySelector('#blankSpaces')
const printMsg = document.querySelector('#printMsg')
const alphabetCont = document.querySelector('#alphabetCont')
const getPlayerGuess = document.querySelectorAll('.letterButton')
const guessesLeftMsg = document.querySelectorAll('#guessesLeft')
const hideElements = document.querySelector('main')
const startGame = document.querySelector('#startGame')

//initalize new game
const initNewGame = () => {
    newGame.style.display ='none'   
    wordArr = ['moon', 'spacesuit', 'stars', 'earth', 'home', 'commanders', 'wizards', 'nationals', 'capitals']
    incorrectTally = 0
}
initNewGame()

//display the game at launch (or reveal elements) 
const beginGame = () => {
    hideElements.style.display = 'flex'
    startGame.style.display = 'none'
}

//get a random word and render out blank spaces
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
        }
}
getRandomWord(wordArr)

//render function to update move counter
const moveCounter = (num1, num2) => {
    guessesRemaining = num1 - num2
    guessesLeft.innerText = `${guessesRemaining}`
    if (num1 - num2 === -1) {
        guessesLeft.innerText = '0'
    }
}
//disable the buttons after click 
const disableButton = (button) => {
    button.setAttribute('disabled', true)
}

//check if guess was corrrect logic 
const playerGuess = () => {
    getPlayerGuess.forEach(item => {
     item.addEventListener('click', event => {
         const clickedItem = event.target
         disableButton(clickedItem)
         letterClicked = clickedItem.innerText
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
        } else {
             printMsg.innerText ='Incorrect! Try Again!'
             isGameOver()
             incorrectTally++
             moveCounter(maxNumberGuesses, incorrectTally)
        }
     })
    })
}
playerGuess()

//show the corrrectly guessed letters to the players 
const updateDisplayLetters = () => {
    blankSpaces.innerHTML = `${wordSpaces}`
}


//win loss logic and render messages
const isGameOver = () => {
    if (incorrectTally >= maxNumberGuesses && wordSpaces.includes('_') != false) {
        alphabetCont.style.display = 'none'
        blankSpaces.innerText = `You Lose, the word was ${randomWord}`
        printMsg.style.display ='none'
        newGame.style.display ='flex'
        
    }
    if(correctGuessedLetters.length === randomWord.length || randomWord === wordSpaces) {
        alphabetCont.style.display = 'none'
        blankSpaces.innerText = `You win! the word was ${randomWord}! Play again?`
        printMsg.style.display ='none'
        newGame.style.display ='flex'
    } 
    
}

//Play Again Function
const playAgain = () => {
    document.reload 
    incorrectTally = 0
}

//Event Listeners 
startGame.addEventListener('click', beginGame)
newGame.addEventListener('click', playAgain)