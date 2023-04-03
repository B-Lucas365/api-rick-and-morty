import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background:linear-gradient(0deg, #101010 0%, #1A1A1A 50.52%, #272727 100%) repeat no-repeat;
        --text-color: #fff;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }
    
    body{
        background: var(--background);
        min-height: 100vh;
    }
`