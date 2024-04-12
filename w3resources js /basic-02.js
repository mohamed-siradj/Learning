function stringAnimate() {
  let ele = document.getElementById('str');
  let text = ele.textContent;
  setInterval(function () {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    ele.textContent = text;
  },150);
}
/* 
function eidElFitr() {
  return 'عيد مبارك، تقبل الله منّا ومنكم';
}
*/
//(eidElFitr) => return 'عيد مبارك';
const eidElFitr = () => 'عيد مبارك';
console.log(eidElFitr());