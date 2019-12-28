import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, StyledLayout } from './styles'

const theme = {
   colors: {
      dark: '#303035',
      sortaDark: '#1F1F23',
      moreDark: '#19191C',
      mutedDark: '#55555F',
      denimBlue: '#1659DB',
      ligthBlue: '#7CA4F0',
      literalWhite: '#FFFFFF',
   },
}

const Layout = ({ children }) => (
   <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledLayout>{children}</StyledLayout>
   </ThemeProvider>
)

export default Layout
