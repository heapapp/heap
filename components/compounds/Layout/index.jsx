import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {} from './styles'

const theme = {
   color: '#000',
}

const Layout = ({ children }) => (
   <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Layout
