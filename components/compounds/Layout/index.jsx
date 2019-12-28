import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles'

const theme = {
   colors: {
      dark: '#303035',
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
      {children}
   </ThemeProvider>
)

export default Layout
