import React from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';
import { Cryptocurrency } from '../models/Cryptocurrency';
import { CryptoItem } from './CryptoItem';
import { useCryptoContext } from '../context/CryptoContext';
import StylesComponents from './Styles';

const { 
    centerContainer,
    errorText,
    retryText,
    noResultsText,
} = StylesComponents.CryptoList;

interface CryptoListProps {
  onSelectCrypto: (crypto: Cryptocurrency) => void;
  customCryptos?: Cryptocurrency[]; // Nueva prop para recibir criptos ordenadas
}

export const CryptoList= ({ 
  onSelectCrypto, 
  customCryptos 
}: CryptoListProps) => {
  const { filteredCryptocurrencies, isLoading, error, refreshData } = useCryptoContext();
  
  // Usar las criptos personalizadas si están disponibles, de lo contrario usar las filtradas del contexto
  const cryptosToShow = customCryptos || filteredCryptocurrencies;

  if (isLoading) {
    return (
      <View style={centerContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={centerContainer}>
        <Text style={errorText}>Error: {error.message}</Text>
        <Text style={retryText} onPress={refreshData}>
          Reintentar
        </Text>
      </View>
    );
  }

  if (cryptosToShow.length === 0) {
    return (
      <View style={centerContainer}>
        <Text style={noResultsText}>No se encontraron resultados</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={cryptosToShow}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CryptoItem crypto={item} onPress={onSelectCrypto} />
      )}
      onRefresh={refreshData}
      refreshing={isLoading}
    />
  );
};