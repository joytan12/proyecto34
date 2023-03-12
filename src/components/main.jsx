import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import Menu from './menu';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

WebBrowser.maybeCompleteAuthSession();
const imagenAvion = require("../imagenes/caja.jpg");

export default function App() {
  const [accessToken, setAccessToken] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    androidClientId: '971345097587-dimt50ogkvaj5di1hqlakhe4bh3mukd8.apps.googleusercontent.com',
    expoClientId: '971345097587-dimt50ogkvaj5di1hqlakhe4bh3mukd8.apps.googleusercontent.com',
    iosClientId: '971345097587-dimt50ogkvaj5di1hqlakhe4bh3mukd8.apps.googleusercontent.com',
  });

  

  React.useEffect(() => {
    if(response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
      accessToken && fetchUserInfo();
    }
  }, [response, accessToken])

  
  async function fetchUserInfo() {
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const useInfo = await response.json();
    setUser(useInfo);
  }

  const ShowUserInfo = () => {
    if(user) {
      return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Menu/>
          <Text style={{fontSize: 35, fontWeight: 'bold', marginBottom: 20}}>Bienvenido</Text>
          <Image source={{uri: user.picture}} style={{width: 100, height: 100, borderRadius: 50}} />
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{user.name}</Text>
        </View>
        
      )
    
    }
  } 

  return (
    
      <View style={styles.container} resizeMode="cover">
      {user && <ShowUserInfo />}
      {user === null &&
        <ImageBackground source={imagenAvion} style={styles.container2}>
          <Text style={{fontSize: 35, fontWeight: 'bold'}}>Welcome</Text>
          <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 20, color: 'gray'}}>Please login</Text>
          <TouchableOpacity style={styles.boton} disabled={!request} 
            onPress={() => {
              promptAsync();
            }}>
            <Text style={styles.texto}>"La caja Negra"</Text> 
          </TouchableOpacity>
        </ImageBackground>
      }
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