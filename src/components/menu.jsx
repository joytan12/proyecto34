import { Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';

import Config from './config';
import Grab from './grabadora';

// Thanks for watching
const Tab =createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
}
export default function Menu() {
  return (
       <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen
          name="Home" 
          component={Grab} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <Entypo name="home" size={24} color={focused ? "#16247d": "#111"} />
                  <Text style={{fonSize: 12, color: "#16247d"}}>HOME</Text>
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="Config" 
          component={Config} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <Entypo name="home" size={24} color={focused ? "#16247d": "#111"} />
                  <Text style={{fonSize: 12, color: "#16247d"}}>Config</Text>
            </View>
              )
            }
          }}
          />
          
       </Tab.Navigator>
)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
});