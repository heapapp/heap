import styled from 'styled-components'

export const StyledMain = styled.main`
   padding: 0 16px 16px 16px;
   height: calc(100vh - 64px);
   > div {
      height: 100%;
      padding: 16px;
      overflow-y: auto;
      border-radius: 8px;
      background: ${({ theme }) => theme.colors.dark['300']};
   }
`
