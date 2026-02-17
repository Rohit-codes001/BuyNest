import React from 'react'

function Title2({text1 , text2}) {
    return (
        <div>
            <div className='flex gap-1 sm:gap-2'>
               <p className='text-[20px] sm:text-2xl text-[#707070]'>{text1}</p> <p className='flex items-center gap-1 text-[20px] sm:text-2xl'>{text2} <div className='h-[2px] w-[50px] border'></div></p>
            </div>
        </div>
    )
}

export default Title2
