import useNowPlayingMovies from "../customHooks.js/useNowPlayingMovies"
import usePopularMovies from "../customHooks.js/usePopularMovies";
import useTopRatedMovies from "../customHooks.js/useTopRatedMovies";
import useUpcomingMovies from "../customHooks.js/useUpcomingMovies";
import { Header } from "./Header"
import { MainContainer } from "./MainContainer";
import { SecondryContainer } from "./SecondryContainer";


export const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="bg-black">
      <Header/>
      <MainContainer/>
      <SecondryContainer/>
    </div>
  )
}
