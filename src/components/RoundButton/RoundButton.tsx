import React from 'react'
import { StyledPressable } from './RoundButton.styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { scale } from 'react-native-size-matters';

interface RoundedButtonProps {
  icon: 'ios-menu-outline'| 'arrow-back-outline';
  onPress: () => void;
}

const RoundButton = ({icon, onPress}: RoundedButtonProps) => {
  const insets = useSafeAreaInsets();
  return (
    <StyledPressable insets={insets} onPress={onPress}>
      <Icon name={icon} size={scale(27)} />
    </StyledPressable>
  )
}

export default RoundButton
