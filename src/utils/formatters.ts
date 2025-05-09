export const formatPercentage = (value: number): string => {
  const sign = value > 0 ? '+' : '';
  return `${sign}${value.toFixed(2)}%`;
};

export const formatCurrency = (value: number): string => {
  return `$${value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: value >= 1 ? 2 : 6
  })}`;
};

// Función para formatear valores muy pequeños
export const formatCryptoCurrency = (value: number, symbol: string): string => {
  let formattedValue: string;
  
  if (value >= 1) {
    formattedValue = value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  } else if (value >= 0.0001) {
    formattedValue = value.toLocaleString(undefined, {
      minimumFractionDigits: 6,
      maximumFractionDigits: 6
    });
  } else {
    // Para valores extremadamente pequeños, usar notación científica
    formattedValue = value.toExponential(4);
  }
  
  return `${formattedValue} ${symbol}`;
};