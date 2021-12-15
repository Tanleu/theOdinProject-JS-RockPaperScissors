let linkedChoice = function(choice, next, img_link){
    this.img_link = img_link;
    this.choice = choice;
    this.next = next;
}

let arrChoice = [new linkedChoice("rock", "paper", "https://www.pinclipart.com/picdir/big/536-5360218_rock-paper-scissors-clipart-png-download-paper-rock.png"), 
                 new linkedChoice("paper", "scissor", "https://www.pinclipart.com/picdir/big/536-5360310_transparent-rock-paper-scissors-clipart-rock-paper-scissors.png"),
                 new linkedChoice("scissor", "rock", "https://www.pinclipart.com/picdir/big/536-5360227_scissors-hand-rock-paper-scissors-png-clipart.png")];

let computerPlay = () => {
    let random = Math.floor(Math.random()*(2 - 0 + 1));
    return arrChoice[random];
}

let user_decision;
let round = 0;
let userScore = 0;
let computerScore = 0;

let updateTotalResult = (userScore, computerScore) => {
    let userResultDiv = document.querySelector("#body-total-result-player");
    let computerResultDiv = document.querySelector("#body-total-result-computer");

    userResultDiv.firstElementChild.nextElementSibling.textContent = userScore;
    computerResultDiv.firstElementChild.nextElementSibling.textContent = computerScore;
}

const userCurrentResultDiv = document.querySelector("#result-user-choice");
const computerCurrentResultDiv = document.querySelector("#result-computer-choice");

let updateCurrentResult = (userSrcImg, computerSrcImg) => {
    let userImg = document.createElement("img");
    userImg.src = userSrcImg;

    let computerImg = document.createElement("img");
    computerImg.src = computerSrcImg;

    userCurrentResultDiv.appendChild(userImg);
    computerCurrentResultDiv.appendChild(computerImg);
}

let clearCurrentResult = () => {
    if(userCurrentResultDiv.hasChildNodes()) userCurrentResultDiv.lastElementChild.remove();
    if(computerCurrentResultDiv.hasChildNodes()) computerCurrentResultDiv.lastElementChild.remove();
    updateTotalResult(userScore, computerScore)
    let roundMessage = document.querySelector("#round");
    roundMessage.textContent = "ROUND " + (round + 1).toString();
}


function playRound(userChoiceImgSrc, userPlay){
    clearCurrentResult();
    let computerPlay1 = computerPlay();
    if(computerPlay1.choice == userPlay){
        alert("Both of you are drawed");
    }
    else if (computerPlay1.next == userPlay){
        userScore++;
        round++;
        alert("Yeayyyy! You 're the winner");
    }
    else {
        computerScore++;
        round++;
        alert("Try one more time");
    }

    updateCurrentResult(userChoiceImgSrc, computerPlay1.img_link);
    updateTotalResult(userScore, computerScore);

    if(round == 5){
        if(userScore >= 3) {
            alert("The world is saved! You are the god!!!");
            playAgain();
        }
        else {
            playAgain();
        }

    }
}

let playAgain = () => {
    if(confirm("Oh noooooo! Is it the end of the world? try one more time??")){
        round = 0;
        userScore = 0;
        computerScore = 0;
        clearCurrentResult();
    }else{
        window.close();
    }
}

const choiceDiv = document.querySelector("#body-three-option");
arrChoice.forEach(x => {
    let div = document.createElement("div");
    div.classList.add("option");
    div.setAttribute('name', x.choice)
    
    let choice = document.createElement("img");
    choice.src = x.img_link;
    choice.alt = x.choice;

    div.appendChild(choice);
    
    choiceDiv.appendChild(div);
});

const choices = document.querySelectorAll(".option");
choices.forEach(x => 
    x.addEventListener('click', () => {
        user_decision = x.getAttribute("name");
        imgPlay = x.firstElementChild.getAttribute("src");
        playRound(imgPlay, user_decision);
    })
)


