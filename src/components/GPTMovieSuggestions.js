import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../components/MovieList'

const GPTMovieSuggestions = () => {

  
  const searchedMovies = useSelector((store) => store.gpt?.searchedMovies);
  if (!searchedMovies) return null;
  return (
    <div className='p-4 m-4 bg-black text-white'>
     
      {searchedMovies.map((movie) => (
        <MovieList
          title={movie?.results?.original_title}
          
          movies={movie.results}
        />
      ))}
    </div>
  )
}

export default GPTMovieSuggestions
