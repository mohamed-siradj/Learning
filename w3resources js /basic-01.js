// select Elements 
let myDate = document.getElementById('date');
let myTime = document.getElementById('time');

// date object 
let date = new Date();
// days names array
let daysName = ['Sunday', 'Monday', 'Tusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// The current day name 
let dayOfWeek = daysName[date.getDay()];
// day format
let format = '';
// correct format
if (date.getHours() > 12) {
  date.setHours(date.getHours() - 12);
  format = 'PM';
}else {
  format = 'AM';
} 
// set the content on the HTML P
myDate.textContent = `Today is : ${dayOfWeek}`;
myTime.textContent = `Current Time is : ${date.getHours()} ${format} : ${date.getMinutes()} : ${date.getSeconds()}`;


/*
// Get the current date and time
var today = new Date();

// Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
var day = today.getDay();

// Array of day names
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Display the current day
console.log("Today is: " + daylist[day] + ".");

// Get the current hour, minute, and second
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

// Determine if it's AM or PM
var prepand = (hour >= 12) ? " PM " : " AM ";

// Convert 24-hour format to 12-hour format
hour = (hour >= 12) ? hour - 12 : hour;

// Check for special cases when hour is 0
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}

// Check for special cases when hour is 0
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}

// Display the current time
console.log("Current Time: " + hour + prepand + " : " + minute + " : " + second); 
*/