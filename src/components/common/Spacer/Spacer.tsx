import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface SpacerProps {
  height?: number;
  width?: number;
}

const Spacer = ({ height, width }: SpacerProps) => {
  const styles = StyleSheet.create({
    spacer: {
      height,
      width,
    },
  });

  return <View style={styles.spacer} />;
};

export default Spacer;
