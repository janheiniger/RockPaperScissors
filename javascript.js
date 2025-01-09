function getComputerChoice() {
    let randumNumber = Math.floor(Math.random() * 3)

    const message = "Computer: "

    const rock = "Rock"
    const paper = "Paper"
    const scissors = "Scissors"

    if (randumNumber === 0) {
        console.log(message + rock)
        return rock
    } else if (randumNumber === 1) {
        console.log(message + paper)
        return paper
    } else if (randumNumber === 2) {
        console.log(message + scissors)
        return scissors
    }
}

function getHumanChoice() {
    let answer = prompt("rock, paper or scissors?").toLowerCase()

    const message = "Player: "

    const rock = "Rock"
    const paper = "Paper"
    const scissors = "Scissors"

    while (true) {
        if (answer === "rock") {
            console.log(message + rock)
            return rock
        } else if (answer === "paper") {
            console.log(message + paper)
            return paper
        } else if (answer === "scissors") {
            console.log(message + scissors)
            return scissors
        }  else {
            answer = prompt("Ungültige Eingabe, versuche nochmals!").toLowerCase()
        }
    }
}


function playRound(humamChoice, computerChoice) {
    const lose = "You lose!"
    const win = "You win!"

    const rock = "Rock"
    const paper = "Paper"
    const scissors = "Scissors"


    if (humamChoice === computerChoice) {
        return "Draw!"
    } else if (humamChoice === rock) {
        if (computerChoice === paper) {
            return lose
        } else if (computerChoice === scissors) {
            return win
        }
    } else if (humamChoice === paper) {
        if (computerChoice === rock) {
            return win
        } else if (computerChoice === scissors) {
            return lose
        }
    } else if (humamChoice === scissors) {
        if (computerChoice === rock) {
            return lose
        } else if (computerChoice === paper) {
            return win
        }
    }
}

function playGame() {
    const lose = "You lose!"
    const win = "You win!"

    let humanScore = 0
    let computerScore = 0


    let zaehler = 0

    while (zaehler < 5) {


        let decision = (playRound(getHumanChoice(), getComputerChoice()))


        console.log(decision)

        if (decision === win) {
            humanScore++
        } else if (decision === lose) {
            computerScore++
        }
        zaehler++
    }
    alert("Humanscore: " + humanScore + "\nComputerscore: " + computerScore)

        if (humanScore === computerScore) {
            alert("The Game ends with a Draw!")
        } else if (humanScore > computerScore) {
            alert("You won the Game!")
        } else if (humanScore < computerScore) {
            alert("You lost the Game!")
        }

}


playGame()






