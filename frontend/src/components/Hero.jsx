import React from 'react'
import Swiper from '../modals/swiper'
import MainCard from '../modals/mainCard'



const Hero = () => {
  return (
    <div className='bg-black relative  h-screen w-full '>
    <div className=' absolute flex justify-center items-center w-full h-full' >
        <Swiper/>
    </div>

    <div className='background bg-black opacity-70 absolute flex justify-center items-center w-full h-full z-20'>
    
        
        

    </div>
    <div className='absolute flex justify-center items-center w-full h-full z-20 text-amber-100'>
      
     
     <MainCard/>

  

        
        

    </div>


    </div>

   

  )
}

export default Hero
