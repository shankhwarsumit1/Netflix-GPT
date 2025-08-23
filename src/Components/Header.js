import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from "../utils/firebase";
import { addUser, removeUser } from '../utils/userSlice';
import {useDispatch} from "react-redux";
import { toggleGPTSearch } from "../utils/gptSlice";

export const Header = () => {
         const dispatch = useDispatch();
           const navigate = useNavigate();
const handleGPTSearch=()=>{
  dispatch(toggleGPTSearch());
}
const gptSearch = useSelector((store)=>store.gpt.showGPT)
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        const {uid,email} = user;
        dispatch(addUser({uid,email}));
        navigate('/browse')
      }
      else{
        dispatch(removeUser());
        navigate('/')
      }
     })
     
     //unsubscribe when component unmounts
     return ()=>unsubscribe();
   } ,[])

  const user = useSelector((store)=>store.user);

  function handleSignout(){
    signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  navigate('/error');
  // An error happened.
});

  }
  return (
    <div className="absolute bg-gradient-to-b from-black z-50 flex w-full justify-between">
    <img src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
    alt='NETFLIX'
    className='w-[250px] my-2 py-2 px-4 '></img>
    {user && <div className='my-7 py-2 px-4 flex rounded-lg bg-gradient-to-r from black'>

      <button onClick={handleGPTSearch}
      className="bg-red-600 font-bold text-white px-8 py-2 mb-2
       text-lg rounded-lg mx-4 hover:opacity-90">
        {gptSearch?"HOME":"GPT Search"}</button>

      <img alt="usericon" className='w-[50px] h-[50px] '
      src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"></img>
        <button className='p-4 mx-2 text-white text-xl' 
        onClick={handleSignout}
        >(Sign out)</button>
    </div>}

    </div>
  )
}
