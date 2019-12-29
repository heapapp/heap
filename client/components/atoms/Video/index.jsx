import React from 'react'

import { Heading } from '../../index'

import { StyledVideo, Thumbnail, Details } from './styles'

const Video = ({ data }) => {
   return (
      <StyledVideo>
         <Thumbnail></Thumbnail>
         <Details>
            <span></span>
            <Heading type="h5">{data.title}</Heading>
         </Details>
      </StyledVideo>
   )
}

export default Video
