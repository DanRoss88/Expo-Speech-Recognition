import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import * as Speech from 'expo-speech';

const SpeechRecognitionComponent = () => {
  const speak = async () => {
    const thingToSay = 'Hello, world! I am a speech synthesis API';

    const voices = await Speech.getAvailableVoicesAsync();
    const samVoice = voices.find((voice) => voice.name === 'Samantha');
    const defaultVoice = voices.find((voice) => voice.name === 'Alex');
    
    if (samVoice) {
      Speech.speak(thingToSay, { voice: samVoice.identifier });
    } else {
      // Fallback to the default voice if Samantha voice is not available
      Speech.speak(thingToSay, { voice: defaultVoice.identifier });
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Press to hear some words" onPress={speak} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SpeechRecognitionComponent;
