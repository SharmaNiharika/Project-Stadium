import React from 'react'
import Trainers from '../modals/trainer'
const testimonial = () => {
  return (
    <div className="bg-slate-900 dark:bg-neutral-900 font-sans  w-full flex  justify-center text-yellow-300 items-center gap-4 flex-col py-10">
    <div className='flex flex-col justify-center items-center w-[80%]  gap-4'>
        <div className='font-bold text-white' >Know Your Trainers</div>

       
       <div className='relative  flex justify-center items-center w-full h-full' >
             
                <Trainers/>
        </div>
    </div>


       


      
    </div>
  )
}

export default testimonial
