import * as React from 'react';
import { Text, View, StyleSheet, Button, FileSystem } from 'react-native';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';

const Grab = () => {

  const [recording, setRecording] = React.useState();

  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync( Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('parando grabacion..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI();
    const currentDate = new Date();
    const directory = FileSystem.documentDirectory;
    const fileName = 'grabacion ' + currentDate + '.mp3';
    const newUri = directory + fileName;
    await FileSystem.moveAsync({
      from: uri,
      to: newUri,
    });
    
    console.log(currentDate);
    console.log('La grabacion a parado y se guardo en ', newUri);
  }

  return (
    <View style={styles.container}>
      <Button
        title={recording ? 'parar grabación' : 'comienza a grabar'}
        onPress={recording ? stopRecording : startRecording}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});

export default Grab