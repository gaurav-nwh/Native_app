import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import api from '../CommomUtilities/api'; 
import AllProjects from '../SinglePages/AllProjects';

function LoginScreen({ goToScreen }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  

  const handleLogin = async () => {
    try {
      // Make a POST request to your API endpoint for user login using api.post
      const response = await api.post('/user/login', {
        username: username,
        password: password,
      });

      // If login is successful
      if (response && response.data) {
        // Perform actions after successful login
        Alert.alert('Login Successful');
        // Call the goToScreen function to navigate to AllProjects
        goToScreen('AllProjects');
      } else {
        // If login fails
        Alert.alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      // Handle any errors that occur during login
      console.error('An error occurred', error);
      Alert.alert('An error occurred. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  formContainer: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoginScreen;
