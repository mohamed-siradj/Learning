let userName = document.getElementById('text');
let userPassword = document.getElementById('password');

let validName = false;
let validPass = false;
// console.log(document.forms[0]);
 document.forms[0].onsubmit = function (e) {
   
   if (userName.value !== '' && userName.lenght <= 10 &&  userPassword.value !== '') {
     validName = true;
     validPass = true;
     console.log('hello');
   }
   if (validName === false || validPass === false) {
     e.preventDefault;
     console.log('not working');
   }
 }

