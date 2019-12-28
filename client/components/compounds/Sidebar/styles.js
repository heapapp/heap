import styled from 'styled-components'

export const StyledSidebar = styled.aside`
   width: 240px;
   height: calc(100vh - 64px);
   background: ${({ theme }) => theme.colors.sortaDark};
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
   color: ${({ theme }) => theme.colors.mutedDark};
   border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
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
   color: ${({ theme }) => theme.colors.literalWhite};
   &:hover {
      background: ${({ theme }) => theme.colors.moreDark};
   }
`
