import { ApiResponse } from '../models/interfaces';
import { Cryptocurrency } from '../models/Cryptocurrency';

const API_URL = 'https://api.coinlore.net/api/tickers/';

class CryptoService {
  async getCryptocurrencies(){
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Error de API: ${response.status}`);
      }
      
      const data: ApiResponse = await response.json();
    
      // Transformar los datos a nuestro modelo
      return data.data.map(cryptoData => new Cryptocurrency(cryptoData));
    } catch (error) {
      console.error('Error al obtener criptomonedas:', error);
      throw error;
    }
  }
  
  async getCryptocurrencyById(id: string){
    try {
      const cryptos = await this.getCryptocurrencies();
      return cryptos.find(crypto => crypto.id === id) || null;
    } catch (error) {
      console.error(`Error al obtener criptomoneda con ID ${id}:`, error);
      throw error;
    }
  }
}

export default new CryptoService();