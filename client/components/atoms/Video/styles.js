import styled from 'styled-components'

export const StyledVideo = styled.div`
   cursor: pointer;
`

export const Thumbnail = styled.div`
   height: auto;
   overflow: hidden;
   border-radius: 8px;
   padding-top: 56.25%;
   margin-bottom: 16px;
   position: relative;
   background: ${({ theme }) => theme.colors.dark};
   img {
      position: absolute;
      top: -16.5%;
      width: 100%;
   }
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
