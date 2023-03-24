export function addMsg(tag, className, textElement) {
  const products = document.querySelector('.products');
  const element = document.createElement(tag);
  element.setAttribute('class', className);
  element.innerText = textElement;
  products.appendChild(element);
}

export const totalPrice = () => {
  let total = 0;
  const prices = document
    .querySelector('.cart__products').querySelectorAll('span.product__price__value');
  prices
    .forEach((element) => {
      total += Number(element.innerHTML);
      // console.log(element.innerHTML);
    });
  localStorage.setItem('totalPrice', total);
  return total.toFixed(2);
};

export const getTotalPrice = () => {
  const subtotal = document.querySelector('.total-price');
  subtotal.innerHTML = totalPrice();
};

export const removeMsg = () => {
  const loadingMsg = document.querySelector('.loading');
  const products = document.querySelector('.products');
  products.removeChild(loadingMsg);
};
