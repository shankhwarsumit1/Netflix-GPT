import { useEffect } from "react"
import { API_OPTIONS, FETCH_NOWPLAYING_MOVIES } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/moviesSlice"

const useNowPlayingMovies = ()=>{

const dispatch = useDispatch();
 const getNowPlayingMovies= async ()=>{
   const data = await fetch(FETCH_NOWPLAYING_MOVIES, API_OPTIONS)
   const json = await data.json(); //to convert data from readable stream to json
   dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(()=>{
  getNowPlayingMovies();
  },[])
}

export default useNowPlayingMovies;