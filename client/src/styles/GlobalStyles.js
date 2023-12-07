import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  html {
      /* scroll-behavior: smooth; */
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    position: relative;
  }

  button, input {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default GlobalStyles