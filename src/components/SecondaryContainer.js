import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  //const popularmovies=useSelector((store)=>store.movies)
   return movies && (
    <div className='bg-black'>
      <div className='-mt-52 pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowplayingmovies} />      
      <MovieList title={"Trending"} movies={movies.trendingmovies} />
      <MovieList title={"Popular"} movies={movies.popularmovies} />
      <MovieList title={"Top Rated"} movies={movies.topratedmovies} />
      </div>
     
    </div>
  )
}

export default SecondaryContainer
