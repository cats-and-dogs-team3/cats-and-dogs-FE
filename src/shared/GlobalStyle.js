import { createGlobalStyle } from "styled-components";
export const supportDeviceSize = 768;
export const supportDeviceSize_ = 1100;

const GlobalStyle = createGlobalStyle`


  :root{
    --color-point1: #FBE0C3;
    --color-point2: #FFBB98;
    --color-point3: #7D8E95;
    --color-point4: #344648;

    //sign-up
    --color-yellow: #F8D706;
  --color-gray: #B2B2B2;
  --color-primary: #2E90FA;
  --color-light-gray:#7F7F7F;
  --color-login-background:#F6F6F6;
  --color-black:#2F1B1A;
  --color-white:#FFFFFF;
  --color-red:#F04438;
  --color-subtle-gray:#CCCCCC;
  --color-primary-invalid:#B2DDFF;
  }
  @font-face {
      font-family: 'Goyang';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Goyang.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  html {
    font-size: 62.5%; // 1rem = 10px 로 변경 한 것, 바꾼 이유는 사파리에서 폰트가 너무 작은것은 허용하지 않기 때문.
    // 참고링크 = https://stackoverflow.com/questions/68790660/setting-root-font-size-not-affecting-rem-units-in-safari-for-margin-padding-et
    // 128px => 12.8rem , 4px => 0.4rem 가능!
    @media all and (max-width: ${supportDeviceSize_}px) {
            font-size: 42%;
        }
        @media all and (max-width: ${supportDeviceSize}px) {
            font-size: 30.25%;
        }
 
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    outline : none;
  }

  body {
    font-family: 'Goyang';
    font-size: 1.6rem;
    color: var(--color-point4);
    width: 100vw;
    height: 100vh;
    font-weight: 600;
  }
  
  
`;

export default GlobalStyle;
