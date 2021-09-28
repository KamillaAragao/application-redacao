import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Splash from '../../screens/Splash';
import Home from '../../screens/Home';
import Dissertation from '../../screens/Dissertation';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerTitle: "Bem vindo"}}/>
        <Stack.Screen name="Dissertation" component={Dissertation} options={{headerTitle: "Dados da redação"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;