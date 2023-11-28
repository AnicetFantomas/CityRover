import { useEffect, useRef, useState } from "react";
import MapView, { UserLocationChangeEvent } from "react-native-maps";

const LATITUDE_DELTA = 0.0022;
const LONGITUDE_DELTA = 0.005;

const useMapScreen = () => {
  const mapRef = useRef<MapView>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [userLocation, setUserLocation] =
    useState<UserLocationChangeEvent["nativeEvent"]["coordinate"]>();
  const handleUseLocationChange = ({
    nativeEvent: { coordinate },
  }: UserLocationChangeEvent) => {
    setUserLocation(coordinate);
  };

const handleMapSearchPress = () => {
  setModalVisible(true);
} 

  useEffect(() => {
    if (userLocation) {
      mapRef.current?.animateToRegion({
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
    }
  }, [userLocation]);



  return {
    models: { mapRef, modalVisible},
    operations: {
      handleUseLocationChange,
      handleMapSearchPress
    },
  };
};

export default useMapScreen;
