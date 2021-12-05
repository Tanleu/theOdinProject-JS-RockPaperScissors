function computerPlay() {
    let linkedChoice = function(choice, next){
        this.choice = choice;
        this.next = next;
    }
    
    let arrChoice = [new linkedChoice("rock", "paper"), 
                     new linkedChoice("paper", "scissor"),
                     new linkedChoice("scissors", "rock")];

    let random = Math.floor(Math.random()*(2 - 0 + 1));
    return arrChoice[random];
}

function playRound(){
    let userPlay = prompt("Enter your play(Rock, Paper, Scissors :").toLowerCase();
    let computerPlay1 = computerPlay();
    alert('You chooses ' + userPlay+ '| Computer shows ' + computerPlay1.choice);
    if(computerPlay1.choice == userPlay){
        alert("Both of you are drawed");
    }
    else if (computerPlay1.next == userPlay){
        alert("Yeayyyy! You 're the winner");
    }
    else {
        alert("Try one more time");
    }
}

playRound();

