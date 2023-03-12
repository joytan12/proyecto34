import React from 'react';
import { Text, View, Button} from 'react-native';

export default function HomeScreen({navigation}) {
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>Este seria la pantalla de inicio o menu</Text>
            <Button title="Go to Jane's profile" onPress={() => navigation.navigate('Profile', {name: 'Jane'}) } />
        </View>
    )
}
const ProfileScreen = ({navigation, route}) => {
    return <Text>This is {route.params.name}'s profile</Text>;
  };

