import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SpeechRecognitionComponent from './components/SpeechRecognition';

export default class App extends React.Component {
  render(){ 
  return (
    <View style={styles.container}>
    <View style={styles.paragraph}>
       <SpeechRecognitionComponent /> 
    </View>
    </View>
   
  );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
}) 