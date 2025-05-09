import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Cryptocurrency } from '../models/Cryptocurrency';
import { formatPercentage, formatCurrency } from '../utils/formatters';
import Icon from 'react-native-vector-icons/Feather';
import StylesComponents from './Styles';

const { 
    container,
    leftContainer,
    symbol,
    name,
    rightContainer,
    price,
    change,
    positive,
    negative,
    indicatorContainer
} = StylesComponents.CryptoItem;

interface CryptoItemProps {
  crypto: Cryptocurrency;
  onPress: (crypto: Cryptocurrency) => void;
}

export const CryptoItem= memo(({ crypto, onPress }: CryptoItemProps) => {
  return (
    <TouchableOpacity 
      style={container} 
      onPress={() => onPress(crypto)}
      activeOpacity={0.7}
    >
      <View style={leftContainer}>
        <Text style={symbol}>{crypto.symbol}</Text>
        <Text style={name}>{crypto.name}</Text>
      </View>
      
      <View style={rightContainer}>
      <Text style={symbol}>{'USD'}</Text>
        <Text style={price}>{formatCurrency(crypto.priceUsd)}</Text>
        <Text style={[
          change,
          crypto.isPriceUp24h ? positive : negative
        ]}>
          {formatPercentage(crypto.percentChange24h)}
        </Text>
      </View>
      
      {/* Indicador visual de detalles */}
      <View style={indicatorContainer}>
        <Icon name="chevron-right" size={18} color="#999" />
      </View>
    </TouchableOpacity>
  );
});
