// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!', product.children);
  let price = product.querySelector('.price span').textContent;
  let quantity = product.querySelector('.quantity input').valueAsNumber;

  let subTotal = price * quantity;

  let subtotalElm = product.querySelector('.subtotal span');
  subtotalElm.textContent = subTotal.toFixed(2);
  return subTotal;
}

// ITERATION 2
//... your code goes here

function calculateAll() {
  let allProducts = document.getElementsByClassName('product');
  let totalValue = 0;
  for (let prod of allProducts) {
    totalValue += updateSubtotal(prod);
  }

  document.querySelector('#total-value span').innerText = totalValue.toFixed(2);

  // // code in the following two lines is added just for testing purposes.
  // // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // // // end of test

  //   // ITERATION 3
  //   //... your code goes here
}
calculateAll();

// // ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// // ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
