import React from 'react'
import { StyledSidebar, Section, Header, List, ListItem } from './styles'

const Sidebar = () => (
   <StyledSidebar>
      <Section>
         <Header>Code</Header>
         <List>
            <ListItem>JavaScript</ListItem>
            <ListItem>React</ListItem>
            <ListItem>TypeScript</ListItem>
            <ListItem>GraphQL</ListItem>
         </List>
      </Section>
   </StyledSidebar>
)

export default Sidebar
