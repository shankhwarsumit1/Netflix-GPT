import { useRef } from "react"
import {ai} from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGPTMovies } from "../utils/gptSlice";

const GPTSearchBar = ()=>{
    const searchText = useRef(null);
    const dispatch = useDispatch();
    const searchIMDB =async(movName)=>{
           const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movName}&include_adult=false&language=en-US&page=1`, API_OPTIONS)
           const json = await data.json();
           const movieData = json.results;
           return movieData;
        }
    const handleSearch =async()=>{
        const prompt=`Act as a movie recommendation system and suggest 5 movies for the query:
                      ${searchText.current.value} and give only 5 movies comma seperated for example:golmal,sholay,gaddar,koi mil gaya,karan arjun `
      

  const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });
  const result = await model.generateContent(prompt);
  
  const movies=result.response.candidates[0].content.parts[0].text;
  const arrmov = movies.split(',');
  const promiseArray = arrmov.map(async (mov)=> searchIMDB(mov));
  const TMDBResults = await Promise.all(promiseArray);
     dispatch(addGPTMovies({movieNames:arrmov,TMDBmovies:TMDBResults}));
}
return (
    <div className="flex justify-center absolute top-10 mt-[10%]  w-full ">
        <form onSubmit={(e)=>e.preventDefault()} 
        className="bg-black w-1/2 grid grid-cols-12 rounded-lg">
        
        <input
        ref={searchText} 
        className="p-4 m-2 col-span-8 rounded-lg bg-gray-900 border-gray-200 text-gray-500" 
        type="text" placeholder="What's on your mind..!"></input>
        
        <button onClick={handleSearch} 
        className="py-4 m-2 col-span-4 text-lg text-white font-bold rounded-lg bg-red-600"
        >Search</button> 
        
         </form>
    </div>
)
}

export default GPTSearchBar