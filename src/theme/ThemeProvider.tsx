import { ThemeProvider as EmotionThemeProvider } from "@emotion/react"
import { ReactNode } from "react"
import { theme } from "./them"

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    return (
        <EmotionThemeProvider theme={theme}>
            {children}
        </ EmotionThemeProvider>
    )
}