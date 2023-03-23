export const fetchProduct = async (args) => {
  if (!args) throw new Error('ID não informado');

  const API_URL = 'https://api.mercadolibre.com/items/';
  const response = await fetch(`${API_URL}${args}`);
  const data = await response.json();

  return data;
};

export const fetchProductsList = async (args) => {
  if (!args) throw new Error('Termo de busca não informado');

  const API_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=';
  const response = await fetch(`${API_URL}${args}`);
  const data = await response.json();

  return data.results;
};
