import { MovieCard } from './MovieCard';

export const MovieList = ({title,movies}) => {
    if(!movies)return;
  return (
    <div >
        <div className='flex flex-col'>
          <h1 className='font-bold text-white text-3xl px-2 py-4'>{title}</h1>
             <div className='flex overflow-x-scroll no-scrollbar  px-2'>
                {movies.map((movie)=><MovieCard key={movie.id} poster={movie.poster_path}/>)}
             </div>
        </div>
    </div>
  )
} 
