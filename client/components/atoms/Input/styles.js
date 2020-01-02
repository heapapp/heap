import styled, { css } from 'styled-components'

export const StyledInput = styled.input(
   ({ theme: { colors, size } }) => css`
      height: ${size.xl}px;
      width: 360px;
      border: none;
      font-size: ${size.sm}px;
      font-weight: 500;
      border-radius: ${size.xs}px;
      padding: 0 12px 3px 12px;
      background: ${colors.dark['200']};
      color: ${colors.white};
      &::placeholder {
         color: ${colors.dark['100']};
      }
   `
)
