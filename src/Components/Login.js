import { useState,useRef} from 'react'
import {checkData} from "../utils/checkValidData";
import { Header } from './Header'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";

export const Login = () => {
    const navigate = useNavigate();
    const email = useRef();
    const password = useRef()
    const [isSigninForm,setSigninFrom] = useState(true);
    const [errorMessage,setErrorMessage]=useState();
    function handletoggle(){
        setSigninFrom(!isSigninForm);
    }
    function handleSubmit(){
          const message=checkData(email.current.value,password.current.value);
          setErrorMessage(message);
          if(message)return ;
          if(!isSigninForm){
              createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                  // Signed up 
                  const user = userCredential.user;
                  navigate('/browse');

                  console.log(user);
                  })
                  .catch((error) => {
                   const errorCode = error.code;
                   const errorMessage = error.message;
                   setErrorMessage(errorCode+"-"+errorMessage);
                  });
          }
          else{
             signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                   .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ... 
                    console.log(user);
                    navigate('/browse');
                      })
                     .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+"-"+errorMessage);
                    });
          }
    }
    return (
    <div>
        <div>
        <Header/>
        </div>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg'
             alt="background"
             ></img>
        </div>
        <form onSubmit={(e)=>e.preventDefault()}
         className='flex flex-col absolute w-3/12 bg-black my-40 p-10 mx-auto
        bg-opacity-80 right-0 left-0 text-white '>
            <h1 className='font-bold text-3xl py-4'>{isSigninForm?"Sign In":"Sign Up"}</h1>
            {!isSigninForm&&<input type='text' placeholder='Name'
             className='w-full p-4 my-2 h-12 bg-black border-[0.5px] border-gray-500 rounded-sm'></input>}
            <input ref={email}
            type='text' placeholder='Email'
             className='w-full p-4 my-2 h-12 bg-black border-[0.5px] border-gray-500 rounded-sm'></input>
            <input ref={password} 
            type='text' placeholder='Password' className='w-full p-4 my-2 h-12 bg-black border-[0.5px] border-gray-500 rounded-sm'></input>
                 <p className='pb-2 text-red-600  text-lg'>{errorMessage}</p>
            <button onClick={handleSubmit} 
            className=' h-10 w-full my-2 rounded-sm  bg-red-700  text-xl'>{isSigninForm?"Sign In":"Sign Up"}</button>
            <p className='text-gray-400 pr-1 cursor-pointer' onClick={handletoggle}>
                {isSigninForm?"New to Netflix? Singn up now.":"Already Registered? Sign In now."}</p>
        </form>
    </div>
  )
}
