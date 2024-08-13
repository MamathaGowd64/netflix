import React from 'react'
import { useSelector } from 'react-redux'
import useAddTrailerVideo from '../hooks/useAddTrailerVideo'


const VideoBakground = ({ movieId }) => { 
  useAddTrailerVideo(movieId);
  const trailerVideo=useSelector(store=>store.movies?.trailerVideo)
  return (
    
      <div className='heroVideoBg pt-[6.85rem] md:pt-[unset]'>
        <iframe className='pointer-events-none aspect-video w-[100%]' 
        src={"https://www.youtube.com/embed/73_1biulkYk?si="+trailerVideo?.key+ "&autoplay=1&mute=1"}
        title="YouTube video player"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        >
      </iframe>
    </div>
    
  )
}
export default VideoBakground

