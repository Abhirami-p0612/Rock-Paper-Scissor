let choices = ["rock", "paper", "scissor"]
let timer = null

let startEl = document.getElementById("start-el")
let compEl = document.getElementById("comp-el")
let playerEl = document.getElementById("player-el")

let playerChoice = null

function selectChoice(choice) {
    playerChoice = choice
    startEl.textContent = "Ready! Click Start"
}

function startGame() {

    if (!playerChoice) {
        startEl.textContent = "Choose first!"
        return
    }

    if (timer) return

    let count = 3
    startEl.textContent = count

    timer = setInterval(function () {
        count--

        if (count > 0) {
            startEl.textContent = count
        } else {
            clearInterval(timer)
            timer = null

            startEl.textContent = "GO!"

            let compChoice = choices[Math.floor(Math.random() * 3)]

            compEl.src = compChoice + ".png"
            playerEl.src = playerChoice + ".png"

            showResult(playerChoice, compChoice)

            playerChoice = null

            setTimeout(() => {
                startEl.textContent = "Choose again!"
            }, 1000)
        }
    }, 1000)
}

function showResult(player, computer) {

    if (player === computer) {
        startEl.textContent = "Draw 🤝"
    }
    else if (
        (player === "rock" && computer === "scissor") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissor" && computer === "paper")
    ) {
        startEl.textContent = "You Win 🎉"
    }
    else {
        startEl.textContent = "Computer Wins 😢"
    }
}

function stopGame() {
    if (timer) {
        clearInterval(timer)
        timer = null
    }
    playerChoice = null
    startEl.textContent = "Game Stopped"
}
