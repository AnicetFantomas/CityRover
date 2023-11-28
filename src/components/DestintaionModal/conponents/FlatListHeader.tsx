import React from 'react'
import { Container, HorizontalContainer } from './FlatlistHeader.styles'
import DestinationInput from '../../DestinationInput/DestinationInput'
import Spacer from '../../common/Spacer/Spacer'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { scale } from 'react-native-size-matters'

const FlatListHeader = () => {
    const insets = useSafeAreaInsets();
  return (
    <Container>
        <Spacer height={insets.top + scale(60)} />
        <HorizontalContainer>
            <Container>
                <DestinationInput placeholder='Your current location' disabled />
                <DestinationInput />
            </Container>
        </HorizontalContainer>
    </Container>
  )
}

export default FlatListHeader
