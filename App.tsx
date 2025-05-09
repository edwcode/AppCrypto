import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from './src/navigation/AppNavigator';
import { CryptoProvider } from './src/context/CryptoContext';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <CryptoProvider>
        <StatusBar backgroundColor="#f4511e" barStyle="light-content" />
        <AppNavigator />
      </CryptoProvider>
    </SafeAreaProvider>
  );
};

export default App;