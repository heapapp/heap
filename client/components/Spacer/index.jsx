import React from 'react'
import styled, { css } from 'styled-components'

const StyledSpacer = styled.div(
   ({ w, h }) => css`
      width: ${w};
      height: ${h};
   `
)

const Spacer = ({ width, height }) => (
   <StyledSpacer w={width} h={height}></StyledSpacer>
)

export default Spacer
