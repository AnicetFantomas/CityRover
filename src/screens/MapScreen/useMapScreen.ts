import { useEffect, useRef, useState } from "react";
import MapView, { UserLocationChangeEvent } from "react-native-maps";
import { useUserLocationStateContext } from "../../context/UserLocationStateContext";

const LATITUDE_DELTA = 0.0022;
const LONGITUDE_DELTA = 0.005;

const useMapScreen = () => {
  const mapRef = useRef<MapView>(null);
  const [modalVisible, setModalVisible] = useState(false);
  
  const {userLocation, setUserLocation} = useUserLocationStateContext()
  
 

const handleMapSearchPress = () => {
  setModalVisible(true);
} 

  const handleModalClose = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    if (userLocation) {
      mapRef.current?.animateToRegion({
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
    }
  }, [userLocation]);

  const handleUseLocationChange = ({
    nativeEvent: { coordinate },
  }: UserLocationChangeEvent) => {
    if (coordinate) {
      setUserLocation({
        coords: {
          latitude: coordinate.latitude,
          longitude: coordinate.longitude,
        },
      })
    }
  };

  // console.log(userLocation)


  return {
    models: { mapRef, modalVisible},
    operations: {
      handleUseLocationChange,
      handleMapSearchPress,
      handleModalClose
    },
  };
};

export default useMapScreen;
