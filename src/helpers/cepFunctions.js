export const getAddress = async () => {
  const input = document.querySelector('.cep-input');
  const maxValueLength = 8;
  if (!input.value || input.value.length !== maxValueLength) return 'CEP não encontrado';
  const api1 = await fetch(`https://cep.awesomeapi.com.br/json/${input.value}`);
  const api2 = await fetch(`https://brasilapi.com.br/api/cep/v2/${input.value}`);

  return Promise.any([api2, api1])
    .then((response) => response.json())
    .then((data) => {
      const result = `${(data
        .andress || data
        .street)} - ${(data.district || data.neighborhood)} - ${data.city} - ${data
        .state}`;
      return result;
    });
};

export const searchCep = async () => {
  const cartAddress = document.querySelector('.cart__address');
  const address = await getAddress();
  cartAddress.innerText = address;
};
