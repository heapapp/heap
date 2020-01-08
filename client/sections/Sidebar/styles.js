import styled, { css } from 'styled-components'

export const StyledSidebar = styled.aside`
   width: 240px;
   height: 100vh;
   background: ${({ theme }) => theme.colors.dark['300']};
`

export const Section = styled.section(
   ({ theme: { size } }) => css`
      margin-bottom: ${size.xl}px;
   `
)

export const Header = styled.header(
   ({ theme: { colors, size } }) => css`
      height: ${size.lg}px;
      display: flex;
      padding: 0 12px;
      font-size: 14px;
      font-weight: 600;
      align-items: center;
      text-transform: uppercase;
      color: ${colors.dark['100']};
      border-bottom: 1px solid ${colors.dark['200']};
   `
)

export const List = styled.ul``

export const ListItem = styled.li(
   ({ theme: { colors, size }, isActive }) => css`
      height: ${size.xl}px;
      display: flex;
      padding: 0 12px;
      font-size: ${size.sm}px;
      cursor: pointer;
      font-weight: 300;
      align-items: center;
      letter-spacing: 0.3px;
      color: ${colors.white};
      background: ${isActive ? colors.dark['400'] : 'transparent'};
      &:hover {
         background: ${colors.dark['400']};
      }
   `
)

export const StyledHeader = styled.header`
   height: 64px;
   display: flex;
   align-items: center;
`

export const Brand = styled.div(
   ({ theme: { colors, size } }) => css`
      width: 240px;
      display: flex;
      height: inherit;
      padding: 0 ${size.sm}px;
      align-items: center;
      background: ${colors.blue['400']};
   `
)
