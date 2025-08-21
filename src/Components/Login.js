import { useState } from 'react'
import React from 'react'
import { Header } from './Header'

export const Login = () => {
    const [isSigninForm,setSigninFrom] = useState(true);
    function handleForm(){
        setSigninFrom(!isSigninForm);
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
        <form className='flex flex-col absolute w-3/12 bg-black my-40 p-10 mx-auto
        bg-opacity-80 right-0 left-0 text-white '>
            <h1 className='font-bold text-3xl py-4'>{isSigninForm?"Sign In":"Sign Up"}</h1>
            {!isSigninForm&&<input type='text' placeholder='Name'
             className='w-full p-4 my-2 h-12 bg-black border-[0.5px] border-gray-100 rounded-sm'></input>}
            <input type='text' placeholder='Email'
             className='w-full p-4 my-2 h-12 bg-black border-[0.5px] border-gray-100 rounded-sm'></input>
            <input type='text' placeholder='Password' className='w-full p-4 my-2 h-12 bg-black border-[0.5px] border-gray-100 rounded-sm'></input>
            <button className=' h-10 w-full my-2 rounded-sm  bg-red-700  text-xl'>{isSigninForm?"Sign In":"Sign Up"}</button>
            <p className='text-gray-400 pr-1 cursor-pointer' onClick={handleForm}>
                {isSigninForm?"New to Netflix? Singn up now.":"Already Registered? Sign In now."}</p>
        </form>
    </div>
  )
}
