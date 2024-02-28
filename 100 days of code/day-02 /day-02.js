const toDoInput = document.querySelector('.todo-input');
const listContainer = document.getElementById('list-container');


function addTask() {
  
  !listContainer ? console.error('not found') : console.log('mzia rah ymshi T-T');
  
  if (toDoInput.value === "") {
    alert('you must write something!');
  } else {
    let li = document.createElement('li');
    li.innerHTML = toDoInput.value;
    listContainer.appendChild(li);
    span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  toDoInput.value = '';
  saveData();
}

listContainer.addEventListener('click', function (ele) {
  if (ele.target.tagName === 'LI') {
    ele.target.classList.toggle('checked');
    saveData();
  } else if (ele.target.tagName === 'SPAN') {
    ele.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}
function showList() {
  listContainer.innerHTML = localStorage.getItem('data');
  
}
showList();