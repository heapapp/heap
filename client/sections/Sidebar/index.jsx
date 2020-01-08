import React from 'react'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'

import {
   StyledSidebar,
   Section,
   List,
   ListItem,
   StyledHeader,
   Brand,
   Header,
} from './styles'

import Logo from '../../assets/Logo'

const Sidebar = () => {
   const router = useRouter()
   const { title } = router.query
   const [codeMenu] = React.useState([
      { title: 'React', link: '/code/react' },
      { title: 'TypeScript', link: '/code/typescript' },
      { title: 'GraphQL', link: '/code/graphql' },
      { title: 'Swelte', link: '/code/swelte' },
   ])
   return (
      <StyledSidebar>
         <StyledHeader>
            <Brand>
               <Link href="/">
                  <a>
                     <Logo />
                  </a>
               </Link>
            </Brand>
         </StyledHeader>
         <Section>
            <Header>Code</Header>
            <List>
               {codeMenu.map(menuItem => (
                  <ListItem
                     key={menuItem.title}
                     onClick={() => Router.push(menuItem.link)}
                     isActive={title === menuItem.title.toLowerCase()}
                  >
                     {menuItem.title}
                  </ListItem>
               ))}
            </List>
         </Section>
      </StyledSidebar>
   )
}

export default Sidebar
