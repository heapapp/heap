import styled from 'styled-components'

export const StyledSidebar = styled.aside`
   width: 240px;
   height: 100vh;
   background: ${({ theme }) => theme.colors.dark['300']};
`

export const Section = styled.section`
   margin-bottom: 40px;
`

export const Header = styled.header`
   height: 32px;
   display: flex;
   padding: 0 12px;
   font-size: 14px;
   font-weight: 600;
   align-items: center;
   text-transform: uppercase;
   color: ${({ theme }) => theme.colors.dark['100']};
   border-bottom: 1px solid ${({ theme }) => theme.colors.dark['200']};
`

export const List = styled.ul``

export const ListItem = styled.li`
   height: 40px;
   display: flex;
   padding: 0 12px;
   font-size: 16px;
   cursor: pointer;
   font-weight: 300;
   align-items: center;
   letter-spacing: 0.3px;
   color: ${({ theme }) => theme.colors.white};
   background: ${({ isActive, theme }) =>
      isActive ? theme.colors.dark['400'] : 'transparent'};
   &:hover {
      background: ${({ theme }) => theme.colors.dark['400']};
   }
`

export const StyledHeader = styled.header`
   height: 64px;
   display: flex;
   align-items: center;
`
export const Brand = styled.div`
   width: 240px;
   display: flex;
   height: inherit;
   padding: 0 16px;
   align-items: center;
   background: ${({ theme }) => theme.colors.blue['400']};
`
