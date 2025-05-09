import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Cryptocurrency } from '../models/Cryptocurrency';
import { ExchangeRate } from './ExchangeRate';
import Icon from 'react-native-vector-icons/Feather';
import StylesComponents from './Styles';

const { 
    container,
    title,
    scrollContent,
    card,
    exchangeRate,
    indicatorContainer,
    indicatorText,
} = StylesComponents.TopCurrencies;

interface TopCurrenciesProps {
  cryptocurrencies: Cryptocurrency[];
  onSelectCrypto: (crypto: Cryptocurrency) => void;
}

export const TopCurrencies = ({ 
  cryptocurrencies, 
  onSelectCrypto 
}: TopCurrenciesProps) => {
  // Mostrar solo las 5 principales criptomonedas por capitalización de mercado
  const topCurrencies = cryptocurrencies
    .sort((a, b) => b.marketCapUsd - a.marketCapUsd)
    .slice(0, 5);

  if (topCurrencies.length === 0) {
    return null;
  }

  return (
    <View style={container}>
      <Text style={title}>Principales Tipos de Cambio (USD)</Text>
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={scrollContent}
      >
        {topCurrencies.map((crypto) => (
          <TouchableOpacity 
            key={crypto.id} 
            onPress={() => onSelectCrypto(crypto)}
            style={card}
            activeOpacity={0.7}
          >
            <ExchangeRate
              symbol={crypto.symbol}
              name={crypto.name}
              priceUsd={crypto.priceUsd}
              style={exchangeRate}
            />
            
            {/* Indicador visual de que hay más información disponible */}
            <View style={indicatorContainer}>
              <Icon name="chevron-right" size={16} color="#666" />
              <Text style={indicatorText}>Ver detalles</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};