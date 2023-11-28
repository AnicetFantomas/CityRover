import styled from "@emotion/native";
import { scale } from "react-native-size-matters";

export const StyledDivider = styled.View(({theme}) => {
    return {
        height:scale(1),
        width: '100%',
        backgroundColor: theme.colors.components.divider.backgroundColor
    }
})