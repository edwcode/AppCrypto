import { useState, useEffect } from 'react';
import { Cryptocurrency } from '../models/Cryptocurrency';
import cryptoService from '../api/cryptoService';

interface UseCryptocurrenciesReturn {
  cryptocurrencies: Cryptocurrency[];
  filteredCryptocurrencies: Cryptocurrency[];
  isLoading: boolean;
  error: Error | null;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  refreshData: () => Promise<void>;
}

export const useCryptocurrencies = (): UseCryptocurrenciesReturn => {
  const [cryptocurrencies, setCryptocurrencies] = useState<Cryptocurrency[]>([]);
  const [filteredCryptocurrencies, setFilteredCryptocurrencies] = useState<Cryptocurrency[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const fetchCryptocurrencies = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await cryptoService.getCryptocurrencies();
      setCryptocurrencies(data);
      setFilteredCryptocurrencies(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Error desconocido'));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptocurrencies();
  }, []);

  // Filtrar criptomonedas según el término de búsqueda
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredCryptocurrencies(cryptocurrencies);
      return;
    }
    
    const term = searchTerm.toLowerCase();
    console.log('oqw  ijeoqiwjeoijqw  e',term)

    const filtered = cryptocurrencies.filter(crypto => 
      crypto.name.toLowerCase().includes(term) || 
      crypto.symbol.toLowerCase().includes(term)
    );
    
    setFilteredCryptocurrencies(filtered);
  }, [searchTerm, cryptocurrencies]);

  const refreshData = async () => {
    await fetchCryptocurrencies();
  };

  return {
    cryptocurrencies,
    filteredCryptocurrencies,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    refreshData
  };
};