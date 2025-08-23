import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGPT:false,
        GPTMovies:{
            names:null,
            movArr:null
        },
    },
    reducers:{
        toggleGPTSearch:(state,action)=>{
            state.showGPT=!state.showGPT;
        },
        addGPTMovies:(state,action)=>{
            state.GPTMovies.movArr=action.payload.TMDBmovies;
            state.GPTMovies.names=action.payload.movieNames; 
        }
    }

})



export const {toggleGPTSearch,addGPTMovies} = gptSlice.actions;
export default gptSlice.reducer;