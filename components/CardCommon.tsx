import React from 'react'
import { ShowOrMovieType } from '../types/combineTypes'
import CardImage from './CardImage'
import CardInfo from './CardInfo'

const CardCommon = ({data} : {data: ShowOrMovieType}) => {
  return (
    <div>
        
      <CardInfo data={data}/>
    </div>
  )
}

export default CardCommon