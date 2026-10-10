import React from 'react'

const mainCard = () => {
  return (
    <div className='flex flex-col justify-center items-center p-10 '>
      <div className='flex flex-col justify-center items-center p-5 gap-4'>
          <h1 className='text-4xl text-amber-00 text-center font-bold'>Welcome to Fitness World</h1>
          <span className='text-3xl font-bold text-amber-300 text-center'>Your Nearest Stadium is just a tap away</span>
      </div>
      <div>
        <button className='bg-amber-300 text-black px-4 py-2 rounded-lg font-semibold hover:bg-amber-400 transition duration-300'>Book Now</button>
      </div>
      <div className='flex flex-col justify-center items-center p-5 gap-4'>

      <button className='bg-amber-300 text-black px-4 py-2 rounded-lg font-semibold hover:bg-amber-400 transition duration-300'>Know Your Trainer</button>

      
      </div>
    </div>
  )
}

export default mainCard
