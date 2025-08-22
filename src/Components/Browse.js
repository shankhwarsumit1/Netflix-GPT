import useNowPlayingMovies from "../customHooks.js/useNowPlayingMovies"
import { Header } from "./Header"
import { MainContainer } from "./MainContainer";
import { SecondryContainer } from "./SecondryContainer";


export const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondryContainer/>
    </div>
  )
}
