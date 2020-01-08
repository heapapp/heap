import styled, { css } from 'styled-components'

export const StyledHeader = styled.header(
   ({ theme: { colors } }) => css`
      height: 56px;
      display: flex;
      align-items: center;
      background: ${colors.dark['300']};
   `
)

export const Brand = styled.div(
   ({ theme: { colors, size } }) => css`
      width: 240px;
      display: flex;
      height: inherit;
      padding: 0 ${size.sm}px;
      align-items: center;
      background: ${colors.blue['400']};
   `
)
