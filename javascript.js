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

  if (finalplayerselection(playerselection) == computerselection){console.log("This round is a draw!")} else if (finalplayerselection(playerselection) == "Rock") {console.log(Rock())} else if (finalplayerselection(playerselection) == "Paper") {console.log(Paper())} else if (finalplayerselection(playerselection) == "Scissors") {console.log(Scissors())}

 function Rock(){
    if (computerselection = "Scissors") {console.log("Rock beats Scissors so the Player wins!")} else if (computerselection = "Paper") {console.log("Rock loses to Paper so the Computer wins!")}
 }

 function Paper(){
    if (computerselection = "Rock") {console.log("Paper beats Rock so the Player wins!")} else if (computerselection = "Scissors") {console.log("Paper loses to Rock so the Computer wins!")}
 }

 function Scissors(){
    if (computerselection = "Paper") {console.log("Scissors beats Paper so the Player wins!")} else if (computerselection = "Rock") {console.log("Scissors loses to Rock so the Computer wins!")}
 }
 
