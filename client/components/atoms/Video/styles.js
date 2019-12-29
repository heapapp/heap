import styled from 'styled-components'

export const StyledVideo = styled.div``

export const Thumbnail = styled.div`
   height: auto;
   padding-top: 56.25%;
   border-radius: 8px;
   margin-bottom: 16px;
   background: ${({ theme }) => theme.colors.dark};
`

export const Details = styled.div`
   display: grid;
   grid-template-columns: 40px 1fr;
   grid-column-gap: 16px;
   span {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      display: inline-block;
      background: ${({ theme }) => theme.colors.dark};
   }
`
