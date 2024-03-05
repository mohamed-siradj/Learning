let playerTurn = 'x';
const xClass = 'x-player';
const oClass = 'o-player'; 
let resetBtn = document.querySelector('.reset');
let cells = document.querySelectorAll('[box]');
let arr = [];

// check winner 
function winner() {
  console.log(arr);
  
}
    /*
  
    let option = checkWin[i];
    let a = option[0];
    let b = option[1];
    let c = option[2];
  
    // compare the cells
    if (arr[a] === arr[b] && arr[b] === arr[c] && arr[a] !== '') {
      console.log(`${arr[a]} win`);
    }
  }
  */


// put mark Done T T
for (var i = 0; i < cells.length; i++) {
  
   cells[i].addEventListener('click', play);
   //.onclick = play;
   //.addEventListener('click', play, {once : true});
  arr.push(cells[i].className);
  winner();
}
function play() { 
  
  if (playerTurn === 'x') {
    
    this.classList.add(xClass);
    playerTurn = 'o';
  } else if (playerTurn === 'o') {
    
    this.classList.add(oClass);
    playerTurn = 'x';
    
  }
}


// reset button
// i don't know how it work 
// but it work 
resetBtn.addEventListener('click',resetGame);
function resetGame() {
  
  for (var i = 0; i < cells.length; i++) {
    cells[i].classList.remove(xClass,oClass);
  }
  playerTurn = 'x'
}