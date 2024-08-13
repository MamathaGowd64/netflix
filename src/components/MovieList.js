import React from 'react'
import MovieCard from './MovieCard'
import { useRef } from 'react';
import rightArrow from "../constants/caret-right.svg";

const MovieList = ({ title, movies }) => {
   // console.log(movies);
    //  
    const listRef = useRef();

    // basic on whether mobile or desktop deciding scollpoint
    const scrollPoint = window.innerWidth < 768 ? 250 : 500;
  
    // left scroll handler
    const scrollInLeft = () => {
      listRef.current.scrollTo({
        left: listRef.current.scrollLeft - scrollPoint,
        behavior: "smooth",
      });
    };
  
    // right scroll handlder
    const scrollInRight = () => {
      listRef.current.scrollTo({
        left: listRef.current.scrollLeft + scrollPoint,
        behavior: "smooth",
      });
    };
  
    return (
      <div className="movieList md:m-4 px-4 md:px-8 md:mb-10 relative">
        <h1 className="md:fon-medium text-lg md:text-2xl my-3 md:my-4 text-white">
          {title}
        </h1>
        <div
          ref={listRef}
          className="list flex overflow-x-scroll -ml-3"
          style={{ scrollbarWidth: "none" }}
        >
          {movies?.map((movie) => {
            return <MovieCard key={movie?.id} movie={movie} />;
          })}
        </div>
        <span onClick={scrollInLeft}>
          <img
            src={rightArrow}
            className="w-10 bg-white p-2 rounded-[50%] rotate-180 shadow-2xl absolute top-[8.5rem] md:top-[12rem] left-[0.5rem] border-4 border-[#b6aead] cursor-pointer"
            alt="left scroll arrow"
          />
        </span>
        <span onClick={scrollInRight}>
          <img
            src={rightArrow}
            className="w-10 bg-white p-2 rounded-[50%] shadow-2xl absolute border-4 border-[#9b9190]  top-[8.5rem] md:top-[12rem] right-[0.5rem] cursor-pointer"
            alt="right scroll arrow"
          />
        </span>
      </div>
    );
  };

export default MovieList
