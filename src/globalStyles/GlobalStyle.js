import { createGlobalStyle } from "styled-components";
import NeueHansKendrick from "../assets/fonts/NeueHansKendrick-Regular.woff";

const GlobalStyle = createGlobalStyle`


@font-face {
font-family: "Neue Hans Kendrick Regular";
src: url(${NeueHansKendrick}) format('woff');
font-style: normal;
font-weight: normal;
}

*{
padding: 0;
margin: 0;
box-sizing: border-box;
}

 body{
    font-family: 'Neue Hans Kendrick Regular', sans-serif;
}

 button {
        cursor: pointer;
    }

    ul {
        list-style: none
    }

`;

export default GlobalStyle;
