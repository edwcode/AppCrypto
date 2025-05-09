import React from 'react';
import { View, TextInput } from 'react-native';
import { useCryptoContext } from '../context/CryptoContext';
import StylesComponents from './Styles';

const { 
    container,
    input
} = StylesComponents.SearchBar;

interface SearchBarProps {
  placeholder?: string;
}

export const SearchBar  = ({ placeholder = 'Buscar criptomoneda...' }: SearchBarProps) => {
  const { searchTerm, setSearchTerm } = useCryptoContext();

  return (
    <View style={container}>
      <TextInput
        style={input}
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder={placeholder}
        placeholderTextColor="#888"
      />
    </View>
  );
};