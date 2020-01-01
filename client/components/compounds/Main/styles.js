import styled from 'styled-components'

export const StyledMain = styled.main`
   padding: 16px;
   height: 100vh;
   > div {
      height: 100%;
      padding: 16px;
      overflow-y: auto;
      border-radius: 8px;
      background: ${({ theme }) => theme.colors.dark['300']};
   }
`
