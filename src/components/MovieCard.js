import React from 'react' 
import { IMG_CDN_URL } from '../constants/constants'

const MovieCard = ({posterPath}) => {
  return (
        <div className='w-48 pr-4'>
          <img alt="movie-card" src={IMG_CDN_URL + posterPath}>
          </img>

    </div>
  )
}

export default MovieCard
