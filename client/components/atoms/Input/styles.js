import styled from 'styled-components'

export const StyledInput = styled.input`
   height: 40px;
   width: 360px;
   border: none;
   font-size: 16px;
   font-weight: 500;
   border-radius: 8px;
   padding: 0 12px 3px 12px;
   background: ${({ theme }) => theme.colors.dark};
   color: ${({ theme }) => theme.colors.literalWhite};
   &::placeholder {
      color: ${({ theme }) => theme.colors.mutedDark};
   }
`
