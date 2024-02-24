/* function showDetails(a = 'unkown', b = 'not defined',c) {
  // Tab to edit
  typeof a === 'string' && typeof b === 'number' && c === true ?
  console.log(`hello ${a} you are ${b}.you are able to hire`) :
  c === false ?
  console.log(`hello ${a} you are ${b}`):
  
  typeof a === 'string' &&  b === true && typeof c === 'number' ? 
  console.log(`hello ${a} you are ${c}.you are able to hire`) :
  b === false ? 
  console.log(`hello ${a} you are ${c}`) :
  
  typeof a === 'number' && typeof b === 'string' && c === true ?
  console.log(`hello ${b} you are ${a}.you are able to hire`) :
  c === false ?
  console.log(`hello ${b} you are ${a}`) :
  
  typeof a === 'number' && b === true && typeof c === 'string' ?
  console.log(`hello ${c} you are ${a}.you are able to hire`) :
  b === false ?
  console.log(`hello ${c} you are ${a}.you`) :
  
  a === true && typeof b === 'number' && typeof c === 'string' ?
  console.log(`hello ${c} you are ${b}.you are able to hire`) :
  a === false ?
  console.log(`hello ${c} you are ${b}`) :
  console.log('rani 3yan mdanya');
}

showDetails(20, 'moh', false);
*/
// hard T - T
function randomArg(a, b, c) {
  let name = 'moh';
  let age = 20;
  let apt = true;
  const arg = [a, b, c];
  for (i = 0; i < arg.length; i++) {
    if (typeof arg[i] === 'string') {
      name = arg[i];
    } else if (typeof arg[i] === 'number' ) {
      age = arg[i];
    } else if (typeof arg[i] === 'boolean') {
      apt = arg[i];
    }
  }
  if (apt === true) {
      console.log(`hello ${name} you are ${age}. apt`);
  } else {
      console.log(`hello ${name} you are ${age}`);
  }
}

randomArg("Adel", 40, false);

/*
function randomArg(a, b, c) {
  let name = 'moh';
  let age = 20;
  let apt = true; // Initialize apt to true, as you're using true || false which always results in true
  const args = [a, b, c]; // Corrected typo "lenght" to "length", and use const instead of let for args
  for (let i = 0; i < args.length; i++) { // Corrected the syntax in the for loop
    if (typeof args[i] === 'string') {
      name = args[i];
    } else if (typeof args[i] === 'number' ) {
      age = args[i];
    } else if (typeof args[i] === 'boolean') {
      apt = args[i];
    }
  }
  if (apt === true) {
    console.log(`hello ${name} you are ${age}. apt`);
  } else {
    console.log(`hello ${name} you are ${age}`);
  }
}
*/
/*
Changes made:
- Corrected the typo in `length`.
- Used `const` instead of `let` for the `args` array since it's not being reassigned.
- Corrected the syntax of the for loop.
- Initialized `apt` to `true`, as using `true || false` always results in `true`.
*/