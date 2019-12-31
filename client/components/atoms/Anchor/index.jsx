import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Anchor = ({ children, ...props }) => (
   <Link {...props}>
      <StyledLink>{children}</StyledLink>
   </Link>
)

export default Anchor

const StyledLink = styled.a`
   font-size: 16px;
   cursor: pointer;
   font-weight: 300;
   line-height: 24px;
   letter-spacing: 0.2px;
   text-decoration: none;
   color: ${({ theme }) => theme.colors.blue['100']};
   &:hover {
      text-decoration: underline;
   }
`
