import React from 'react';
import { View, Text } from 'react-native';
import { formatCurrency } from '../utils/formatters';
import StylesComponents from './Styles';

const { 
    container,
    currencyInfo,
    symbol: symbolStyle,
    name: nameStyel,
    rateContainer,
    rateLabel,
    rateValue,
} = StylesComponents.ExchangeRate;

interface ExchangeRateProps {
  symbol: string;
  name: string;
  priceUsd: number;
  style?: object;
}

export const ExchangeRate = ({ 
  symbol, 
  name, 
  priceUsd, 
  style = {} 
}: ExchangeRateProps) => {
  return (
    <View style={[container, style]}>
      <View style={currencyInfo}>
        <Text style={symbolStyle}>{symbol}</Text>
        <Text style={nameStyel}>{name}</Text>
      </View>
      <View style={rateContainer}>
        <Text style={rateLabel}>USD</Text>
        <Text style={rateValue}>{formatCurrency(priceUsd)}</Text>
      </View>
    </View>
  );
};
