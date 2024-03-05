let playerTurn = 'x';
const xClass = 'x-player';
const oClass = 'o-player'; 
let resetBtn = document.querySelector('.reset');
let cells = document.querySelectorAll('[box]');
let arr = [];
let checkWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// check winner 
function winner() {
  
  for (var i = 0; i < cells.length; i++) {
    
    arr[i] = `${cells[i].classList.value}moh`;
    console.log(arr[i]);
    
    
    
    /* 
    
    let option = checkWin[i];
    // return the first prob win array
    let a = option[0];
    let b = option[1];
    let c = option[2];
    
    // compare the cells
    if (cells[a].classList.value === cells[b].classList.value && cells[b].classList.value === cells[c].classList.value && cells[a].classList.value !== ''){
      console.log(`${cells[a].classList.value} win`);
    }
    */
  }
};

// put mark Done T T
for (var i = 0; i < cells.length; i++) {
  
   cells[i].addEventListener('click', play, {once : true});
}
function play() { 
  
  if (playerTurn === 'x') {
    
    this.classList.add(xClass);
    playerTurn = 'o';
  } else if (playerTurn === 'o') {
    
    this.classList.add(oClass);
    playerTurn = 'x';
    
  }
  
 // console.log('clicked');
}

// reset button
resetBtn.addEventListener('click',resetGame);
function resetGame() {
  
  for (var i = 0; i < cells.length; i++) {
    cells[i].classList.remove(xClass,oClass);
  }
}