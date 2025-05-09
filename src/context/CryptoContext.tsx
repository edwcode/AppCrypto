import React, { createContext, useContext, ReactNode } from 'react';
import { useCryptocurrencies } from '../hooks/useCryptocurrencies';
import { Cryptocurrency } from '../models/Cryptocurrency';

interface CryptoContextType {
  cryptocurrencies: Cryptocurrency[];
  filteredCryptocurrencies: Cryptocurrency[];
  isLoading: boolean;
  error: Error | null;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  refreshData: () => Promise<void>;
}

const CryptoContext = createContext<CryptoContextType | undefined>(undefined);

interface CryptoProviderProps {
  children: ReactNode;
}

export const CryptoProvider  = ({ children }: CryptoProviderProps) => {
  const cryptoData = useCryptocurrencies();
  
  return (
    <CryptoContext.Provider value={cryptoData}>
      {children}
    </CryptoContext.Provider>
  );
};

export const useCryptoContext = (): CryptoContextType => {
  const context = useContext(CryptoContext);
  
  if (context === undefined) {
    throw new Error('useCryptoContext debe ser usado dentro de un CryptoProvider');
  }
  
  return context;
};