
const choices = ['rock', 'paper', 'scissors']
const playerChoice = document.getElementById('player-choice')
const opponentChoice = document.getElementById('opponent-choice')
const resultDisplay = document.getElementById('result')

let score1 = 0
let score2 = 0

function game(choice) {

    const computerChoice = choices[Math.floor(Math.random() * 3)]

    let result = '';

    if (choice === computerChoice) {
        result = "TIE"
    } else {
        switch (choice) {
            case "rock":
                result = (computerChoice === 'scissors') ? 'YOU WIN!' : 'YOU LOSE'
                break;
            case "paper":
                result = (computerChoice === 'rock') ? 'YOU WIN!' : 'YOU LOSE'
                break;
            case "scissors":
                result = (computerChoice === 'paper') ? 'YOU WIN!' : 'YOU LOSE'
                break;
        }
    }
    if (computerChoice === "scissors") {
        opponentChoice.textContent = `OPPONENT: ✂️`
    }
    if (computerChoice === 'paper') {
        opponentChoice.textContent = `OPPONENT: 📜`
    }

    if (computerChoice === 'rock') {
        opponentChoice.textContent = `OPPONENT: ⛰️`
    }

    if (choice === "scissors") {
        playerChoice.textContent = `YOU: ✂️`
    }
    if (choice === 'paper') {
        playerChoice.textContent = `YOU: 📜`
    }

    if (choice === 'rock') {
        playerChoice.textContent = `YOU: ⛰️`
    }
    resultDisplay.textContent = `${result}`

    if (result === 'YOU WIN!') {
        const playerScore = document.getElementById('player-score')
        score1++
        playerScore.textContent = score1
    }
    if (result === 'YOU LOSE') {
        const opponentScore = document.getElementById('opponent-score')
        score2++
        opponentScore.textContent = score2
    }
}