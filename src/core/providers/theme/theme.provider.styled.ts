// Vendors
import { createGlobalStyle } from 'styled-components';

const ThemeProviderStyled = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
  }
  body {
    -webkit-font-smoothing: antialiased;
    display: flex;
    flex-direction: column;
    font-family: 'Inter Variable', sans-serif;
    line-height: 1;
    min-height: 100dvh;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  canvas,
  img,
  picture,
  svg,
  video {
    display: block;
    max-width: 100%;
  }
  #root,
  #__next {
    display: flex;
    flex-direction: column;
    flex: 1;
    isolation: isolate;
  }
`;

export { ThemeProviderStyled };
