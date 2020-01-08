import styled, { css } from 'styled-components'

export const StyledMain = styled.main(
   ({ theme: { colors, size } }) => css`
      padding: ${size.sm}px;
      height: calc(100vh - 56px);
      > div {
         height: 100%;
         overflow-y: auto;
         padding: ${size.sm}px;
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
