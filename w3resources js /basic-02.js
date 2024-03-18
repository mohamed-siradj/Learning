function stringAnimate() {
  let ele = document.getElementById('str');
  let text = ele.textContent;
  let a = 1;
  setInterval(function () {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    ele.textContent = text;
  },100);
}