import React from 'react';
// import Main from './src/components/Main.jsx'

// export default function app() {
//     return <Main />
// }

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';

const imagenAvion = require("./imagenes/caja.jpg");

export default function App() {
  return (
   
    
    <ImageBackground source={imagenAvion} resizeMode="cover" style={styles.container}>
      <View style={styles.containers}>
      <View style={styles.container}>
      <Text style={styles.titulo}> Bienvenido a  </Text>
      <Text style={styles.titulo}>"La caja Negra"</Text>
      <View>
      <TouchableOpacity style={styles.boton}>
      <Text style={styles.texto}>"La caja Negra"</Text> 
       </TouchableOpacity>
      
       </View>
    </View>
   </View>
    </ImageBackground>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  boton:{
   
    marginTop: 80,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 100,
    width: 200,
    alignItems: 'center',

  },
  texto:{
    color: 'black',
    fontSize: 20,

  },


});
