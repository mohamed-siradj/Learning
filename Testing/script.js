
let btnClick = document.getElementById('btn');
btnClick.onclick = function (e) {
  console.log('its work without declare it ');
};

// btnClick();
// u have a prblm of why this function work
// without declare 
// because of the event 
// the fun work cause it evry time u clicked the button the fun is called 
