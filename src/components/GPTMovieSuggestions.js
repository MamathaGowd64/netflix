import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GPTMovieSuggestions = () => {

  const searchedMovies = useSelector((store) => store.gpt?.searchedMovies);
  if (!searchedMovies) return null;
  return (
    <div
      className="top-[22vh] translate-y-52 md:translate-y-80 md:top-[40vh] bg-[rgba(0,0,0,0.6)] m-0 md:m-8 rounded py-2">
      
      {searchedMovies.map((movie) => (
        <MovieList
          title={movie?.results?.original_title}
          movies={movie.results}
        />
      ))}
    </div>

  );
};

export default GPTMovieSuggestions
