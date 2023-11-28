import React from "react";
import { Container, StyledMapView } from "./MapScreen.styles";
import useMapScreen from "./useMapScreen";
import RoundButton from "../../components/RoundButton/RoundButton";
import MapSearchBar from "../../components/RoundButton/MapSearchBar/MapSearchBar";
import DestinationModal from "../../components/DestintaionModal/DestinationModal";

const MapScreen = () => {
  const { operations, models } = useMapScreen();

  return (
    <Container>
      <StyledMapView
        ref={models.mapRef}
        showsUserLocation
        onUserLocationChange={operations.handleUseLocationChange}
        showsMyLocationButton={false}
      />
      <MapSearchBar onPress={operations.handleMapSearchPress}/>
      <RoundButton icon="ios-menu-outline" onPress={() => console.log("menu")}/>
      <DestinationModal visible={models.modalVisible}/>
    </Container>
  );
};

export default MapScreen;
