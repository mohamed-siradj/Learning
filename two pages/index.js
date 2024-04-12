let btn = document.getElementById('btn')
let div = document.getElementById('parent')
let test = document.getElementById('test')

btn.onclick = function () {
  console.log('its work')
  console.log(test);
  div.append(test);
}