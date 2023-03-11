import React from 'react'
import Main from './src/components/Main.jsx'
import Grab from './src/components/Grabadora.jsx'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity} from 'react-native';


export default function app() {
  return (
    <View style={styles.container}>
      <Main />
      <Grab />
      <StatusBar style="auto"/>
    </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    button: {
  },
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
