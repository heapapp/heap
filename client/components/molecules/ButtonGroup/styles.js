import styled, { css } from 'styled-components'

export const StyledGroup = styled.div(
   ({ theme: { size } }) => css`
      display: flex;
      button {
         margin-left: ${size.sm}px;
      }
   `
)
