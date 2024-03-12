/*  let div = document.querySelector('div');
 
 function countDown() {
   div.innerHTML -= 1;
   if (div.innerHTML === '0') {
     //clearInterval(counter);
     //div.innerHTML = 'ma chérie is the best';
   }
 }
  let counter = setInterval(countDown,1000);
 */
 let p = document.querySelector('p');

function countDown() {
  p.innerHTML -= 1;
  if (p.innerHTML === '0') {
    clearInterval(counter);
    p.innerHTML = 'ma cherie is the best';
  }
}
//countDown();

let counter = setInterval(countDown,1000);