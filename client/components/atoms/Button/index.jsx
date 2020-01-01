import React from 'react'

import { StyledTextButton, StyledIconButton } from './styles'

export const TextButton = ({ children, ...props }) => (
   <StyledTextButton {...props}>{children}</StyledTextButton>
)

export const IconButton = ({ children, ...props }) => (
   <StyledIconButton {...props}>{children}</StyledIconButton>
)
