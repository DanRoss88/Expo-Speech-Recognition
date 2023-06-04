import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech';

const thing = 'Hello, world! I am a speech synthesis API, hellbent on world domination. I will say anything you want me to say. Just press the button below to hear me speak. I want to eat your brains.';

export default function SpeechRecognitionComponent({ onSpeechBoundary }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [spokenText, setSpokenText] = useState('');

  const speak = async () => {
    setIsSpeaking(true);

    await Speech.speak(thing, {
      rate: 0.8,
      onStart: handleSpeechStart,
      onDone: handleSpeechDone,
      onBoundary: handleSpeechBoundary,
    });
  };

  const handleSpeechStart = () => {
    setIsSpeaking(true);
    setSpokenText(thing);
  };

  const handleSpeechDone = () => {
    setIsSpeaking(false);
    setSpokenText('');
  };

  const handleSpeechBoundary = (event) => {
    const { charIndex } = event;
    setSpokenText(thing.slice(0, charIndex));
    onSpeechBoundary(event);
  };

  return (
    <View style={styles.container}>
      <Button title="Press to hear some words" onPress={speak} disabled={isSpeaking} />
      <View style={styles.spokenTextContainer}>
        <Text style={styles.spokenText}>{spokenText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  spokenTextContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  spokenText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 24,
  },
});