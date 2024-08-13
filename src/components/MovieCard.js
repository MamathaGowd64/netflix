import React from 'react' 
import { IMG_CDN_URL } from '../constants/constants'
import play_icon from "../constants/play_btn.png";
import info_icon from "../constants/info_btn.png";

import takeUserToYoutubeTrailer from '../utils/takeUserToYoutubeTrailer';



  const MovieCard = ({ movie }) => {
   
    const { ...allProperties } = movie;
    const moviePoster = IMG_CDN_URL + allProperties?.poster_path;
  
    // dispatching clicked movie data to redux
    
  
    if (!allProperties?.poster_path) {
      return;
    }
  
    return (
      <div className="m-2 md:m-3 relative">
        {moviePoster && (
          <>
            <img
              className="rounded w-[100px] md:w-auto max-w-[200px]"
              src={moviePoster}
              alt={allProperties?.original_title}
            />
            <div
              className="infoBtns p-2 rounded-xl  left-[1%]
              absolute top-[1%] text-center  shadow-2xl bg-[rgba(0,0,0,0.7)] flex flex-col"
            >
              <button
                onClick={() => {
                  takeUserToYoutubeTrailer(allProperties?.title);
                }}
                className="watchTrailer bg-white rounded-[50%] p-1 md:p-2 shadow-lg mb-2"
              >
                <img className="w-4 md:w-6 " src={play_icon} alt="play icon" />
              </button>
              <button
                onClick={()=>{takeUserToYoutubeTrailer(allProperties?.title)}} className="watchTrailer bg-white rounded-[50%] p-1 md:p-2 shadow-lg"
              >
                <img className="w-4 md:w-6 " src={info_icon} alt="info icon" />
              </button>
            </div>
          </>
        )}
      </div>
    );
  };
  export default MovieCard;
  

