import React from "react";
import { StyledMapView } from "./MapScreen.styles";
import useMapScreen from "./useMapScreen";
import RoundButton from "../components/RoundButton/RoundButton";

const MapScreen = () => {
  const { operations, models } = useMapScreen();

  return (
    <>
      <StyledMapView
        ref={models.mapRef}
        showsUserLocation
        onUserLocationChange={operations.handleUseLocationChange}
        showsMyLocationButton={false}
      />
      <RoundButton />
    </>
  );
};

export default MapScreen;
