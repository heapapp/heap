import React from 'react'

import { Heading } from '@heapapp/ui'

import { StyledHeading } from './styles'

const PageHeading = ({ children }) => {
   return (
      <StyledHeading>
         <Heading type="h3">{children}</Heading>
      </StyledHeading>
   )
}

export default PageHeading
