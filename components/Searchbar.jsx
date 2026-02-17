import React, { use, useContext } from 'react'
import { ShopContext } from './ShopContext'
import { assets } from '../assest/assets'
import { useLocation } from 'react-router-dom'

function Searchbar() {
    let {search , setsearch , showsearchbar , setshowsearchbar} = useContext(ShopContext)
    let location = useLocation()
    
    console.log("path" +" "+ location.pathname)
    console.log(search)

    return showsearchbar && location.pathname.includes('/collection') ? (
        <div className='bg-grey-50  flex items-center justify-around'>
             <div className='w-3/4 border-b border-t bg-grey-50 flex items-center justify-around py-6 px-6 mt-4 mb-4 '>
               
               <div className='flex items-center gap-4'>
                 <input value={search} onChange={(e)=>(setsearch(e.target.value))} className='rounded-2xl text-center py-2 px-1 sm:px-10 outline-none border'  type="text" placeholder='Search' />
                <img onClick={()=>(setshowsearchbar(!showsearchbar))} className='h-[10px] sm:h-[20px]' src={assets.cross_icon} alt="" /></div>
             </div>

        </div>
    ) : null
}

export default Searchbar
