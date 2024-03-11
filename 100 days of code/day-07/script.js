/* 

/*
let x = 1;
let s = 0;
let inp = document.getElementById('inp');
let btn = document.getElementById('btn');

btn.onclick = function () {
  //console.log(typeof(+inp.value));
  if (inp.value !== '' ) {
    for (var i = 0; i < 4; i++) {
      x = x * (+inp.value);
      //console.log(x);
      s = s + (x / factorial(i));
    }
  }
  
  console.log(s);     
}

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    




let x = 1;
let s = 0;
let inp = document.getElementById('inp');
let btn = document.getElementById('btn');

btn.onclick = function () {
  if (inp.value !== '') {
    for (var i = 0; i < 4; i++) {
      x = x * (+inp.value);
      s = s + (x / factorial(i)); // Using factorial function here
    }
  }
  
  console.log(s);     
}

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}





*/