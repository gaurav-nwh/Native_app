import { Alert } from 'react-native';

export async function errorHandler(func) {
  try {
    const result = await func;
    return result;
  } catch (error) {
    if (error.response) {
      if (error.response.data.error) {
        Alert.alert('Error', error.response.data.error);
      } else if (error.response.data.message) {
        Alert.alert('Error', error.response.data.message);
      } else if (error.response.status) {
        Alert.alert('Error', error.response.status.toString());
      }
    } else {
      Alert.alert('Error', error.message);
    }
  }
}
