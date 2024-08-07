import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContaier'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
   useNowPlayingMovies();
  
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      
    </div>
    
  )
}

export default Browse
