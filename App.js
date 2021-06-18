import React from "react";
import { ImageBackground, StyleSheet, Text, View, Button} from "react-native";
import { Audio } from 'expo-av';
import AppLoading from 'expo-app-loading';


const play_audio_message = 'play audio'
const pause_audio_message = 'pause audio'

import { useFonts, Lusitana_400Regular, Lusitana_700Bold } from '@expo-google-fonts/lusitana';
import { Montserrat_100Thin , Montserrat_400Regular_Italic} from '@expo-google-fonts/montserrat';


import image from './assets/background.jpg'

export default function App() {

  const [buttonText, setButtonText] = React.useState(play_audio_message);
  const [sound, setSound] = React.useState();

  let [fontsLoaded] = useFonts({
    Lusitana_400Regular,
    Lusitana_700Bold,
    Montserrat_100Thin,
    Montserrat_400Regular_Italic

  });

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
if (!fontsLoaded) {
    return <AppLoading/>;
  } else {
  return (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.titletext}>Polyphonic Interlace </Text>
      <Text style={styles.authorText}>Raquel Acevedo Klein </Text>
      <View style={styles.buttonStyle}>
      <Button title={buttonText} onPress={buttonPressed}   touchSoundDisabled={true}        color="#f194ff" style={styles.buttonStyle}/>
      </View>
      <Text style={styles.text}>
This symphonious, surround-sound performance invites you to travel amidst a sea of voices, emerging from several directions. Each track has been pre-recorded by composer and vocalist Raquel Acevedo Klein, who weaves her own voice into a polyphonic tapestry of stories from across New York City at the cusp of reopening. All are welcome to play parts of the music from a smartphone. Press "Play Audio" to begin.
</Text>
      <Text style={styles.text}>
      Art and music by Raquel Acevedo Klein. App by Brian Ellis
      </Text>

    </ImageBackground>
  </View>
);
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  buttonStyle: {
    marginTop:20,
    marginLeft:20,
    marginRight:20,
  },
  titletext: {
    color: "black",
    fontSize: 42,
    fontWeight: "bold",
        fontFamily: 'Montserrat_100Thin',

    textAlign: "right",
    backgroundColor: "#FFFFFFa0"
  },
  authorText: {
    color: "black",
    fontSize: 25,
        fontFamily: 'Montserrat_400Regular_Italic',

    fontWeight: "bold",
    textAlign: "right",
    backgroundColor: "#FFFFFFa0"
  },
  text: {
    borderWidth: 20,
    borderColor:"#FFFFFF00",
    margin:20,
    color: "black",
    fontSize: 20,
    fontFamily: 'Lusitana_400Regular',
    textAlign: "left",
    backgroundColor: "#FFFFFFa0"
  }
});
