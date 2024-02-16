//---------- first assignement ----------
let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

//min integer value
let min = Math.min(a, b, c, d);
console.log(Math.trunc(min));

// return d with 4 methods
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(d.toFixed(0));

// a + d one time to retun 1000
console.log(Math.trunc(min) + a * 100 - 2);


//---------- Second assignement ----------
 // Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(100 * 1000); // 100000
console.log(1e5); // 100000
console.log(50000 + 50000); // 100000
console.log(Math.trunc(100000.10)); // 100000
console.log(parseInt("100000")); // 100000
console.log(100000.33.toFixed(0)); // 100000
console.log(parseInt(10) * 1e4); // 100000
console.log(1e4 * 10); // 100000
console.log(+"100000"); // 100000
console.log(+"10" * 10000); // 100000

//---------- Third assignement ----------