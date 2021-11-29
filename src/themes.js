import { createGlobalStyle } from "styled-components"
export const lightTheme= {
    body: '#fff',
    fontColor: '#000',
    zIndex: '2222',
}

export const darkTheme= {
    body: '#000',
    fontColor: '#fff'
}

export const GlobalStyles = createGlobalStyle`
    body{
        background: ${props=>props.theme.body};
        z-index: ${props=>props.theme.zIndex};
    }
`