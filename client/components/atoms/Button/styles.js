import styled, { css } from 'styled-components'

export const StyledButton = styled.button(
   ({ variant, theme, withIcon, position }) => css`
      width: auto;
      height: 40px;
      border: none;
      font-size: 14px;
      padding: 0 12px;
      cursor: pointer;
      font-weight: 500;
      border-radius: 8px;
      letter-spacing: 0.3px;
      vertical-align: bottom;
      ${variant === 'primary' &&
         css`
            color: ${theme.colors.white};
            background: ${theme.colors.blue['400']};
         `};
      ${variant === 'secondary' &&
         css`
            color: ${theme.colors.white};
            background: ${theme.colors.dark['200']};
         `};
      ${withIcon &&
         css`
            display: inline-flex;
            align-items: center;
         `}
      ${withIcon &&
         position &&
         css`
            span {
               ${position === 'left' &&
                  css`
                     margin-left: 8px;
                  `}
               ${position === 'right' &&
                  css`
                     margin-right: 8px;
                  `}
            }
         `}
   `
)
