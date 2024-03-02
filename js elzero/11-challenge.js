let testObject = {
  name : "moh",
  age : "20",
  skills : ["Html","Css","Js"],
  adresses : {
    one : "aghouat",
    two : "medea",
  },
  wh : true,
  now : function () {
  return user.wh === true ? "home" : "not home";
  }
  
};
console.log(testObject.adresses.one + 'hello');

