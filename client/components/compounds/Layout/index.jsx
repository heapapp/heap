import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, StyledLayout } from './styles'

import { Header, Sidebar, Main } from '../../index'

const theme = {
   colors: {
      dark: {
         400: '#19191C',
         300: '#1F1F23',
         200: '#303035',
         100: '#55555F',
      },
      blue: {
         400: '#1659DB',
         300: '#1A66FA',
         200: '#3E7FFF',
         100: '#7CA4F0',
      },
      white: '#FFFFFF',
      danger: '#E54D2B',
      success: '#0FD35E',
   },
   typography: {
      h1: { fS: '40px', fW: 500, lH: '60px' },
      h2: { fS: '32px', fW: 500, lH: '48px' },
      h3: { fS: '24px', fW: 500, lH: '36px' },
      h4: { fS: '20px', fW: 400, lH: '30px' },
      h5: { fS: '18px', fW: 300, lH: '27px' },
   },
}

const Layout = ({ children }) => (
   <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledLayout>
         <Header home="/" />
         <Sidebar />
         <Main>{children}</Main>
      </StyledLayout>
   </ThemeProvider>
)

export default Layout
