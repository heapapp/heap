import React from 'react'
import ReactHtmlParser from 'react-html-parser'

import { ComboButton, Heading, Para } from '../../index'

import { StyledVideoPlayer, StyledVideo, Description } from './styles'

import { ArrowLeft } from '../../../assets/icons'

import { urlify } from '../../../helpers'

const VideoPlayer = ({ data }) => {
   const [video, setVideo] = React.useState({})
   React.useEffect(() => {
      setVideo(data)
   }, [data])

   if (Object.keys(data).length === 0)
      return <StyledVideoPlayer>Loading...</StyledVideoPlayer>

   return (
      <StyledVideoPlayer>
         <header>
            <ComboButton
               type="outline"
               typeColor="dark.200"
               onClick={() => window.history.back()}
            >
               <ArrowLeft />
               Back
            </ComboButton>
         </header>
         <main>
            <StyledVideo>
               <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${video?.id?.videoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
               ></iframe>
            </StyledVideo>
            <Heading type="h3">{video?.snippet?.title}</Heading>
            <Description>
               <span>Description</span>
               {video?.snippet?.description && (
                  <Para>
                     {ReactHtmlParser(urlify(video.snippet.description))}
                  </Para>
               )}
            </Description>
         </main>
      </StyledVideoPlayer>
   )
}

export default VideoPlayer
