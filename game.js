//Start with returning a function called getComputerChoice 
//Which will return a randomly return rock,paper, or scissors
//Firt I'll use the math random and multiply it by 3 functions to 
// return a rounded value from 0 to 3 and then I will math.floor 
// it to round it to a whole number
//I will then use if else statements to return a either
//rock, paper or scissors depending on which value is produced

let wins = 0;
    let computerScore = 0;


const btnOne = document.querySelector("#buttonOne");

btnOne.addEventListener('click', function(e){
    let rock = game("rock");
    console.log(rock);

    if(rock.slice(0,8) === "You Win!"){
        addToScore();
    }else if(rock.slice(0,9) === "You Lose!"){
        addToComputerScore();
    }


    if(wins > 4 || computerScore > 4){
        console.log(results());
    }
});



const btnTwo = document.querySelector("#buttonTwo");

btnTwo.addEventListener('click', function(e){
    let paper = game("paper");
    console.log(paper);
    if(paper.slice(0,8) === "You Win!"){
        addToScore();
    }else if(paper.slice(0,9) === "You Lose!"){
        addToComputerScore();
    }

    if(wins > 4 || computerScore > 4){
        console.log(results());
    }
});



const btnThree = document.querySelector("#buttonThree");

btnThree.addEventListener('click', function(e){
    let scissors = game("scissors");
    console.log(scissors);
    if(scissors.slice(0,8) === "You Win!"){
        addToScore();
    }else if(scissors.slice(0,9) === "You Lose!"){
        addToComputerScore();
    }

    if(wins > 4 || computerScore > 4){
        console.log(results());
    }
});






/*function incrementButton(){
    let element = document.getElementById("playerScore");
    let value = element.textContent;
    value++;
    console.log(value);
}
*/






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
    return "You Lose! Paper beats Rock!";
}else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors"){
    return "You Win! Rock beats Scissors!";
}else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors"){
    return "You Lose! Scissors beats Paper";
}else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock"){
    return "You Win! Paper beats Rock";
}else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock"){
    return "You Lose! Rock beats Scissors";
}else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"){
    return "You Win! Scissors beats Paper!";
}


}
//Works good so far



//In this next function I am going to call the playRound fuction 5 times using a for loop
//I am going to set two score variables and add 1 each round depending on who won
//I will return the results

function game(choice){
    
    
    console.log("Please enter rock, paper, or scissors!");
    
    if(choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" ||
     choice.toLowerCase() === "scissors"){
        let computerSelection = getComputerChoice();
        let round = playRound(choice, computerSelection);
       
    if(round.slice(0,8) === "You Win!"){
        
        return round;
        
        console.log(round)
    }else if(round.slice(0, 9) === "You Lose!"){
        
        return round;
    }else{
        return "Tie!";
        
    }
     }else{
        return "Please enter rock, paper, or scissors!"
     }

    
        


   
}

function results(){
    if(wins > computerScore)
    {
        return "You win with a score of " + wins + " while the computer had " + computerScore;
    }else if(computerScore > userScore){
        return "You lost with a score of " + wins + " while the computer had " + computerScore;
    }else{
        return "Tie!";
    }
}

function addToScore(){
    wins++;
    document.getElementById("score").textContent = wins;
}

function addToComputerScore(){
    computerScore++;
    document.getElementById("computerScore").textContent = computerScore;
}
//Reviting Rock button and functions work!!!!!