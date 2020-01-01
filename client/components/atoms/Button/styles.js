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
   ({ theme: { colors }, type, typeColor }) => css`
      height: 40px;
      padding: 0 12px;
      cursor: pointer;
      font-size: 16px;
      border-radius: 8px;
      color: ${colors.white};
      ${selectType(colors, type, typeColor)}
   `
)

export const StyledIconButton = styled.button(
   ({ theme: { colors } }) => css`
      width: 40px;
      height: 40px;
      cursor: pointer;
      border-radius: 8px;
      background: transparent;
      border: 1px solid ${colors.dark['200']};
      &:hover {
         border: 1px solid transparent;
         background: ${colors.dark['200']};
      }
   `
)

export const StyledComboButton = styled.button(
   ({ theme: { colors }, type, typeColor, position }) =>
      css`
         height: 40px;
         padding: 0 12px;
         cursor: pointer;
         font-size: 16px;
         border-radius: 8px;
         color: ${colors.white};
         display: flex;
         align-items: center;
         svg {
            margin: ${position === 'left' ? '0 8px 0 0' : '0 0 0 8px'};
         }
         ${selectType(colors, type, typeColor)}
      `
)
