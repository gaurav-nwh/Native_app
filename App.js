import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import HomeScreen from './SinglePages/Home';
import ContactScreen from './SinglePages/Contact';
import LoginScreen from './SinglePages/Login';
import AllProjects from './SinglePages/AllProjects';
import SubmitAttendance from './SubmitAttendance/SubmitAttendance';


function App() {
  const [screen, setScreen] = useState('Home');

  const goToScreen = (screenName) => {
    setScreen(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Button title="Home" onPress={() => goToScreen('Home')} />
        <Button title="Contact" onPress={() => goToScreen('Contact')} />
        <Button title="Login" onPress={() => goToScreen('Login')} />
      </View>
      {screen === 'Home' && <HomeScreen />}
      {screen === 'Contact' && <ContactScreen />}
      {screen === 'Login' && <LoginScreen goToScreen={goToScreen} />}
      {screen === 'AllProjects' && <AllProjects goToScreen={goToScreen} />} 
      {screen === 'SubmitAttendance' && <SubmitAttendance />} 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default App;
