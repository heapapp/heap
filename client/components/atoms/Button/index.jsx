import React from 'react'

import { StyledTextButton } from './styles'

export const TextButton = ({ children, ...props }) => (
   <StyledTextButton {...props}>{children}</StyledTextButton>
)
