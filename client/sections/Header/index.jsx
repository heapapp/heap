import React from 'react'
import Link from 'next/link'

import { StyledHeader, Brand } from './styles'

import Logo from '../../assets/Logo'

const Header = () => {
   return (
      <StyledHeader>
         <Brand>
            <Link href="/">
               <a>
                  <Logo />
               </a>
            </Link>
         </Brand>
      </StyledHeader>
   )
}

export default Header
