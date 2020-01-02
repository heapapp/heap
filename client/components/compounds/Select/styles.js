import styled from 'styled-components'

export const StyledSelect = styled.div`
   height: 40px;
   width: 240px;
   position: relative;
   border-radius: 8px;
   cursor: pointer;
   border: 1px solid ${({ theme: { colors } }) => colors.dark['200']};
   &:hover {
      background: ${({ theme: { colors } }) => colors.dark['200']};
   }
`

export const Input = styled.div`
   height: 38px;
   display: grid;
   align-items: center;
   grid-template-columns: 1fr 32px 32px;
   color: ${({ theme: { colors } }) => colors.blue['100']};
   div:first-child {
      height: 38px;
      display: flex;
      padding: 0 12px;
      align-items: center;
      user-select: none;
   }
   [data-type='icon'] {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
         stroke: ${({ theme: { colors } }) => colors.blue['100']};
      }
      span {
         width: 24px;
         height: 24px;
         display: flex;
         border-radius: 50%;
         align-items: center;
         justify-content: center;
         &:hover {
            background: ${({ theme: { colors } }) => colors.dark['300']};
         }
      }
   }
`

export const Options = styled.div`
   left: 0;
   top: 44px;
   width: 100%;
   z-index: 100;
   padding: 8px 0;
   overflow-y: auto;
   user-select: none;
   max-height: 176px;
   position: absolute;
   border-radius: 8px;
   background: ${({ theme: { colors } }) => colors.dark['200']};
   &::-webkit-scrollbar {
      width: 8px;
   }
   &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background-color: ${({ theme: { colors } }) => colors.dark['300']};
   }
`

export const Option = styled.div`
   color: #fff;
   height: 40px;
   display: flex;
   padding: 0 12px;
   align-items: center;
   background: ${({ theme: { colors }, isSelected }) =>
      isSelected && colors.dark['300']};
   &:hover {
      background: ${({ theme: { colors } }) => colors.dark['300']};
   }
`
