
function numToAnswer(num) {
    if (num === 0) return "rock";
    else if (num === 1) return "paper";
    else if (num === 2) return "scissors";
    else return "none";
}

function answerToNum(answer) {
    if (answer === "rock") return 0;
    else if (answer === "paper") return 1;
    else if (answer === "scissors") return 2;
    else return -1;
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3); // 0 -> 2
}

let playerScoreNum = 0;
let computerScoreNum = 0;
let gameReset = false ;

function playRound(humanChoice, computerChoice) {

    const playerScoreDisplay = document.querySelector(".player-score");
    const computerScoreDisplay = document.querySelector(".computer-score");
    const headerText = document.querySelector(".header-text-top");
    const subText = document.querySelector(".header-text-bottom");
    if(gameReset)
    {
        playerScoreNum = 0;
        computerScoreNum = 0;
        gameReset=false;
    }
    let outcome,yap,str1,str2;
    if (humanChoice == -1) {
        console.log("Invalid round!");
    }
    else {
        let result = (humanChoice - computerChoice + 3) % 3;
        if (result == 0) {
            console.log("Tie");
            outcome = "Tied round";
            headerText.style.color="gray";
        }
        else if (result == 1) {
            console.log("You win");
            outcome = "You won this round";
            playerScoreNum++;
            headerText.style.color="green";
        }
        else if (result == 2) {
            console.log("You lose");
            outcome = "You lost the round";
            computerScoreNum++;
            headerText.style.color="red";
        }
    }

    console.log("You chose: " + numToAnswer(humanChoice));
    console.log("The computer chose: " + numToAnswer(computerChoice));
    console.log("Scores: " + "You: " + playerScoreNum + " | " + "Computer: " + computerScoreNum);

    
    yap="You chose: " + numToAnswer(humanChoice) +"   |   "+"The computer chose: " + numToAnswer(computerChoice);
 
 
    if(playerScoreNum === 5)
    {
        outcome="You Won The Game";
        yap = "Congrats on winning" + ", To play again just press any button";
        gameReset = true ;
    }
    else if(computerScoreNum ===5)
    {
        outcome="You Lost The Game";
        yap = "It was all luck anyway" + ", To play again just press any button";
        gameReset =true ;
    }

    playerScoreDisplay.textContent = playerScoreNum;
    computerScoreDisplay.textContent = computerScoreNum;
    headerText.textContent = outcome;
    subText.textContent = yap;
}


function playGame() {
    for (let i = 1; i <= 5; i++) {
        console.log("Round " + i);
        playRound(getHumanChoice(), getComputerChoice());
        console.log('');
    }


    console.log("Game Over");
}

//playGame();





    const btn = document.querySelector("#buttons-list");
    btn.addEventListener("click",(item)=>{

        if(item.target.tagName === "BUTTON"){
            playRound(answerToNum(item.target.id),getComputerChoice());
        }
    });