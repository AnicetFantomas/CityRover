import React from "react";
import { Container, StyledMapView } from "./MapScreen.styles";
import useMapScreen from "./useMapScreen";
import RoundButton from "../../components/RoundButton/RoundButton";

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
      <RoundButton icon="ios-menu-outline" onPress={() => console.log("menu")}/>
    </Container>
  );
};

export default MapScreen;
