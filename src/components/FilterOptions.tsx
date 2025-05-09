import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import StylesComponents from './Styles';


const { 
    container,
    filterText,
    filterButton,
} = StylesComponents.FilterOptions;

interface FilterOptionsProps {
  onFilterByRank: () => void;
  onFilterByPrice: () => void;
  onFilterByChange: () => void;
}

export const FilterOptions = ({ 
  onFilterByRank, 
  onFilterByPrice,
  onFilterByChange 
}: FilterOptionsProps) => {
  return (
    <View style={container}>
      <TouchableOpacity style={filterButton} onPress={onFilterByRank}>
        <Text style={filterText}>Ranking</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={filterButton} onPress={onFilterByPrice}>
        <Text style={filterText}>Precio</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={filterButton} onPress={onFilterByChange}>
        <Text style={filterText}>% Cambio</Text>
      </TouchableOpacity>
    </View>
  );
};