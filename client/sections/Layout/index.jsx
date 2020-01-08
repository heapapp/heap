import React from 'react'

import { HeapThemeProvider } from '@heapapp/ui'

import { GlobalStyle, StyledLayout } from './styles'

import { Sidebar, Main } from '../'

const Layout = ({ children }) => (
   <HeapThemeProvider>
      <GlobalStyle />
      <StyledLayout>
         <Sidebar />
         <Main>{children}</Main>
      </StyledLayout>
   </HeapThemeProvider>
)

export default Layout
