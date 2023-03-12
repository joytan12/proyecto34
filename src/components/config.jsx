import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Config({navigation}) {
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>Este seria la pantalla de inicio o menu</Text>
            <Button title="Go to Record page" onPress={() => navigation.navigate("Settings", {name: 'Jane'}) } />
        </View>
    )
}
const ProfileScreen = ({navigation, route}) => {
    return <Text>This is {route.params.name}'s profile</Text>;
  };