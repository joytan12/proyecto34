import React from 'react';
import { StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
//import Login from './src/components/main.jsx';

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

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Button, Alert, TouchableOpacity} from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/*con button tiene un nivel de personalisacion bastante bajo  */}
//       <Button
//         onPress={() => Alert.alert('porfa lee el manga;(')}
//         title="press me"
//         color="#841584"
//       />
//       {/*el touchableOpacitY permite etiquetas de style lo cual brindo una mayor personalisacion*/}
//       <TouchableOpacity style={styles.button} onPress={() => Alert.alert('porfa lee el manga;(')}>
//         <Text>Press Here</Text>
//       </TouchableOpacity>
//       <Text>leete el primer cap</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    justifyContent: 'center',
  },
});
