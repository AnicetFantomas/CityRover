import { Shadows, shadows } from './shadows';
import { colors } from "./colors";
import type { Colors } from "./colors";

export const theme = {colors, shadows};

declare module '@emotion/react' {
    export interface Theme {
        colors: Colors;
        shadows: Shadows;
    }
}