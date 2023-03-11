import React from 'react'

import Grab from './src/components/grabadora.jsx'
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity} from 'react-native';
import Login from './src/components/style.jsx';


export default function app() {
  return (
    <View style={styles.container}>
      {/*<Main />*/}
      <Login />
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
    justifyContent: 'center',
    
  },
});
