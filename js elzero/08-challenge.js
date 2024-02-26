/* 
let names = function(...name) {
  return `String [${name.join("] , [")}] => Done!`;
}
*/
let names = (...name) =>`String [${name.join("] , [")}] => Done!`;


console.log(names("mohamed", "siradj", "Adel", "Moumen")); 


let myNnum = [10, 20, 50, 60];
let calc = (one, two, ...num) => /* ??? */ ;

console.log(calc(10, 20,&& /* ??? */));