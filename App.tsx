import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MapScreen from "./src/screens/MapScreen/MapScreen";
import LocationPermissionService from "./src/services/LocationPermissionService";
import { ThemeProvider } from "./src/theme/ThemeProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
   <SafeAreaProvider>
     <ThemeProvider>
      <MapScreen />
      <LocationPermissionService />
    </ThemeProvider>
   </SafeAreaProvider>
  );
}
