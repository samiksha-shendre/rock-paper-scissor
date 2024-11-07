let your_score = document.querySelector(".your_num_score");
let comp_score = document.querySelector(".comp_num_score");
let result = document.querySelector(".result");
let images = document.querySelectorAll(".img");
let values = ["rock", "paper", "scissor"];

let computerScore = 0;
let yourScore = 0;

for (let image of images) {
    image.addEventListener("click", function() {
        let randomIdx = Math.floor(Math.random()*3);
        let compValue = values[randomIdx];
        let yourValue = image.getAttribute("id");
        
        console.log(`computer is ${compValue}`);
        console.log(`you are ${yourValue}`);

        if (compValue == "rock") {
            if (yourValue == "rock") {
                result.innerText = "Both get rock. Game is Tie.";
                tie();
            } else if (yourValue == "paper") {
                result.innerText = "You won! Your paper beats rock.";
                yourScore++;
                youScore();
            } else if (yourValue == "scissor") {
                result.innerText = "You Lost! Rock beats scissor";
                computerScore++;
                comScore();
            }
        } else if (compValue == "paper") {
            if (yourValue == "rock") {
                result.innerText = "You lost! Paper hides your rock.";
                computerScore++;
                comScore();
            } else if (yourValue == "paper") {
                result.innerText = "Both get paper. Game is Tie.";
                tie();
            } else if (yourValue == "scissor") {
                result.innerText = "You win! Your scissor cuts paper.";
                yourScore++;
                youScore();
            }
        } else if (compValue == "scissor") {
            if (yourValue == "rock") {
                result.innerText = "You win! Your rock beats scissor.";
                yourScore++;
                youScore();
            } else if (yourValue == "paper") {
                result.innerText = "You lost. scissor cuts your paper.";
                computerScore++;
                comScore();
            } else if (yourValue == "scissor") {
                result.innerText = "Both get scissor. Game is Tie.";
                tie();
            }
        }
    });
}

function youScore () {
    your_score.innerText = yourScore;
    result.style.backgroundColor = "green";
}
function comScore () {
    comp_score.innerText = computerScore;
    result.style.backgroundColor = "red";
}
function tie () {
    result.style.backgroundColor = "black";
}
