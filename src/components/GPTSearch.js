import React from 'react'
import GSearchbar from './GSearchbar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BG_URL } from '../constants/constants'
const GPTSearch = () => {
  return (  
    <>
    <img
      className="fixed max-w-none md:max-w-[100%] md:-mt-2"
      src={BG_URL}
      alt="background"
    />
    <div className="gptPageContent w-full relative md:-mt-2">
      <GSearchbar />
      <GPTMovieSuggestions />
    </div>
  </>
  )
}

export default GPTSearch
