import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    * {
        font-family: 'Outfit', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #10141E;
        min-height: 100vh;
    }

    a{
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyles;
