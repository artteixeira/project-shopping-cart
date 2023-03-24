import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { generateProducts, generateCart, productsStorage }
  from './helpers/shopFunctions';
import { addMsg, removeMsg } from './helpers/others';

document.querySelector('.cep-button').addEventListener('click', searchCep);

addMsg('p', 'loading', 'carregando...');

await generateProducts();

removeMsg();

await generateCart();

await productsStorage();
