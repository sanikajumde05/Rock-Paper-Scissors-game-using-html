const startGameButton = document.getElementById("start-game");
const usernameInput = document.getElementById("username");
const gameSection = document.getElementById("game-section");
const welcomeSection = document.getElementById("welcome-section");
const playerNameDisplay = document.getElementById("player-name");
const playerNameScoreDisplay = document.getElementById("player-name-score");

const choices = document.querySelectorAll(".choice-btn");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");

const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

startGameButton.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    if (username) {
        playerNameDisplay.textContent = username;
        playerNameScoreDisplay.textContent = username;
        welcomeSection.classList.add("hidden");
        gameSection.classList.remove("hidden");
    } else {
        alert("Please enter your name to start the game.");
    }
});

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const playerChoice = choice.dataset.choice;
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);

        playerChoiceDisplay.textContent = getEmoji(playerChoice);
        computerChoiceDisplay.textContent = getEmoji(computerChoice);
        resultDisplay.textContent = result;

        if (result === "You win!") {
            playerScore++;
        } else if (result === "Computer wins!") {
            computerScore++;
        }

        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
    });
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) return "It's a tie!";
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "You win!";
    }
    return "Computer wins!";
}

function getEmoji(choice) {
    switch (choice) {
        case "rock":
            return "✊";
        case "paper":
            return "✋";
        case "scissors":
            return "✌️";
        default:
            return "";
    }
}