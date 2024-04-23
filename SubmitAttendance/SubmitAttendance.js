import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, Platform, PermissionsAndroid, Button, Image } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';

function SubmitAttendance() {
  const [hasPermission, setHasPermission] = useState(null);
  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs access to your camera.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setHasPermission(true);
        } else {
          setHasPermission(false);
        }
      } catch (err) {
        console.warn(err);
      }
    } else if (Platform.OS === 'ios') {
      setHasPermission(true);
    }
  };

  const launchCamera = () => {
    ImageCropPicker.openCamera({ mediaType: 'photo' }).then(image => {
      setImageUri(image.path);
    }).catch(error => {
      console.log('Error:', error);
    });
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting camera permission...</Text>
      </View>
    );
  } else if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>Camera permission denied</Text>
        <Button title="Request Permission" onPress={requestPermissions} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Camera permission granted</Text>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : (
        <Button title="Take Photo" onPress={launchCamera} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
  },
});

export default SubmitAttendance;
