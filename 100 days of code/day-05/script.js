let btn = document.getElementById('btn');
let inp = document.getElementById('inp');
let boxes = document.querySelectorAll('.box');
let drag = null;
// first step done ^^
btn.onclick = function () {
  if (inp.value !== '') {
    let prg = document.createElement('p');
    prg.className = 'item';
    prg.setAttribute('draggable','true');
    let text = document.createTextNode(inp.value);
    prg.appendChild(text);
    boxes[0].appendChild(prg);
    inp.value = '';
  }
  dragAndDrop();
}
function dragAndDrop() {
  let items = document.querySelectorAll('.item'); 
  items.forEach(item => {
    item.addEventListener('dragstart',function () {
      drag = item;
      item.style.opacity = '0.5';
    });
    
    item.addEventListener('dragend',function () {
      drag = null;
    });
  });
  
    boxes.forEach(box => {
      box.addEventListener('dragover',function (e) {
        e.preventDefault();
        this.style.background = '#9FF041';
        this.style.color = '#fff';
      });
      
      box.addEventListener('dragleave',function () {
        this.style.background = '#fff';
        this.style.color = '#000';
      });
      
      box.addEventListener('drop',function () {
        this.append(drag);
        this.style.backgroundImage = 'linear-gradient(135deg, #886C09, #884F09)';
        this.style.color = '#000';
      });
    });
}