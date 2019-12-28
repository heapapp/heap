import React from 'react'

import { StyledButton } from './styles'

const Button = ({ children, ...props }) => {
   if (props.withIcon) {
      return (
         <StyledButton {...props}>
            {props.position === 'left' ? (
               <>
                  {props.withIcon}
                  <span>{children}</span>
               </>
            ) : (
               <>
                  <span>{children}</span>
                  {props.withIcon}
               </>
            )}
         </StyledButton>
      )
   }
   return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
