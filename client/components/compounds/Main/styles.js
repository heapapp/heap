import styled, { css } from 'styled-components'

export const StyledMain = styled.main(
   ({ theme: { colors, size } }) => css`
      padding: ${size.sm}px;
      height: 100vh;
      > div {
         height: 100%;
         padding: ${size.sm}px;
         overflow-y: auto;
         border-radius: ${size.xs}px;
         background: ${colors.dark['300']};
         &::-webkit-scrollbar {
            width: ${size.xs}px;
         }
         &::-webkit-scrollbar-thumb {
            border-radius: ${size.xs}px;
            background-color: ${colors.dark['200']};
         }
      }
   `
)
