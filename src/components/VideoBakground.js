import React from 'react'
import { useSelector } from 'react-redux'
import useAddTrailerVideo from '../hooks/useAddTrailerVideo'


const VideoBakground = ({ movieId }) => { 
  useAddTrailerVideo(movieId);
  const trailerVideo=useSelector(store=>store.movies?.trailerVideo)
  return (
    <div>
      <div>
        <iframe className='w-screen aspect-video' 
        src={"https://www.youtube.com/embed/73_1biulkYk?si="+trailerVideo?.key+ "&autoplay=1&mute=1"}
        title="YouTube video player"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        >
      </iframe></div>
    </div>
  )
}

export default VideoBakground

