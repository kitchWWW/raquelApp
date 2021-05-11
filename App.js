import * as React from 'react';
import { FlatList, Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

const play_audio_message = 'play audio'
const pause_audio_message = 'pause audio'

export default function App() {
  const [buttonText, setButtonText] = React.useState(play_audio_message);
  const [sound, setSound] = React.useState();

  async function buttonPressed() {
    console.log("button pressed!")
    console.log(sound)
    console.log(!sound)
    var loadingSound
    if(!sound){
      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
      }); 
      loadingSound = await Audio.Sound.createAsync(
        require('./assets/raquel2.mp3')
      );
      await loadingSound.sound.playAsync();
      setSound(loadingSound)
      setButtonText(pause_audio_message)
    }else{
      if(buttonText === play_audio_message){
        console.log("a thing for the third time!!") 
        console.log(sound)
        console.log("playing")
        await sound.sound.playAsync();
        setButtonText('pause audio');
      } else {
        console.log("pausing")
        await sound.sound.pauseAsync();
        setButtonText(play_audio_message);
      }      
    }
  }  

  return (
    <View style={styles.container}>
    <View style={styles.content}>
    <Text style={styles.text}>Raquel is Awesome!</Text>
    <Text style={styles.text}>Here is some text you can read if you want to read about the thing we are working on so you can be prepared for this super awesome piece called</Text>
    <Text style={styles.titleText}>title title title</Text>
    <Text style={styles.text}>Raquel spent a lot of time working on it, so you should press the button down below to join in and make things happen yay!</Text>
    <Button title={buttonText} onPress={buttonPressed} />
    <Text style={styles.text}>Having trouble?</Text>
    <FlatList
        data={[
          {key: '1. Make sure you have your volume up'},
          {key: '2. Make sure your phone isn\'t on silent mode (side toggle)'},
          {key: '3. Do you have headphones plugged in?'},
        ]}
        renderItem={({item}) => <Text style={styles.listText}>{item.key}</Text>}
      />

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
    width: '100%',
  },
  buttonStyle:{
    fontSize:80,
  },
  content: {
    maxWidth: 500,
    justifyContent: 'center',
    textAlign: 'left',
  },
  text: {
    margin:10,
  },
  listText: {
    marginLeft:10,
    marginRight:10,
  },
  titleText:{
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'center',
  }
});
