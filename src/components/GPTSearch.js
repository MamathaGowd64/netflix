import React from 'react'
import GSearchbar from './GSearchbar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BG_URL } from '../constants/constants'
const GPTSearch = () => {
  return (
    <div className='bg-black opacity-80'>
       <div className='absolute -z-10'>
        <img src={BG_URL}
      alt="logo"
      />
      </div>
      <GSearchbar />
      <GPTMovieSuggestions />
  
    </div>
  )
}

export default GPTSearch
