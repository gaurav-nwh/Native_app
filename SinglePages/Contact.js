// ContactScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function ContactScreen({ goToScreen }) {
  return (
    <View style={styles.centered}>
      <Text style={styles.appText}>Contact Screen</Text>
      
    </View>
  );
}

export default ContactScreen;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  linkText: {
    fontSize: 18,
    color: 'blue',
    marginTop: 10,
  },
});
