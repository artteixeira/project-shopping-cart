export const getAddress = async () => {
  const input = document.querySelector('.cep-input');
  const api1 = await fetch(`https://cep.awesomeapi.com.br/json/${input.value}`);
  const api2 = await fetch(`https://brasilapi.com.br/api/cep/v2/${input.value}`);
  try {
    const data = await Promise.any([api2, api1])
      .then((response) => response.json());

    const result = `${(data.andress || data.street)} - ${(data.district || data
      .neighborhood)} - ${data.city} - ${data.state}`;
    if (result.endsWith('undefined')) throw new Error();
    return result;
  } catch {
    return 'CEP não encontrado';
  }
};

export const searchCep = async () => {
  const cartAddress = document.querySelector('.cart__address');
  const address = await getAddress();
  cartAddress.innerText = address;
};
