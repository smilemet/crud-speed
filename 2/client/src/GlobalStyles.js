import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  *{
    box-sizing: border-box;
  }

  body {
    position: relative;

    #root {
      min-height: 100vh;
      display: flex;
      flex-direction: column;

      main {
        flex-grow: 1;
      }
    }
  }

  .inner {
    max-width: 900px;
    margin: 0 auto;
  }
`;

export default GlobalStyles;
