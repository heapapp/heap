import styled, { css } from 'styled-components'

export const StyledVideo = styled.div`
   cursor: pointer;
   &:hover,
   &:focus {
      outline: -webkit-focus-ring-color auto 1px;
   }
`

export const Thumbnail = styled.div(
   ({ theme: { colors, size } }) => css`
      height: auto;
      overflow: hidden;
      border-radius: ${size.xs}px;
      padding-top: 56.25%;
      margin-bottom: ${size.sm}px;
      position: relative;
      background: ${colors.dark['200']};
      img {
         position: absolute;
         top: -16.5%;
         width: 100%;
      }
   `
)

export const Details = styled.div(
   ({ theme: { colors, size } }) => css`
      display: grid;
      grid-template-columns: ${size.xl}px 1fr;
      grid-column-gap: ${size.sm}px;
      span {
         height: ${size.xl}px;
         width: ${size.xl}px;
         border-radius: 50%;
         display: inline-block;
         background: ${colors.dark['200']};
      }
   `
)
