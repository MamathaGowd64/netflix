import { createSlice } from "@reduxjs/toolkit"

const movieSlice = createSlice({
    name: "movies",
    initialState: {
      nowplayingmovies: null,
      trailerVideo:null,
    },
    reducers: {
      addNowPlayingmovies: (state, action) => {
        state.nowplayingmovies=action.payload;
      },
      addtrailervideo: (state, action) => {
        state.trailerVideo=action.payload;
      }
     
    },
  });
  
  export default movieSlice.reducer;
  export const { addNowPlayingmovies,addtrailervideo } = movieSlice.actions;