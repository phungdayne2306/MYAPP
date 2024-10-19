import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from '../components/MenuFood/MenuScreen';
const Stack = createStackNavigator();

const Index = () => (
  <NavigationContainer independent={true}>
    <Stack.Navigator >
      <Stack.Screen name="Menu" component={MenuScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Index;
