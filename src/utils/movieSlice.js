import { createSlice } from "@reduxjs/toolkit"

const movieSlice = createSlice({
    name: "movies",
    initialState: {
      nowplayingmovies: null,
      trailerVideo: null,
      popularmovies: null,
      trendingmovies: null,
      topratedmovies: null,
      
      
    },
    reducers: {
      addNowPlayingmovies: (state, action) => {
        state.nowplayingmovies=action.payload;
      },
      addtrailervideo: (state, action) => {
        state.trailerVideo=action.payload;
      },
      addPopularMovies: (state, action) => {
        state.popularmovies=action.payload;
      },
      addTrendingMovies: (state, action) => {
        state.trendingmovies=action.payload;
      },
      addTopRatedMovies: (state, action) => {
        state.topratedmovies=action.payload;
      },
     
    },
  });
  
  export default movieSlice.reducer;
export const {
  addNowPlayingmovies,
  addtrailervideo,
  addPopularMovies,
  addTrendingMovies,
  addTopRatedMovies,
   } = movieSlice.actions;