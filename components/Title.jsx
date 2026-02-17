import React from 'react'

function Title({text1 , text2}) {
    return (
        <div >
            <p className='text-2xl px-6 flex items-center gap-2 '><div className='h-[2px] w-[44px] border '> </div>{text1}</p>
            <h1 className='text-[40px] sm:text-[60px]'>{text2}</h1>
            <p  className='text-2xl px-6 flex items-center gap-2 '>Shop Now <div className='h-[2px] w-[44px] border '></div></p>

        </div>
    )
}

export default Title
