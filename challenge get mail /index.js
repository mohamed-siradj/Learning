// script.js
   function sendMail() {
     let params = {
       name: document.getElementById("email").value,
       email: document.getElementById("name").value
     };
     emailjs.send("service_1cvtq8i", "template_xffs067", params).then(alert("sent!!"));
     return;
   }
   