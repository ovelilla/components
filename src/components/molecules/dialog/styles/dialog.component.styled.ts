// Vendors
import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ hasHorizontalScroll: boolean; hasVerticalScroll: boolean }>`
 ${({ hasHorizontalScroll, hasVerticalScroll }) =>
   (hasHorizontalScroll || hasVerticalScroll) &&
   css`
     body {
       height: 100%;
       left: 0;
       position: fixed;
       top: 0;
       width: 100%;
       ${hasHorizontalScroll && 'overflow-x: scroll;'}
       ${hasVerticalScroll && 'overflow-y: scroll;'}
     }
   `}
`;

export { GlobalStyle };
