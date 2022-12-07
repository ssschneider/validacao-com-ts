import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #f1f1f1;
        font-family: 'Roboto', 'Open Sans', sans-serif;
    }

    body {
        background-color: #0e0e0e;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default GlobalStyle;