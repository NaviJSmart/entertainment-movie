import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div className="max-w-[500px] h-[400px] w-full  relative">
        
    <Image
    src={``}
      className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      alt='image'
    />
  </div>
  )
}

export default Card