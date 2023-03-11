import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

const Main = () => {
  return (
    <View style={styles.container}>
      {/* con button tiene un nivel de personalisacion bastante bajo  */}
      {/* <Button
        onPress={() => Alert.alert('porfa lee el manga;(')}
        title="press me"
        color="#841584"
      /> */}
      {/* el touchableOpacitY permite etiquetas de style lo cual brindo una mayor personalisacion*/}
      {/* <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity> */}
      <Text>estoy pal loli manito</Text>
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

// export default Main