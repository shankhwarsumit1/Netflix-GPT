import { GPTmovieSuggestions } from "./GPTmovieSuggestions"
import GPTSearchBar from "./GPTsearchBar"


export const GPTsearch = () => {
  return (
  <div className="relative ">

          <div className="bg-fixed -z-10 ">
            <img 
            alt="bkg" src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"></img>
 
            </div>

                 <GPTSearchBar />
              
                 <GPTmovieSuggestions/>
    


      </div>      
      


  )
}
