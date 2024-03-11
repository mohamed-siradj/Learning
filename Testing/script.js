let prg = document.querySelector('p');

prg.addEventListener('dragstart',function (e) {
  console.log('darg start');
  e.target.style.opacity = '0.5';
});


prg.addEventListener('dragend',function (e) {
  console.log('darg end');
  e.target.style.opacity = '1';

});