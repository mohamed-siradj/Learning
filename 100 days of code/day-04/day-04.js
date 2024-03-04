/* let myBox = document.getElementsByTagName('button');
// console.log(myBox);
let play = function() {
  /* 
  let content = '';
  for (let i = 0; i < 10; i++) {
     content = myBox[i].innerHTML;
    i % 2 === 0 ? content = '<p class="x-player"></p>' : content = '<p class="o-player"></p>';
  }
  return content;
  for (let i = 0; i < myBox.length-1; i++) {
    myBox[i].addEventListener('click', function() {
      if (myBox[i].innerHTML === '') {
        myBox[i].innerHTML = i % 2 === 0 ? '<p class="x-player"></p>' : '<p class="o-player"></p>';
      }
    });
    if (i > 3 && i < 9) {
      let checkWin = function() {
        let cases = {
          arr: ['onetwothree', 'threesixnine', 'nineeightseven', 'sevenfourone', 'onefivenine', 'threefiveseven', 'twofiveeight', 'fourfivesix']
        };
        let oPlayerCheck = [];
        for (let i = 0; i < myBox.length - 1; i++) {
          // Tab to edit
          if (myBox[i].innerHTML === '<p class="x-player"></p>') {
            xPlayerCheck.push(myBox[i].className);
          } else if (myBox[i].innerHTML === '<p class="o-player"></p>') {
            oPlayerCheck.push(myBox[i].className);
          }
      
          if (i === 4 && xPlayerCheck.join('') === arr[i].join('')) {
            alert('player X win');
      
          }
        }
        checkWin();
      }
      if (i === 8) {
        break;
      }
    }
  }
}; 
play();

// probability of win 
let checkWin = function() {
  let cases = {
    arr: ['onetwothree', 'threesixnine', 'nineeightseven', 'sevenfourone', 'onefivenine', 'threefiveseven', 'twofiveeight', 'fourfivesix']
  };
  let xPlayerCheck = [];
  let oPlayerCheck = [];
  for (let i = 0; i < myBox.length - 1; i++) {
    // Tab to edit
    if (myBox[i].innerHTML === '<p class="x-player"></p>') {
      xPlayerCheck.push(myBox[i].className);
    } else if (myBox[i].innerHTML === '<p class="o-player"></p>') {
      oPlayerCheck.push(myBox[i].className);
    }

    if (i === 4 && xPlayerCheck.join('') === arr[i].join('')) {
      alert('player X win');

    }
  }
}
*/


const playerX = 'x-player';
const playerO = 'o-player';
let playerTurn = true;
let box = document.querySelectorAll('[box]');


//let resetBtn = document.getElementsByClassName('reset');

// console.log(box
// give up men for doesnt work , forEach better
/* 
for (let i = 0; i < box.length; i++) {
  if (playerTurn === true) {
    box[i].setAttribute('class', playerX);
    // switch the palyerTurn value 

    box[i].setAttribute('class', playerO);
  }
}
*/

// select all btn elements
// event for click one time

box.forEach(function (e) {
  e.addEventListener('click', handle, {once : true});
});
// fun to select the current clicked btn element and give it a class
function handle(ele) {
  const cell = ele.target;
  const currentClass = playerTurn ? playerX : playerO;
  placeMark(cell, currentClass);
// every time the playerTurn take the oposite value the class changes so the mark changes
  playerTurn = !playerTurn;
}
// current element get a mark according to the class
function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
};


// it doesnt work T T 

/* 

function checkWin() {
  let win = false;
  for (var i = 0; i < probWins.length; i++) {
    const condition = probWins[i];
    const boxA = option[condition[0]];
    const boxB = option[condition[1]];
    const boxC = option[condition[2]];
    
    if (boxA === '' || boxB === '' || boxC === '') {
      continue;
    }
    if (boxA === boxB && boxB === boxC) {
      win = true;
      break;
    }
  }
  
  if (win) {
    alert(`${currentClass} win`);
  } else if (!option.includes('')) {
    alert('draw');
  }
};
*/

/* 
let resetBtn = document.getElementsByClassName('reset');
resetBtn.onclick = resetGame();

function resetGame() {

}
*/
  
// give up 

