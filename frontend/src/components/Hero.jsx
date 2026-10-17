import React from 'react'
import Swiper from '../modals/swiper'
import MainCard from '../modals/mainCard'



const Hero = () => {
  return (
    <div className='bg-black  relative h-screen w-full h-100vh bord '>
    <div className=' absolute t-0 flex justify-center items-center w-full h-100vh' >
        <Swiper/>
    </div>

    <div className='background bg-black opacity-70 absolute flex justify-center items-center w-full h-full z-20'>
    
        
        

    </div>
    <div className='relative top-0 flex justify-center items-center w-full h-full z-20 text-amber-100'>
      
     
     <MainCard/>

  

        
        

    </div>


    </div>

   

  )
}

export default Hero
