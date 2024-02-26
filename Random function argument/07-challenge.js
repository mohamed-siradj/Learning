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
randomArg( 40, false, "moh");
