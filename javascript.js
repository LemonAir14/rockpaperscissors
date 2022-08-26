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
 



