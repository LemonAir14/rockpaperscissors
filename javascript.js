let choice = ['Rock','Paper','Scissors']

function computerchoice() {
    return choice[Math.floor(Math.random()*3)]
}
console.log(computerchoice())

let playerchoice = prompt ("Rock,Paper or Scissors?")

