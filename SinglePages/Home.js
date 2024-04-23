import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

function HomeScreen({ goToScreen }) {
  return (
    <ImageBackground source={require('./pic1.png')} style={styles.backgroundImage}>
      <View style={styles.centered}>
        <Text style={styles.appText}>Home Screen</Text>
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Text color on top of the image
  },
  linkText: {
    fontSize: 18,
    color: 'blue',
    marginTop: 10,
  },
});
