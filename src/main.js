import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import { addLoadingMsg, totalPrice } from './helpers/others';
import { getSavedCartIDs, saveCartID } from './helpers/cartFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

addLoadingMsg();

const productsList = await fetchProductsList('computador');
const products = document.querySelector('.products');
productsList
  .forEach((element) => {
    products.appendChild(createProductElement(element));
  });
const loadingMsg = document.querySelector('.loading');

products.removeChild(loadingMsg);

const getTotalPrice = () => {
  const subtotal = document.querySelector('.total-price');
  subtotal.innerHTML = totalPrice();
};

const cartProduct = document.querySelector('.cart__products');
const addCartBtn = document.querySelectorAll('.product__add');
addCartBtn.forEach((element) => element.addEventListener('click', async (event) => {
  const productID = event.target.parentNode.firstChild.innerText;
  const productInfo = await fetchProduct(productID);
  cartProduct.appendChild(createCartProductElement(productInfo));
  saveCartID(productID);
  getTotalPrice();
}));

const productsStorage = getSavedCartIDs();
productsStorage.forEach(async (element) => {
  cartProduct
    .appendChild(createCartProductElement(await fetchProduct(element)));
});
