import styled from "@emotion/native";
import { EdgeInsets } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";

interface StyledPressableProps {
  insets: EdgeInsets;
}

export const StyledPressable = styled.Pressable<StyledPressableProps>(
  ({ theme, insets }) => {
    return {
      width: scale(45),
      height: scale(45),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: scale(45 / 2),
      backgroundColor: "#fff",
      position: "absolute",
      top: insets.top || scale(15),
      left: scale(20),
      ...theme.shadows.primary(theme),
    };
  }
);


