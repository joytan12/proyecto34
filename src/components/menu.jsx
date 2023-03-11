import React from 'react'
import Grab from "./grabadora.jsx"
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function Menu() {
    return (
      <View style={styles.container2}>
        <Text>este es el menu</Text> 
        <Grab/>
      </View>
    );
  }

  const styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'center',
    },
    container2: {
      flex: 1,
      backgroundColor:"white",
      alignItems:"center",
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