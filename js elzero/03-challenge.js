let a = 'Elzero web school' ;


console.log(a.charAt(2).toUpperCase() + a.slice(3, 7)); // Zero

console.log(a.charAt(13).toUpperCase().repeat(8)); //HHHHHHHH

console.log(a.split(" ", 1));
console.log(a.substr(0,1).toLocaleLowerCase() + a.substr(1, a.length - 2).toUpperCase() + a.substr(-1).toLocaleLowerCase());