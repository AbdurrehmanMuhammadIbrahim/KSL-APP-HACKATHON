import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigation from './Navigator/navigation';
import { StyleSheet, Text, View ,Image,TextInput ,TouchableOpacity,ImageBackground } from 'react-native';
// import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  return (
    <View style={styles.container}>


     
    <Navigation/>

      
    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});
