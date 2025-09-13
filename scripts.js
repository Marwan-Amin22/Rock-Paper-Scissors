
function numToAnswer(num) {
    if (num === 0) return "rock";
    else if (num === 1) return "paper";
    else if (num === 2) return "scissor";
    else return "none";
}

function answerToNum(answer) {
    if (answer === "rock") return 0;
    else if (answer === "paper") return 1;
    else if (answer === "scissor") return 2;
    else return -1;
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3); // 0 -> 2
}

function getHumanChoice() {
    let str = prompt("Enter: rock - paper - scissors");

    str = String(str).toLowerCase();
    return answerToNum(str);

}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice == -1) {
        console.log("Invalid round!");
    }
    else {
        let result = (humanChoice - computerChoice + 3) % 3;
        if (result == 0) console.log("Tie");
        else if (result == 1) {
            console.log("You win");
            humanScore++;
        }
        else if (result == 2) {
            console.log("You lose");
            computerScore++;
        }
    }

    console.log("You chose: " + numToAnswer(humanChoice));
    console.log("The computer chose: " + numToAnswer(computerChoice));
    console.log("Scores: " + "You: " + humanScore + " | " + "Computer: " + computerScore);
}


function playGame() {
    for (let i = 1; i <= 5; i++) {
        console.log("Round " + i);
        playRound(getHumanChoice(), getComputerChoice());
        console.log('');
    }


    console.log("Game Over");
}

playGame();