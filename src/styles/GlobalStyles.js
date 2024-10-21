import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Luckiest Guy", cursive;
        font-weight: lighter;
    }

    ::-webkit-scrollbar {
        width: 11px;
        background-color: #030637;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #910A67;
        border-radius: 50px;
        border: 1px solid #030637;
    }
`

export default GlobalStyle
