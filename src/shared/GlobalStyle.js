import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root{
    --color-point1: #FBE0C3;
    --color-point2: #FFBB98;
    --color-point3: #7D8E95;
    --color-point4: #344648;
  }
  @font-face {
      font-family: 'Goyang';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Goyang.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    outline : none;
    font-family: 'Goyang';
  }

  body {
    /* overflow: hidden; */
    width: 100vw;
    height: 100vh;
  }

  html {
    font-size: 10px;
  }
`;

export default GlobalStyle;
