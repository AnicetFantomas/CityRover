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

const FlatListHeader = () => {
  const insets = useSafeAreaInsets();
  return (
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
          <DestinationInput />
        </InputsContainer>
      </HorizontalContainer>
    </Container>
  );
};

export default FlatListHeader;
