import { createSlice } from "@reduxjs/toolkit"
const gptslice = createSlice({
    name: 'gpt',
    initialState: {
        showGPTSearh: false,
        searchedMovies:null,
    },
    reducers: {
        toggleGPTSearchView: (state, action) => {
            state.showGPTSearh=!state.showGPTSearh
        },
        addSearchedMovies: (state, action) => {
            state.searchedMovies=action.payload
        }
    }
})

export const { toggleGPTSearchView,addSearchedMovies } = gptslice.actions;
export default gptslice.reducer;
