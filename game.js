//Start with returning a function called getComputerChoice 
//Which will return a randomly return rock,paper, or scissors
//Firt I'll use the math random and multiply it by 3 functions to 
// return a rounded value from 0 to 3 and then I will math.floor 
// it to round it to a whole number
//I will then use if else statements to return a either
//rock, paper or scissors depending on which value is produced

function getComputerChoice(){
  let result =  Math.floor(Math.random()*3);
  
  if(result === 1){
    return "rock";
  }else if(result === 2){
    return "paper";
  }else{
    return "scissors";
  }

}

//Works good so far

//For this next function I am going to compare the two selections and return the results
function playRound(playerSelection, computerSelection){
if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
    return "Tie!";
}else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper"){
    return "You Lose!";
}else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors"){
    return "You Win!";
}else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors"){
    return "You Lose!";
}else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock"){
    return "You Win!";
}else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock"){
    return "You Lose!";
}else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"){
    return "You Win!";
}


}
//Works good so far



//In this next function I am going to call the playRound fuction 5 times using a for loop
//I am going to set two score variables and add 1 each round depending on who won
//I will return the results

function game(){
    let userScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
    let choice = prompt("Please enter rock, paper, or scissors!");

    if(choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" ||
     choice.toLowerCase() === "scissors"){
        let computerSelection = getComputerChoice();
        let round = playRound(choice, computerSelection);
       
    if(round === "You Win!"){
        userScore ++;
        console.log("You win this round!")
    }else if(round === "You Lose!"){
        computerScore ++;
        console.log("You lost this round!")
    }else{
        console.log("Tie!");
    }
     }else{
        return "Please enter rock, paper, or scissors!"
     }

    }
    if(userScore > computerScore)
    {
        return "You win with a score of " + userScore + " while the computer had " + computerScore;
    }else if(computerScore > userScore){
        return "You lost with a score of " + userScore + " while the computer had " + computerScore;
    }else{
        return "Tie!";
    }

   
}
console.log(game());
