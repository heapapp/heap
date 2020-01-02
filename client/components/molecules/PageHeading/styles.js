import styled, { css } from 'styled-components'

export const StyledHeading = styled.div(
   ({ theme: { colors, size } }) => css`
      display: flex;
      align-items: center;
      height: ${size.xxl}px;
      margin-bottom: ${size.sm}px;
      transform: translateX(-16px);
      padding-left: ${size.sm - 2}px;
      border-left: 3px solid ${colors.blue['400']};
   `
)
