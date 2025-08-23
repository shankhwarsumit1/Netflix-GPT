import { useSelector } from "react-redux"
import { POSTER_BASEURL } from "../utils/constants";
import { useState } from "react";
import {MovieList} from "./MovieList";

export const GPTmovieSuggestions = ()=>{
   const gpt = useSelector((store)=>store.gpt);
   const {names,movArr}=gpt.GPTMovies
   if(!names || !movArr)return;
   return(
   <div className="bg-black text-black p-8 absolute top-72  rounded-lg">
    {names.map((name,indx)=> <MovieList key={indx} title={name} movies={movArr[indx]}/>) }
    </div>)
}