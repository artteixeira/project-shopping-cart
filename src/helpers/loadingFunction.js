export default function addLoadingMsg() {
  const products = document.querySelector('.products');
  const element = document.createElement('p');
  element.setAttribute('class', 'loading');
  element.innerText = 'carregando...';
  products.appendChild(element);
}
