import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 80rem;
    min-height: 50rem;
  }
`;

export default GlobalStyle;
