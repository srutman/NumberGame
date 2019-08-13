const prompt = require('prompt-sync')();

// State
let lives = 3;

//
// Define functions before you use them!
//

const goLeft = () => {
  console.log('Looks like you went left.');

  // Nooooo
  console.log('Oh no! You fell into a pit. Try again');
  console.log();
  
  // Decrease lives by 1 and go back to the beginning of the game
  lives = lives - 1;
  startGame();
};

const goRight = () => {
  console.log('Looks like you went right.');

  // Yee
  console.log('Phew! No pits here.');
  console.log('Game over. You won!');

  // And what happens when you go right?
  // The limits are up to your ~imagination~
};

//
// Start of game code
//

const startGame = () => {
  // Check that we have lives left before we start
  if (lives === 0) {
    console.log('You died :( Bye!');
    return;
  }

  console.log('======================================');
  console.log('= Hey! Welcome to a game lol.=========');
  console.log(`= You have ${lives} lives remaining.=========`);
  console.log('======================================');
  console.log();

  console.log('You come to a fork in the road.');
  let leftOrRight = prompt('Do you go left or right? [left/right] ');

  if (leftOrRight === 'left') {
    goLeft();
  } else if (leftOrRight === 'right') {
    goRight();
  }
};

// Start game for the first time!
startGame();
