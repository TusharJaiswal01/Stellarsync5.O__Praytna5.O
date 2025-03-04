import React from 'react'

const Text = ({className,textOne,textTwo}) => {
  return (
    <div className={`${className}`}>
     <h1 className='text-5xl w-1/3 font-bold'>{textOne}</h1>
     <h1 className='text-xl mt-6 opacity-60 font-medium '>{textTwo}</h1>
     
    </div>
  )
}

export default Text
