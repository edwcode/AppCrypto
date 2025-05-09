import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { CryptoList } from '../components/CryptoList';
import { SearchBar } from '../components/SearchBar';
import { FilterOptions } from '../components/FilterOptions';
import { TopCurrencies } from '../components/TopCurrencies';
import { Cryptocurrency } from '../models/Cryptocurrency';
import { useCryptoContext } from '../context/CryptoContext';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

export const HomeScreen  = ({ navigation }: HomeScreenProps) => {
  const { filteredCryptocurrencies, cryptocurrencies } = useCryptoContext();
  const [sortedCryptos, setSortedCryptos] = useState<Cryptocurrency[]>([]);

  // Actualizar el estado local cuando cambien las criptomonedas filtradas
  useEffect(() => {
    setSortedCryptos([...filteredCryptocurrencies]);
  }, [filteredCryptocurrencies]);

  const handleSelectCrypto = (crypto: Cryptocurrency) => {
    navigation.navigate('Detail', { crypto });
  };

  const handleFilterByRank = () => {
    const sorted = [...filteredCryptocurrencies].sort((a, b) => a.rank - b.rank);
    setSortedCryptos(sorted);
  };

  const handleFilterByPrice = () => {
    const sorted = [...filteredCryptocurrencies].sort((a, b) => b.priceUsd - a.priceUsd);
    setSortedCryptos(sorted);
  };

  const handleFilterByChange = () => {
    const sorted = [...filteredCryptocurrencies].sort(
      (a, b) => b.percentChange24h - a.percentChange24h
    );
    setSortedCryptos(sorted);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar placeholder="Buscar por nombre o símbolo..." />
      <FilterOptions
        onFilterByRank={handleFilterByRank}
        onFilterByPrice={handleFilterByPrice}
        onFilterByChange={handleFilterByChange}
      />
      
      <TopCurrencies 
        cryptocurrencies={cryptocurrencies}
        onSelectCrypto={handleSelectCrypto}
      />
      <CryptoList 
        onSelectCrypto={handleSelectCrypto} 
        customCryptos={sortedCryptos}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});