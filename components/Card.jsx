import React from 'react'
import { useContext } from 'react'
import { ShopContext } from './ShopContext'




function Card({id , image ,name , price }) {
               let {currency} = useContext(ShopContext)

    
    return (
        
        <div className='h-[260px] w-[170px] sm:h-[350px] sm:w-[260px] hover:scale-105 '>
            <img className='h-[200px] py-2 px-2 w-full sm:h-[300px] sm:w-[260px]  ' src={image} alt="" />
           <div className='flex flex-col '>
             <span className='text-[10px] px-2'>{name}</span>
            <spa className='px-2'>{currency} {price}</spa>
           </div>
        </div>
    )
}

export default Card
