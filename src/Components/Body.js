
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { Login } from './Login';
import { Browse } from './Browse';
import {useDispatch} from "react-redux";
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from "../utils/firebase";
import { addUser, removeUser } from '../utils/userSlice';

export const Body = () => {
        const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
      {
        path:"/",
        element:<Login/>
      },
      {
        path:"/browse",
        element:<Browse/>
      }
  ]);
   useEffect(()=>{
     onAuthStateChanged(auth,(user)=>{
      if(user){
        const {uid,email} = user;
        dispatch(addUser({uid,email}));
      }
      else{
        dispatch(removeUser());
      }
     })
   } ,[])

  return (
      <div><RouterProvider router={appRouter}/></div>
  )
}
  
