import React from 'react'

function Subscribe() {
    return (
        <div className='flex flex-col py-10'>
            <ul className='flex flex-col items-center py-4 '>
                <li className='text-[22px] sm:text-2xl py-4'>Subscribe now & get 20% off</li>
                <li className='py-4 text-[10px] sm:text-[15px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                <li className='py-4 flex gap-2'><input className='outline-none py-2 text-center border-2 border-grey sm:px-8 sm:py-4 rounded-2xl ' type="email" placeholder='Enetr email id' />
                
                <button className='bg-black py-2 text-white px-4  py-1 sm:px-8 sm:py-3 rounded-2xl' type='Submit'>SUBSCRIBE</button></li>
            </ul>
        </div>
    )
}

export default Subscribe
