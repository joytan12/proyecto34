import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button, Alert} from 'react-native'

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>hola mundo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

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

export default Main