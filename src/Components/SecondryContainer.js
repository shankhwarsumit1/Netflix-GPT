import { useSelector } from "react-redux"
import { MovieList } from "./MovieList";
export const SecondryContainer = () => {
        const nowPlaying = useSelector((store)=>store.movies.nowPlayingMovies);
        const popular = useSelector((store)=>store.movies.popularMovies);
        const topRated = useSelector((store)=>store.movies.topRatedMovies);
        const upcoming = useSelector((store)=>store.movies.upcomingMovies);

  return (
     <div className="bg-black ">
      <div className="-mt-40 pl-20 relative z-20">
     <MovieList title={"Now playing movies"} movies={nowPlaying}/>
     <MovieList title={"Popular"} movies={popular}/>
     <MovieList title={"Top Rated"} movies={topRated}/>
     <MovieList title={"Upcoming Movies"} movies={upcoming}/>
     </div>
    </div>
  )
}
