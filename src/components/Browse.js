import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContaier'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGPTSearch = useSelector((store) => store?.gpt?.showGPTSearh);
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useTopRatedMovies();

  
  return (
    <div>
      <Header />
      {showGPTSearch ?
        (<GPTSearch />) : (
        <>
          <MainContainer />
            <SecondaryContainer />
          </>
        )}
    </div>
    
  )
}

export default Browse
