// console.log(parseInt(Math.random() * 100 + 1))
let randomNumber = (parseInt(Math.random() * 100 + 1))

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const prevGuesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startAgain = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuesses = 1
let playGame = true;

if(playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        // console.log(guess)
        validateGuess(guess)
    })
}
function validateGuess(guess) {
    if(isNaN(guess)) {
        alert('Please insert valid number')
    }
    else if(guess < 1) {
         alert('Please insert number greater than zero')
    }
    else if(guess > 100) {
         alert('Please insert valid number less than 100')
    }
    else {
        prevGuess.push(guess)
        if(numGuesses === 11) {
            displayGuess(guess)
            displayMsg(`Game over! The number was ${randomNumber}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber) {
        displayMsg(`You are right! `)
        endGame()
    }
    else if(guess < randomNumber) {
        displayMsg(`Number is too Low `)
    }
    else displayMsg(`Number is too high`)
}

function displayGuess(guess) {
    userInput.value = ''
    prevGuesses.innerHTML += `${guess}, `
    numGuesses++
    lastResult.innerHTML = `${11 - numGuesses}`
}

function displayMsg(message) {
    lowOrHigh.innerHTML = `<h2>${message}`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startAgain.appendChild(p)
    playGame = 0
    newGame()
}

function newGame() {
    const newGamebtn = document.querySelector('#newGame')
    newGamebtn.addEventListener('click', function(e) {
    randomNumber = (parseInt(Math.random() * 100 + 1))
    prevGuess = []
    numGuesses = 1
    prevGuesses.innerHTML = ''
    lastResult.innerHTML = `${11 - numGuesses}`
    userInput.removeAttribute('disabled')
    startAgain.removeChild(p)
    playGame = 1
    })
}




