import { colors } from "./colors";
import type { Colors } from "./colors";

export const theme = {colors};

declare module '@emotion/react' {
    export interface Theme {
        colors: Colors;
    }
}