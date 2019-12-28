import React from 'react'
import Link from 'next/link'

import { StyledHeader, Brand, Main } from './styles'

import Logo from '../../../assets/Logo'

const Header = ({ home, children }) => (
   <StyledHeader>
      <Brand>
         <Link href={home}>
            <a>
               <Logo />
            </a>
         </Link>
      </Brand>
      <Main>{children}</Main>
   </StyledHeader>
)

export default Header
