import { fetchUserInfoAsync } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//import Main from "../components/Main.jsx";

// import Main from './src/components/Main.jsx'

// export default function app() {
//     return <Main />
// }


const imagenAvion = require("../imagenes/caja.jpg");
WebBrowser.maybeCompleteAuthSession();
export default function Login() {

  const [accessToken, setAccessToken] = useState("");
  const [user, setUser] = useState(null);

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    androidClientId: '971345097587-dimt50ogkvaj5di1hqlakhe4bh3mukd8.apps.googleusercontent.com',
    expoClientId: '971345097587-dimt50ogkvaj5di1hqlakhe4bh3mukd8.apps.googleusercontent.com',
    iosClientId: '971345097587-dimt50ogkvaj5di1hqlakhe4bh3mukd8.apps.googleusercontent.com',
  });

  

  useEffect(() => {
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
          <Text style={{fontSize: 35, fontWeight: 'bold', marginBottom: 20}}>Welcome</Text>
          <Image source={{uri: user.picture}} style={{width: 100, height: 100, borderRadius: 50}} />
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{user.name}</Text>
        </View>
      )
    }
  }

  return (
    <ImageBackground source={imagenAvion} resizeMode="cover" style={styles.container2}>
      <View style={styles.container}>
        {user && <ShowUserInfo />}
        {user === null &&
            <>
            <Text style={{fontSize: 35, fontWeight: 'bold'}}>Welcome</Text>
            <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 20, color: 'gray'}}>Please login</Text>
            <TouchableOpacity style={styles.boton}disabled={!request}
              onPress={() => {
                promptAsync();
              }}>
              <Text style={styles.texto}>"La caja Negra"</Text> 
            </TouchableOpacity>
          </>
        }
      </View>  
    </ImageBackground>
    
  );


  return (
    
      <ImageBackground source={imagenAvion} resizeMode="cover" style={styles.container2}>
        
        <Text style={styles.titulo}> Bienvenido a  </Text>
        <Text style={styles.titulo}>"La caja Negra"</Text>
        <View>
          {user === null ? (
              <TouchableOpacity style={styles.boton}disabled={!request}
              onPress={() => {
                promptAsync();
              }}>
              <Text style={styles.texto}>"La caja Negra"</Text> 
            </TouchableOpacity>
          ) : (
            <View style={{flex:1}}>
              <Text style={{fontSize:35, fontWeight:"bold"}}>Holi compadre {user.name}</Text>
              <Image source={{uri: user.picture}}/>
            </View>
            
          )}
        </View>
      </ImageBackground>
    
  );
}

const styles = StyleSheet.create({

  container2: {
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