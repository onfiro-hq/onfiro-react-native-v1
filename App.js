import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

import StartPage from './components/StartPage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator 
        initialRouteName="Start"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Start" 
          component={StartPage} 
          options={{ title: 'Onfiro v1' }}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginPage} 
          options={{ title: 'Login' }}
        />
        <Stack.Screen 
          name="Registration" 
          component={RegistrationPage} 
          options={{ title: 'Registration' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
