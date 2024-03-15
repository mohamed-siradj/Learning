let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let createBtn = document.getElementById('btn');

//all right
//console.log(title,price,taxes,ads,discount,total,count,category,createBtn);

let result = '';
function getTotal() {
  if (price.value !== '') {
    result = (+price.value + +taxes.value + +ads.value) - +discount.value;
    total.innerHTML = `Total = ${result}`;
    total.style.color = 'var(--beige2-color)';
    total.style.backgroundColor = 'var(--blue-color)';
  } else if (price.value === '') {
    total.innerHTML = 'Total = ';
    total.style.color = 'var(--blue-color)';
    total.style.backgroundColor = 'var(--beige2-color)';
  }
}

let productData;
if (localStorage.product) {
  productData = JSON.parse(localStorage.product);
} else {
  productData = [];
}

createBtn.onclick = function () {
  let newProduct = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: result,
    count: count.value,
    category : category.value
  }
  productData.push(newProduct);
  localStorage.setItem('product',JSON.stringify(productData));
  //console.log(productData);
  clearData();
  showData();
}
// console.log(localStorage.product);

function clearData() {
  let inputs = document.querySelectorAll('input');
  inputs.forEach (input => {
    input.value = '';
  });
  total.innerHTML = 'Total = ';
  total.style.color = 'var(--blue-color)';
  total.style.backgroundColor = 'var(--beige2-color)';

  
}

function showData() {
  let table = '';
  for (let i = 0; i < productData.length; i++) {
    table += `
        <td>${i}</td>
        <td>${productData[i].title}</td>
        <td>${productData[i].price}</td>
        <td>${productData[i].taxes}</td>
        <td>${productData[i].ads}</td>
        <td>${productData[i].discount}</td>
        <td>${productData[i].total}</td>
        <td>${productData[i].category}</td>
        <td><button id="update">Update</button></td>
        <td><button onclick="deleteProduct(${i})" id="delete">Delete</button></td>
      </tr>
    `;
  }
  document.getElementById('tbody').innerHTML = table;
  let deleteBtn = document.getElementById('deleteBtn');
  if (productData.length > 0) {
    deleteBtn.innerHTML = `<button onclick="deleteAll()">Delete All</button>`;
  } else {
    deleteBtn.innerHTML = '';
  }
}
showData();


function deleteProduct(i) {
  productData.splice(i,1);
  localStorage.product = JSON.stringify(productData);
  showData();
}


function deleteAll() {
  localStorage.clear();
  productData.splice(0);
  showData();
}