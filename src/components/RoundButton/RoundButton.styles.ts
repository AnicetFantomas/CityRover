import styled from "@emotion/native";
import { scale } from "react-native-size-matters";

export const StyledPressable = styled.Pressable(({theme}) => {
    return {
        width: scale(45),
        height: scale(45),
        borderRadius: scale(45/2),
        backgroundColor: '#fff',
        position: 'absolute',
        top:20,
        left:20,
    };})