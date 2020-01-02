import styled, { css } from 'styled-components'

export const StyledVideoPlayer = styled.div`
   main {
      width: 100%;
      height: auto;
   }
`

export const StyledVideo = styled.div(
   ({ theme: { colors, size } }) => css`
      width: 100%;
      margin: ${size.sm}px 0;
      overflow: hidden;
      position: relative;
      border-radius: ${size.xs}px;
      padding-top: 56.25%;
      iframe {
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         position: absolute;
      }
   `
)

export const Description = styled.div`
   margin: 16px 0;
   span {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 8px;
      display: inline-block;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.dark['100']};
   }
`
