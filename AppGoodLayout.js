import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import image from './assets/background.jpg'

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.titletext}>Polyphonic Interlace </Text>
      <Text style={styles.authorText}>Raquel Acevedo Klein </Text>
      <Text style={styles.text}>
      here is some text about the thing that has very long text and is a full blown descripion about what is going on, the festival, and everything else.</Text>

    </ImageBackground>
  </View>
);

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
  marginThing: {
    margin:20,
  },
  titletext: {
    color: "black",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "right",
    backgroundColor: "#FFFFFFa0"
  },
  authorText: {
    color: "black",
    fontSize: 25,
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
    textAlign: "left",
    backgroundColor: "#FFFFFFa0"
  }
});

export default App;