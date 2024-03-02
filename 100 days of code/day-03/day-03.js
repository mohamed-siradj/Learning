/*
let pss = document.getElementById('pss');
let car = ['a', 'b', 'c', '@', '$', '%', '&', '*', '!', '?', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let randomNumber = Math.floor(Math.random() * 10 ) + 10;
let password = [];
let passFun = function generatePass() {
  for (let i = 0; i < 11; i++) {
    password.push(car[randomNumber]);
  }
  return password.join("");
};

pss.textContent(generatePass());
*/
// select element by id 
let pss = document.getElementById('pss');
let passButton = document.getElementById('pass');
// array to get the chracters 
let car = ['a', 'b', 'c', '@', '$', '%', '&', '*', '!', '?', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// genereate password function
function generatePass() {
  // the idea is to push the slected charaters to another array 
  let password = [];
  for (let i = 0; i < 11; i++) {
    // random number between 1 and legnth of car array
    let randomNumber = Math.floor(Math.random() * car.length);
    // push the slected characters in this array
    password.push(car[randomNumber]);
  }
  // use join method to concat the values and make a string 
  return password.join("");
}
// call the function 
// use event to make the password abdate after every click
passButton.addEventListener('click', function() {
  pss.textContent = generatePass();
});
