import { createSlice } from "@reduxjs/toolkit"
const gptslice = createSlice({
    name: 'gpt',
    initialState: {
        showGPTSearh:false
    },
    reducers: {
        toggleGPTSearchView: (state, action) => {
            state.showGPTSearh=!state.showGPTSearh
        }
    }
})

export const { toggleGPTSearchView } = gptslice.actions;
export default gptslice.reducer;
