import React, { useRef } from 'react'
import lang from '../constants/LanguageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from 'openai'
import { API_OPTIONS } from '../constants/constants'
import { addSearchedMovies } from '../utils/GPTSlice'
//import GPTMovieSuggestions from './GPTMovieSuggestions'


const GSearchbar = () => {
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const searchTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" +
            movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json();

        return json;
        
    }

    const handleGptSearch = async () => {
        console.log(searchText.current.value)

//   const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query" + searchText.current.value + "only give me names of 5 movies, comma seperated.like the example result given ahead. example Result:Dabang,Don";
//         //console.log(gptQuery);
//         const chatCompletion = await openai.chat.completions.create({
//             messages: [{ role: 'user', content: { gptQuery } }],
//             model: 'gpt-3.5-turbo',
            
//         });
        
        // if (!chatCompletion.choices) {
        //     // TODO: Write Error Handling
        //   }
                  //console.log(chatCompletion);
        
        const resultMovies = ["Don", "sankranthi", "kushi", "indra", "hitler"];

        const promiseArr = resultMovies.map(movie=>searchTMDB(movie));//it will give  promises will not get immediate result
        
        const movieResults = await Promise.all(promiseArr);
        console.log(movieResults);
        dispatch(addSearchedMovies(movieResults));
        
    }

  return (
      <div className='pt-[10%] flex justify-center'>
         
          <form className='bg-black w-1/2 grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
              <input
                  ref={searchText}
                  type='text'
                  className='p-4 m-4 col-span-9'
                  placeholder={lang[langKey].placeholder}
              />
              <button className='m-4 py-2 px-4 col-span-3 bg-red-700 text-white rounded-lg'
                  onClick={handleGptSearch}>
                  {lang[langKey].search}
              </button>
             
      </form>
    </div>
  )
}

export default GSearchbar;
