import React from "react";
import {
  Container,
  DecorationContainer,
  DecoratorCircle,
  DecoratorLine,
  DecoratorSquare,
  HorizontalContainer,
  InputsContainer,
} from "./FlatlistHeader.styles";
import DestinationInput from "../../DestinationInput/DestinationInput";
import Spacer from "../../common/Spacer/Spacer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";
import Divider from "../../common/Divider/Divider";

interface FlatListHeaderProps {
    destinationValue: string;
  onDestinationTextChange: (text: string) => void;
}

const FlatListHeader = ({destinationValue, onDestinationTextChange}: FlatListHeaderProps) => {
  const insets = useSafeAreaInsets();
  return (
   <>
    <Container>
      <Spacer height={insets.top + scale(60)} />
      <HorizontalContainer>
        <DecorationContainer>
          <DecoratorCircle />
          <DecoratorLine />
          <DecoratorSquare />
        </DecorationContainer>
        <Spacer width={scale(10)} />
        <InputsContainer>
          <DestinationInput placeholder="Your current location" disabled />
          <Spacer height={scale(10)} />
          <DestinationInput  value={destinationValue} onChangeText={onDestinationTextChange} />
        </InputsContainer>
      </HorizontalContainer>
    </Container>
    <Spacer height={scale(10)} />
    <Divider />
   </>
  );
};

export default FlatListHeader;
