let choice = ['Rock','Paper','Scissors']

function getcomputerselection() {
    return choice[Math.floor(Math.random()*3)]
}
let computerselection = getcomputerselection()
let playerselection = prompt ("Rock,Paper or Scissors?")

function finalplayerselection(playerselection) {
    return (playerselection.substring(0,1)).toUpperCase() + (playerselection.substring(1)).toLowerCase()
}
  console.log(`The Player Chose ${finalplayerselection(playerselection)} and the computer chose ${computerselection}`)

function playround(computerselection, playerselection){
  if (finalplayerselection(playerselection) == computerselection){return "This round is a draw!"} else if (finalplayerselection(playerselection) == "Rock") {return Rock()} else if (finalplayerselection(playerselection) == "Paper") {return Paper()} else if (finalplayerselection(playerselection) == "Scissors") {return Scissors()} else {return "You might've mispelled your choice."}
}

 function Rock(){
    if (computerselection == "Scissors") {return "Rock beats Scissors so the Player wins!"} else if (computerselection == "Paper") {return "Rock loses to Paper so the Computer wins!"}
 }

 function Paper(){
    if (computerselection == "Rock") {return "Paper beats Rock so the Player wins!"} else if (computerselection == "Scissors") {return "Paper loses to Rock so the Computer wins!"}
 }

 function Scissors(){
    if (computerselection == "Paper") {return "Scissors beats Paper so the Player wins!"} else if (computerselection == "Rock") {return "Scissors loses to Rock so the Computer wins!"}
 }
 
 console.log(playround(computerselection, playerselection))
