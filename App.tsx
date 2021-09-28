import React from 'react';
import { NativeBaseProvider } from 'native-base';
import Routes from './src/components/routes/Routes';
import { StatusBar } from 'react-native';

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor="white" barStyle="dark-content"/>
      <Routes />
    </NativeBaseProvider>
  );
}

export default App;