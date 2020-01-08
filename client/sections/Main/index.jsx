import React from 'react'

import { StyledMain } from './styles'

const Main = ({ children }) => {
   return (
      <StyledMain>
         <div>{children}</div>
      </StyledMain>
   )
}

export default Main
