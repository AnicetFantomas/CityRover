import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapScreen from './src/MapScreen/MapScreen';
import LocationPermissionService from './src/services/LocationPermissionService';

export default function App() {
  return (
    <View style={styles.container}>
     <MapScreen />
     <LocationPermissionService />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
