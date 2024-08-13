import React, { useRef } from 'react'
import lang from '../constants/LanguageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from 'openai'
import { API_OPTIONS } from '../constants/constants'
import { addSearchedMovies } from '../utils/GPTSlice'
import { resultMovies } from '../constants/data'
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
        
        //const resultMovies = ["Don", "sankranthi", "kushi", "indra", "hitler"];
        
        

        const promiseArr = resultMovies.map(movie=>searchTMDB(movie));//it will give  promises will not get immediate result
        
        const movieResults = await Promise.all(promiseArr);
        console.log(movieResults);
        dispatch(addSearchedMovies(movieResults));
        
    }

  return (  
      <form
      className="p-2 md:p-4 bg-black rounded-xl absolute top-[25vh] md:top-[30vh] left-[50vw] md:left-[50vw] translate-x-[-50%] translate-y-[-30%]  w-[95%] md:w-2/4 flex justify-between"
      onSubmit={(e)=>e.preventDefault()}
    >
      <input
        ref={searchText}
        className="p-2 text-black rounded mr-1 md:mr-5 w-[100%] md:w-3/4"
        type="search"
        placeholder={
            lang[langKey].placeholder
        }
      />
      <button type="submit" className="bg-red-700 text-white p-2 w-1/4 rounded" onClick={handleGptSearch}>
       {lang[langKey].search}     
      </button>
    </form>
  )
}

export default GSearchbar;
