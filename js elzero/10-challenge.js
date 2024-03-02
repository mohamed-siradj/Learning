let array = ["moh", 'siradj', 'adel', 'abdelrazek'];

console.log(array);
let check = array.reduce(function (acc, current) {
  console.log(acc);
  console.log(current);
  console.log("#########");
return acc.length > current.length ? acc : current;
})

console.log(check);

// acc is the result of the compare or what ever is the relation bettween acc & current

let arr = ['m','@','@','@','o','@','h'];

let nameCheck = arr.filter(function (ele) {
  // Tab to edit
  return !ele.startsWith('@');
}).reduce(function (acc, current) {
  // Tab to edit
  return `${acc}${current}`;
})

console.log(nameCheck);