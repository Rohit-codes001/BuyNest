import React from 'react'
import { assets } from '../assest/assets'
import Title from './Title'

function Hero() {
    return (
        <div className='flex flex-col sm:flex-row h-[80vh] w-screen  p-4'>
         <div className='h-[100%] w-[100%] sm:w-[50%]  flex items-center justify-around'>
    <Title text1={'our bestsellers'} text2={'Latest Arrivals'} />
         </div>
          <div className='h-[100%] w-[100%] sm:w-[50%]  ' >
                <img className="h-full w-full object-contain" src={assets.hero_img} alt="" />
         </div>
         
        </div>
    )
}

export default Hero
