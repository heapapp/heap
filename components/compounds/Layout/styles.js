import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Roobert', sans-serif;
   }

   body {
      -o-font-smoothing: antialiased;
      -moz-font-smoothing: antialiased;
      -webkit-font-smoothing: antialiased;
      font-family: 'Roobert', sans-serif;
      color: ${({ theme }) => theme.colors.literalWhite};
      background: ${({ theme }) => theme.colors.moreDark};
   }

   @font-face {
      font-family: 'Roobert';
      font-style: normal;
      font-weight: 300;
      src: url('/static/fonts/RoobertLight.woff') format('woff');
   }

   @font-face {
      font-family: 'Roobert';
      font-style: normal;
      font-weight: 400;
      src: url('/static/fonts/RoobertRegular.woff') format('woff');
   }

   @font-face {
      font-family: 'Roobert';
      font-style: normal;
      font-weight: 500;
      src: url('/static/fonts/RoobertMedium.woff') format('woff');
   }

   @font-face {
      font-family: 'Roobert';
      font-style: normal;
      font-weight: 600;
      src: url('/static/fonts/RoobertSemiBold.woff') format('woff');
   }

   @font-face {
      font-family: 'Roobert';
      font-style: normal;
      font-weight: 700;
      src: url('/static/fonts/RoobertBold.woff') format('woff');
   }

   @font-face {
      font-family: 'Roobert';
      font-style: normal;
      font-weight: 800;
      src: url('/static/fonts/RoobertHeavy.woff') format('woff');
   }
`
