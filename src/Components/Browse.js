import useNowPlayingMovies from "../customHooks.js/useNowPlayingMovies"
import usePopularMovies from "../customHooks.js/usePopularMovies";
import useTopRatedMovies from "../customHooks.js/useTopRatedMovies";
import useUpcomingMovies from "../customHooks.js/useUpcomingMovies";
import { Header } from "./Header"
import { MainContainer } from "./MainContainer";
import { SecondryContainer } from "./SecondryContainer";
import { useSelector } from "react-redux";
import { GPTsearch } from "./GPTsearch";

export const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const GPT = useSelector((store)=>store.gpt.showGPT);
  return (
    <div> 
       <Header/>
      {GPT===true? <GPTsearch/>:(<><MainContainer/>
      <SecondryContainer/></>)}
    
      
    </div>
  )
}
