import React from 'react'

import { StyledTextButton, StyledIconButton, StyledComboButton } from './styles'

export const TextButton = ({ children, ...props }) => (
   <StyledTextButton {...props}>{children}</StyledTextButton>
)

export const IconButton = ({ children, ...props }) => (
   <StyledIconButton {...props}>{children}</StyledIconButton>
)

export const ComboButton = ({ children, ...props }) => (
   <StyledComboButton
      position={typeof children[0] === 'string' ? 'right' : 'left'}
      {...props}
   >
      {children}
   </StyledComboButton>
)
