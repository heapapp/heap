import styled, { css } from 'styled-components'

const selectType = (colors, type, typeColor) => {
   const color = typeColor.includes('.')
      ? colors[typeColor.split('.')[0]][typeColor.split('.')[1]]
      : colors[typeColor]

   switch (type) {
      case 'solid':
         return css`
            border: none;
            background: ${color};
         `
      case 'outline':
         return css`
            background: transparent;
            border: 1px solid ${color};
            &:hover {
               background: ${color};
               border: 1px solid transparent;
            }
         `
      default:
         return css`
            border: none;
            background: ${color};
         `
   }
}

export const StyledTextButton = styled.button(
   ({ theme: { colors, size }, type, typeColor }) => css`
      height: ${size.xl}px;
      padding: 0 12px;
      cursor: pointer;
      font-size: ${size.sm}px;
      border-radius: ${size.xs}px;
      color: ${colors.white};
      ${selectType(colors, type, typeColor)}
   `
)

export const StyledIconButton = styled.button(
   ({ theme: { colors, size } }) => css`
      width: ${size.xl}px;
      height: ${size.xl}px;
      cursor: pointer;
      border-radius: ${size.xs}px;
      background: transparent;
      border: 1px solid ${colors.dark['200']};
      &:hover {
         border: 1px solid transparent;
         background: ${colors.dark['200']};
      }
   `
)

export const StyledComboButton = styled.button(
   ({ theme: { colors, size }, type, typeColor, position }) =>
      css`
         height: ${size.xl}px;
         padding: 0 12px;
         cursor: pointer;
         font-size: ${size.sm}px;
         border-radius: ${size.xs}px;
         color: ${colors.white};
         display: flex;
         align-items: center;
         svg {
            margin: ${position === 'left'
               ? `0 ${size.xs}px 0 0`
               : `0 0 0 ${size.xs}px`};
         }
         ${selectType(colors, type, typeColor)}
      `
)
