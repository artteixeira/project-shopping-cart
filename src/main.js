import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import addLoadingMsg from './helpers/loadingFunction';

document.querySelector('.cep-button').addEventListener('click', searchCep);
addLoadingMsg();
const productInfo = await fetchProductsList('computador');
const products = document.querySelector('.products');
productInfo
  .forEach((element) => {
    products.appendChild(createProductElement(element));
  });
const loadingMsg = document.querySelector('.loading');
products.removeChild(loadingMsg);
