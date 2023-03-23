export function addLoadingMsg() {
  const products = document.querySelector('.products');
  const element = document.createElement('p');
  element.setAttribute('class', 'loading');
  element.innerText = 'carregando...';
  products.appendChild(element);
}

export const totalPrice = () => {
  let total = 0;
  const prices = document
    .querySelector('.cart__products').querySelectorAll('span.product__price__value');
  prices
    .forEach((element) => {
      total += parseInt(element.innerHTML, 10);
    });
  return total;
};
