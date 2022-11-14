import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  *{
    box-sizing: border-box;
  }

  body {
    #root {
      display: flex;
      min-height: 100vh;
      flex-direction: column;

      main {
        flex-grow: 1;
      }
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
