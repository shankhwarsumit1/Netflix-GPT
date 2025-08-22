import  { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import {addTrailerVideo} from '../utils/moviesSlice'

const useTrailer = ()=>{
    const dispatch = useDispatch();
    const movies = useSelector((store)=>store.movies.nowPlayingMovies);
    const {id} = movies[0];

    const getMovieVideos=async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json();
        const filterData = json.results.filter((arr)=>arr.type==="Trailer");
        const trailer = filterData.length === 0 ? json.results[0]:filterData[0];     
        dispatch(addTrailerVideo(trailer))
    };

    useEffect(()=>{
        getMovieVideos();
    },[])
}

export default useTrailer;