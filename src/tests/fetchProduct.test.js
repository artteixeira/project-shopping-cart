import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

const args = 'MLB1405519561';
const API_URL = 'https://api.mercadolibre.com/items/';

describe('Teste a função fetchProduct', () => {
  it('Testa se é uma função', () => {
    expect(typeof fetchProduct).toEqual('function');
  });
  it(`Teste se ao executar a função fetchProduct com o argumento 'MLB1405519561' o fetch foi chamada`, async () => {
    await fetchProduct(args);

    expect(fetch).toHaveBeenCalledTimes(1);
  })
  it(`Teste se ao chamar a função fetchProduct com o argumento 'MLB1405519561' o fetch utiliza o endpont 'https://api.mercadolibre.com/sites/MLB/search?q=computador'`, async () => {
    await fetchProduct(args);

    expect(fetch).toBeCalledWith(`${API_URL}${args}`);
  });
  it(`Teste se o retorno da função fetchProduct com o argumento 'MLB1405519561' é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.`, async () => {
    expect(await fetchProduct(args)).toEqual(product);
  });
  it(`Teste se, ao chamar a função fetchProduct sem argumento, retorna um erro com a mensagem: 'ID não informado'`, async () => {
    await expect(fetchProduct()).rejects.toThrow('ID não informado');
  });
});