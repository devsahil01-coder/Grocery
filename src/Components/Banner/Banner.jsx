import React from 'react'

const Banner = ({title,bgImage}) => {
  return (
    <div className='h-[50vh] mt-25 mb-8 p-30 rounded flex justify-center items-center bg-center bg-cover relative ' style={{backgroundImage:`url(${bgImage})`}}>
      <h2 className='text-4xl font-bold text-center text-zinc-800 bg-white w-40 p-2 rounded-2xl z-2'>{title}</h2>
      <div className='bg-black/50 absolute inset-0'></div>
    </div>
  )
}

export default Banner
