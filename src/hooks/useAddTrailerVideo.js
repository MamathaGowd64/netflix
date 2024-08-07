import React, { useEffect } from 'react'
import { API_OPTIONS } from '../constants/constants'
import { useDispatch } from 'react-redux'
import { addtrailervideo } from '../utils/movieSlice'

const useAddTrailerVideo = (movieId) => {
    
  const dispatch = useDispatch();
    const getMovieVideos = async () => {
      
        const result = await fetch(`https://api.themoviedb.org/3/movie/${movieId}'/videos?language=en-US`, API_OPTIONS);
    const json = await result.json();
    
    const filteredData = json.results.filter(video => video.type === 'Trailer')
    const trailer = filteredData.length ? filteredData[1] : json.results[0];
    dispatch(addtrailervideo(trailer))
  }

  useEffect(() => {
    getMovieVideos();
  },[])
  return (
    <div>
      
    </div>
  )
}

export default useAddTrailerVideo
