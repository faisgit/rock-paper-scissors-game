const userDisplay = document.getElementById("display-user-choices")
const computerDisplay = document.getElementById("display-computer-choices")
const displayResult = document.getElementById("display-result")
let possibleChoices = document.querySelectorAll("button")
let userChoices 
let computerChoices
let result 
possibleChoices.forEach(possibleChoice => {
   possibleChoice.addEventListener('click' ,(btn) => {
    // user Choices 
    userChoices = btn.target.id
    if (userChoices === 'rock') {
        userDisplay.src = './images/rock.png'
        userDisplay.classList = ('h-10 w-10')
    }
    if (userChoices === 'paper') {
        userDisplay.src = './images/paper.png'
        userDisplay.classList = ('h-10 w-10')
    }
    if (userChoices === 'scissors') {
        userDisplay.src = './images/Scissors.png'
        userDisplay.classList = ('h-10 w-10')
    }

    genrateComputerchoice()
    gernrateResult()
   })
})

function genrateComputerchoice(){
    const randomChoices = Math.floor(Math.random() * 3) + 1
    if (randomChoices === 1) {
        computerChoices = 'rock'
        computerDisplay.src = './images/rock.png'
        computerDisplay.classList =('h1-10 w-10')
    }
    if (randomChoices === 2) {
        computerChoices = 'paper'
        computerDisplay.src = './images/paper.png'
        computerDisplay.classList = ('h-10 w-10')
    }
    if (randomChoices === 3) {
        computerChoices = 'scissors'
        computerDisplay.src = './images/Scissors.png'
        computerDisplay.classList = ('h-10 w-10')
    }
}

function gernrateResult(){
    if (computerChoices === userChoices) {
        displayResult.src = './images/draw.png'
        displayResult.classList = ('h-10 w-10')
    }

    if (computerChoices === 'rock' &&  userChoices === 'paper') {
        displayResult.src = './images/won.png'
        displayResult.classList = ('h-10 w-10')
    }

    if (computerChoices === 'rock' &&  userChoices === 'scissors') {
        displayResult.src = './images/loss.png'
        displayResult.classList = ('h-10 w-10')
    }
    
    if (computerChoices === 'paper' &&  userChoices === 'scissors') {
        displayResult.src = './images/won.png'
        displayResult.classList = ('h-10 w-10')
    }

    if (computerChoices === 'paper' &&  userChoices === 'rock') {
        displayResult.src = './images/loss.png'
        displayResult.classList = ('h-10 w-10')
    }

    if (computerChoices === 'scissors' &&  userChoices === 'rock') {
        displayResult.src = './images/won.png'
        displayResult.classList = ('h-10 w-10')
    }

    if (computerChoices === 'scissors' &&  userChoices === 'paper') {
        displayResult.src = './images/loss.png'
        displayResult.classList = ('h-10 w-10')
    }
}