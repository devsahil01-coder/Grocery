import React from 'react'

const Button = ({content}) => {
  return (
    <button  className='bg-gradient-to-b from-orange-400 to-orange-500 md:px-8 md:py-3 px-6 py-2 md:text-lg text:sm text-white rounded-3xl hover:scale-105 transition-all duration-100 cursor-pointer'>
        {content}
      
    </button>
  )
}

export default Button
