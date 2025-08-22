import React from 'react'
import { POSTER_BASEURL } from '../utils/constants'

export const MovieCard = ({poster}) => {
  
  return (
    <div className='p-2 w-1/6 rounded-sm flex-shrink-0'>
        <img className='rounded-sm'
        src={POSTER_BASEURL+poster} alt="img"></img>
    </div>
  )
}
