import styled, { css } from 'styled-components'

export const StyledGroup = styled.div(
   ({ theme: { size }, direction }) => css`
      display: flex;
      button {
         ${direction === 'left' && `margin-left: ${size.sm}px;`};
         ${direction === 'right' && `margin-right: ${size.sm}px;`};
      }
   `
)
