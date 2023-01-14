import React from 'react'
import { ShowOrMovieType } from '../types/movieTypes'
import CardImage from './CardImage'
import CardInfo from './CardInfo'

const CardCommon = ({data} : {data: ShowOrMovieType}) => {
  return (
    <div>
      <CardImage src={data.backdrop_path}/>
      <CardInfo data={data}/>
    </div>
  )
}

export default CardCommon