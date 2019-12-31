import styled from 'styled-components'

export const StyledHeader = styled.header`
   height: 64px;
   width: 100vw;
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

export const Main = styled.main`
   display: flex;
   height: inherit;
   padding: 0 16px;
   align-items: center;
   width: calc(100vw - 240px);
`
