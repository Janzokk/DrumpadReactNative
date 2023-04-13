import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Audio } from 'expo-av';
import * as React from 'react';

export default function App() {
  return (
    <LinearGradient colors={['purple', 'black']} style={styles.container} start={{x:0, y:0}} end={{x:1, y:1}}>
      <View style={styles.row}>
        <Pad color = "#51d1f6" audio = "0"/>
        <Pad color = "#51d1f6" audio = "1"/>
        <Pad color = "#51d1f6" audio = "2"/>
      </View>
      <View style={styles.row}>
        <Pad color = "#FF0000" audio = "3"/>
        <Pad color = "#FF0000" audio = "4"/>
        <Pad color = "#FF0000" audio = "5"/>
      </View>
      <View style={styles.row}>
        <Pad color = "#a5d610" audio = "6"/>
        <Pad color = "#a5d610" audio = "7"/>
        <Pad color = "#a5d610" audio = "8"/>
      </View>
    </LinearGradient>
  );
}

const Pad = (props) =>{
  const sounds = [require('./assets/sounds/bass1.mp3'), require('./assets/sounds/bass2.mp3'), require('./assets/sounds/bass3.mp3'),
   require('./assets/sounds/tom1.mp3'),require('./assets/sounds/tom2.mp3'),require('./assets/sounds/tom3.mp3'),
   require('./assets/sounds/hihat1.mp3'),require('./assets/sounds/hihat2.mp3'),require('./assets/sounds/hihat3.mp3'),];

  const [sound, setSound] = React.useState(null);
  
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(sounds[props.audio]);
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }
  
  return(
    <View>
      <TouchableOpacity style={[styles.button , {backgroundColor : props.color}]} onPress={playSound}>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  },
  row:{
    flexDirection: "row",
  },
  button:{
    borderColor: "#black",
    borderRadius: 15,
    borderWidth: 1,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },

});
