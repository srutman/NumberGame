const prompt = require('prompt-sync')();
let lives = 2

const Start = () => {
console.log('if you are reading this, I successfully coded a game! welcome to the simplest game in the world!')
let numberchoice = prompt('choose a number between 0-100')
if (numberchoice %2 === 0){
    console.log('great choice, you win! even numbers rock :)')
}else {console.log('you failed! odd numbers suck :( try again!')


}


}
Start();
