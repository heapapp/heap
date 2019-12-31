import styled from 'styled-components'

export const StyledTag = styled.span`
   height: 32px;
   padding: 0 12px;
   font-size: 14px;
   line-height: 32px;
   border-radius: 4px;
   display: inline-block;
   background: ${({ theme }) => theme.colors.dark['200']};
`
