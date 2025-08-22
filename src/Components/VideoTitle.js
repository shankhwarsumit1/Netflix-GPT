import React from 'react'

export const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video absolute text-white pt-[18%] px-24 bg-gradient-to-r from-black'>
    <h1 className='text-5xl font-bold'>{title}</h1>
    <p className='py-6 text-lg w-1/4'>{overview}</p>
    <div>
        <button className='bg-white p-4 pr-8 pl-8 mr-3 text-black font-bold
         rounded-lg text-lg hover:bg-opacity-40'>Play</button>
        <button className='bg-gray-500 p-4  text-white font-bold
        bg-opacity-50 rounded-lg text-lg  hover:bg-opacity-40'>ⓘ More info</button>
    </div>
    </div>
  )
}
