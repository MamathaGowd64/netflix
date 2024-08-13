import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  //const popularmovies=useSelector((store)=>store.movies)
   return movies && (
    
      <div className='movie-lists-container bg-slate-900 pt-2 md:pt-[unset] md:-mt-36 pb-1 z-10'>
      <MovieList title={"Now Playing"} movies={movies.nowplayingmovies} />      
      <MovieList title={"Trending"} movies={movies.trendingmovies} />
      <MovieList title={"Popular"} movies={movies.popularmovies} />
      <MovieList title={"Top Rated"} movies={movies.topratedmovies} />
      </div>
     
  
  )
}

export default SecondaryContainer
