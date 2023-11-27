import React from 'react'
import { StyledMapView } from './MapScreen.styles'
import useMapScreen from './useMapScreen'

const MapScreen = () => {
  const {operations, models} = useMapScreen()
   
  
  return (
    <StyledMapView ref={models.mapRef} showsUserLocation onUserLocationChange={operations.handleUseLocationChange} showsMyLocationButton={false}/>
  )
}

export default MapScreen
