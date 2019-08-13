// Here we're telling node to import the prompt-sync module because we're gonna be using it
// We assign it to the `prompt` variable - that's how we can use the module
const prompt = require('prompt-sync')();

// This line prompts the user "how many you want?", and stores the user's input in the `result` variable
const result = prompt('how many you want? ');

// This line converts `result` into an integer (`prompt` always returns a string) and stores it in the `intResult` variable
const intResult = parseInt(result);

// This is just good old JavaScript, nothing fancy!
if (intResult > 5) {
  console.log('Wow its a lot');
} else {
  console.log('no');
}
