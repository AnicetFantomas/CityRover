import { ThemeProvider as EmotionThemeProvider } from "@emotion/react"
import { ReactNode } from "react"
import { theme } from "./theme"

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