import React from 'react'
import { ShowOrMovieType } from '../types/combineTypes'

const CardInfo = ({data} : {data: ShowOrMovieType}) => {
  return (
    <>
        <p>
          <span>{(data.release_date || data.first_air_date).slice(0,4)}</span>
          {" / "}
          <span className='capitalize'>{data.media_type}</span>
        </p>
        <h3 className="text-2xl">{data.title || data.name}</h3> 
    </>
  )
}

export default CardInfo