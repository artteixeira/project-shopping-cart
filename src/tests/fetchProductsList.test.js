import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

const args = 'computador';
const API_URL = 'https://api.mercadolibre.com/sites/MLB/search?q='

describe('Teste a função fetchProductsList', () => {
  it('Testa se é uma função', () => {
    expect(typeof fetchProductsList).toEqual('function');
  });
  it(`Teste se ao executar a função fetchProductsList com o argumento 'computador' o fetch foi chamada`, async () => {
    await fetchProductsList(args);

    expect(fetch).toHaveBeenCalledTimes(1);
  })
  it(`Teste se ao chamar a função fetchProductsList com o argumento 'computador' o fetch utiliza o endpont 'https://api.mercadolibre.com/sites/MLB/search?q=computador'`, async () => {
    await fetchProductsList(args);

    expect(fetch).toBeCalledWith(`${API_URL}${args}`);
  });
  it(`Teste se o retorno da função fetchProductsList com o argumento 'computador' é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.`, async () => {
    expect(await fetchProductsList(args)).toEqual(computadorSearch);
  });
  it(`Teste se, ao chamar a função fetchProductsList sem argumento, retorna um erro com a mensagem: 'Termo de busca não informado'`, async () => {
    await expect(fetchProductsList()).rejects.toThrow('Termo de busca não informado');
  });
});
