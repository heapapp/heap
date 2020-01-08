import React from 'react'
import Router from 'next/router'

import { Heading } from '@heapapp/ui'

import { StyledVideo, Thumbnail, Details } from './styles'

const Video = ({ data }) => {
   return (
      <StyledVideo
         tabIndex="0"
         onClick={() => Router.push(`/video/${data.id.videoId}`)}
         onKeyPress={e => {
            if (e.key === ' ') {
               e.preventDefault()
               return Router.push(`/video/${data.id.videoId}`)
            }
         }}
      >
         <Thumbnail>
            <img
               src={data.snippet.thumbnails.high.url}
               alt={data.snippet.title}
            />
         </Thumbnail>
         <Details>
            <span></span>
            <Heading type="h5">{data.snippet.title}</Heading>
         </Details>
      </StyledVideo>
   )
}

export default Video
