let zero = 0;
let counter = 3;

let my = ["Ahmed","Mazero","Elham","Osama","Gamal","Ameer"];

my.reverse().splice(zero, --counter);
console.log(my);

console.log(my.slice(++zero, ++counter));

console.log(my[1].slice(--zero, --counter) + my[2].slice(counter));
r = my[2].slice(4,5);
O = my[2].slice(5).toUpperCase();

console.log(r + O);