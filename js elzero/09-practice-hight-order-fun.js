// swap caracters 
let swapCaracter = "moHamedSirDJ";

let sw = swapCaracter.split("").map(function(ele) {
 return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
}).join("");

console.log(sw);

// invert numbers
let invertNumber = [10, -5, 12, -4, -16 ];

let neg = invertNumber.map(function(ele){
  return -ele;
});
console.log(neg);

// ignor numbers
let neglegerNumbers = 'moh0a7med';

let name = neglegerNumbers.split("").map(function(ele){
  return isNaN(parseInt(ele)) ? ele : "";
}).join("");

console.log(name);
