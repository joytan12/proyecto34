import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';

import SettingScreen from './Screens/Setting.js';
import App from './src/components/main';
import Menu from './src/components/menu';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function app() {
  return (
    <NavigationContainer styles={styles.container}>
      <StatusBar style="auto" />
      <Stack.Navigator >
        <Stack.Screen name="Menu" component={Menu} options={{ title: 'Welcome', headerBackButtonMenuEnabled: false, headerShown: false}} />
        <Stack.Screen name="main" component={App} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={SettingScreen} options={{ title: 'Welcome', headerBackButtonMenuEnabled: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    justifyContent: 'center',
  },
});
