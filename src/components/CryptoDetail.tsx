import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Cryptocurrency } from '../models/Cryptocurrency';
import { formatPercentage, formatCurrency } from '../utils/formatters';
import StylesComponents  from './Styles';
interface CryptoDetailProps {
  crypto: Cryptocurrency;
}
const { container, 
    header, 
    symbol, 
    name, 
    priceContainer, 
    priceLabel, 
    price, 
    change,
    positive, 
    negative, 
    section,
    sectionTitle,
    infoRow,
    infoLabel,
    infoValue,
} = StylesComponents.CryptoDetail;

export const CryptoDetail = ({ crypto }: CryptoDetailProps) => {
  return (
    <ScrollView style={container}>
      <View style={header}>
        <Text style={symbol}>{crypto.symbol}</Text>
        <Text style={name}>{crypto.name}</Text>
        <View style={priceContainer}>
          <Text style={priceLabel}>Precio USD</Text>
          <Text style={price}>{formatCurrency(crypto.priceUsd)}</Text>
        </View>
        <Text 
          style={[
            change,
            crypto.isPriceUp24h ? positive : negative
          ]}
        >
          {formatPercentage(crypto.percentChange24h)} (24h)
        </Text>
      </View>

      <View style={section}>
        <Text style={sectionTitle}>Información de Cambio</Text>
        
        <View style={infoRow}>
          <Text style={infoLabel}>Precio USD</Text>
          <Text style={infoValue}>{formatCurrency(crypto.priceUsd)}</Text>
        </View>
        
        <View style={infoRow}>
          <Text style={infoLabel}>Precio BTC</Text>
          <Text style={infoValue}>{crypto.priceBtc.toFixed(8)} BTC</Text>
        </View>
      </View>

      <View style={section}>
        <Text style={sectionTitle}>Información General</Text>
        
        <View style={infoRow}>
          <Text style={infoLabel}>Ranking</Text>
          <Text style={infoValue}>#{crypto.rank}</Text>
        </View>
        
        <View style={infoRow}>
          <Text style={infoLabel}>Capitalización</Text>
          <Text style={infoValue}>{formatCurrency(crypto.marketCapUsd)}</Text>
        </View>
        
        <View style={infoRow}>
          <Text style={infoLabel}>Volumen (24h)</Text>
          <Text style={infoValue}>{formatCurrency(crypto.volume24)}</Text>
        </View>
      </View>

      <View style={section}>
        <Text style={sectionTitle}>Cambios</Text>
        
        <View style={infoRow}>
          <Text style={infoLabel}>1 hora</Text>
          <Text style={[
            infoValue,
            crypto.percentChange1h > 0 ? positive : negative
          ]}>
            {formatPercentage(crypto.percentChange1h)}
          </Text>
        </View>
        
        <View style={infoRow}>
          <Text style={infoLabel}>24 horas</Text>
          <Text style={[
            infoValue,
            crypto.percentChange24h > 0 ? positive : negative
          ]}>
            {formatPercentage(crypto.percentChange24h)}
          </Text>
        </View>
        
        <View style={infoRow}>
          <Text style={infoLabel}>7 días</Text>
          <Text style={[
            infoValue,
            crypto.percentChange7d > 0 ? positive : negative
          ]}>
            {formatPercentage(crypto.percentChange7d)}
          </Text>
        </View>
      </View>

      <View style={section}>
        <Text style={sectionTitle}>Suministro</Text>
        
        <View style={infoRow}>
          <Text style={infoLabel}>Circulante</Text>
          <Text style={infoValue}>{crypto.circulating}</Text>
        </View>
        
        <View style={infoRow}>
          <Text style={infoLabel}>Total</Text>
          <Text style={infoValue}>{crypto.totalSupply}</Text>
        </View>
        
        <View style={infoRow}>
          <Text style={infoLabel}>Máximo</Text>
          <Text style={infoValue}>{crypto.maxSupply || 'No definido'}</Text>
        </View>
      </View>
    </ScrollView>
  );
};
