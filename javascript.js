let choice = ['Rock','Paper','Scissors']

function getcomputerselection() {
    return choice[Math.floor(Math.random()*3)]
}

function finalplayerselection(playerselection) {
    return (playerselection.substring(0,1)).toUpperCase() + (playerselection.substring(1)).toLowerCase()
}

let playerscore = 0
let computerscore = 0

function playround(){
  let playerselection = prompt ("Rock,Paper or Scissors?")
  let computerselection = getcomputerselection()
  console.log(`The Player Chose ${finalplayerselection(playerselection)} and the computer chose ${computerselection}`)
  if (finalplayerselection(playerselection) == computerselection){return "This round is a draw!"} else if (finalplayerselection(playerselection) == "Rock") {return Rock()} else if (finalplayerselection(playerselection) == "Paper") {return Paper()} else if (finalplayerselection(playerselection) == "Scissors") {return Scissors()} else {return "You might've mispelled your choice."}
  
  function Rock(){
    if (computerselection == "Scissors") {return "Rock beats Scissors so the Player wins!"} else if (computerselection == "Paper") {return "Rock loses to Paper so the Computer wins!"}
 }

 function Paper(){
    if (computerselection == "Rock") {return "Paper beats Rock so the Player wins!"} else if (computerselection == "Scissors") {return "Paper loses to Rock so the Computer wins!"}
 }

 function Scissors(){
    if (computerselection == "Paper") {return "Scissors beats Paper so the Player wins!"} else if (computerselection == "Rock") {return "Scissors loses to Rock so the Computer wins!"}
 }
 
}

 for (let i = 0; i < 5; i++){
    console.log(playround())
 }

 console.log(`The Player score is ${playerscore} and the Computer score is ${computerscore}.`)
 if (playerscore > computerscore) {console.log("The Player wins this game!")} else if (playerscore < computerscore) {console.log("The computer wins this game!")} else {console.log("This game is a draw!")}
