import styled, { css } from 'styled-components'

export const StyledSelect = styled.div(
   ({ theme: { colors, size } }) => css`
      height: ${size.xl}px;
      width: 240px;
      position: relative;
      border-radius: ${size.xs}px;
      cursor: pointer;
      border: 1px solid ${colors.dark['200']};
      &:hover {
         background: ${colors.dark['200']};
      }
   `
)

export const Input = styled.div(
   ({ theme: { colors, size } }) => css`
      height: ${size.xl - 2}px;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr ${size.lg}px ${size.lg}px;
      color: ${colors.blue['100']};
      div:first-child {
         height: ${size.xl - 2}px;
         display: flex;
         padding: 0 12px;
         align-items: center;
         user-select: none;
      }
      [data-type='icon'] {
         display: flex;
         align-items: center;
         justify-content: center;
         svg {
            stroke: ${colors.blue['100']};
         }
         span {
            width: ${size.md}px;
            height: ${size.md}px;
            display: flex;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            &:hover {
               background: ${colors.dark['300']};
            }
         }
      }
   `
)

export const Options = styled.div(
   ({ theme: { colors, size } }) => css`
      left: 0;
      top: 44px;
      width: 100%;
      z-index: 100;
      padding: ${size.xs}px 0;
      overflow-y: auto;
      user-select: none;
      max-height: 176px;
      position: absolute;
      border-radius: 8px;
      background: ${colors.dark['200']};
      &::-webkit-scrollbar {
         width: ${size.xs}px;
      }
      &::-webkit-scrollbar-thumb {
         border-radius: ${size.xs}px;
         background-color: ${colors.dark['300']};
      }
   `
)

export const Option = styled.div(
   ({ theme: { colors, size }, isSelected }) => css`
      color: #fff;
      height: ${size.xl}px;
      display: flex;
      padding: 0 12px;
      align-items: center;
      background: ${isSelected && colors.dark['300']};
      &:hover {
         background: ${colors.dark['300']};
      }
   `
)
