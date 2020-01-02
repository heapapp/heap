import React from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'

const Anchor = ({ children, ...props }) => (
   <Link {...props}>
      <StyledLink>{children}</StyledLink>
   </Link>
)

export default Anchor

const StyledLink = styled.a(
   ({ theme: { colors, size } }) => css`
      font-size: ${size.sm}px;
      cursor: pointer;
      font-weight: 300;
      line-height: ${size.md}px;
      letter-spacing: 0.2px;
      text-decoration: none;
      color: ${colors.blue['100']};
      &:hover {
         text-decoration: underline;
      }
   `
)
