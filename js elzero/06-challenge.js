let myAdmins = ["Ahmed","Sayed","Osama","Kamal","Samera","Stop"];

let myEmployees = ["Amgad","Samah","Ameer","Omar","Othman","Amany","Samira","Karim"];
let i = 0;
for (; i < myAdmins.length; i++) {
  if(myAdmins[i] === "Stop") {
    break;
  }
}
document.write(`<div>We have ${i} admins </div>`);
document.write(`<hr>`);
document.write(`<div>`);
 j = 0;
 for (; j< i; j++) {
   document.write(`The admin for team is ${myAdmins[j]}`);
   document.write(`<h3>Team Memberes :</h3>`);
   let l=1;
   for (k = 0; k < myEmployees.length; k++) {
     if (myAdmins[j].charAt(0) === myEmployees[k].charAt(0)) {
       document.write(`<p>-${l} ${myEmployees[k]}</p>`);
       l++;
     }
   }
   document.write(`<hr>`);
 } 
document.write(`</div>`);
