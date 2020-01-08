import React from 'react'

import { HeapThemeProvider } from '@heapapp/ui'

import { GlobalStyle } from './styles'

import { Header, Main } from '../'

const Layout = ({ children }) => (
   <HeapThemeProvider>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
   </HeapThemeProvider>
)

export default Layout
