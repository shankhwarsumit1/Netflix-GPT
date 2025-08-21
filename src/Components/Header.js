import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from "../utils/firebase";
import { addUser, removeUser } from '../utils/userSlice';
import {useDispatch} from "react-redux";

export const Header = () => {
         const dispatch = useDispatch();
           const navigate = useNavigate();

  useEffect(()=>{
     onAuthStateChanged(auth,(user)=>{
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
    <div className="absolute bg-gradient-to-b from-black z-10 flex w-full justify-between">
    <img src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
    alt='NETFLIX'
    className='w-[250px] my-2 py-2 px-4 '></img>
    {user && <div className='my-7 py-2 px-4 flex bg-gradient-to-r from black'>
      <img alt="usericon" className='w-[50px] h-[50px] '
      src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"></img>
        <button className='p-4 mx-2 text-white text-xl' 
        onClick={handleSignout}
        >(Sign out)</button>
    </div>}

    </div>
  )
}
