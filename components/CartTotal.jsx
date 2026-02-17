import React, { useContext } from 'react'
import { ShopContext } from './ShopContext'
import Title2 from './Title2'

function CartTotal() {
    
   let {totalcartAmount , currency} = useContext(ShopContext)
                


    return (
        <div className='flex flex-end flex-col max-w-[400px] px-10 py-10 sm:mx-10'>
            <div className='py-3'>
                <Title2 text1={"CART"} text2={"TOTAL"} />
            </div>
            <div className='flex justify-between py-2'>
                <p className='text-[15px] sm:text-[20px] text-[#555555]'>Subtotal</p> <p className='text-[15px] sm:text-[20px] text-[#555555]'>{currency} {totalcartAmount()}</p>
              
            </div>
              <hr className='border-[#555555]' />
               <div className='flex justify-between py-2'>
                <p className='text-[15px] sm:text-[20px] text-[#555555]'>Shipping Fee</p> <p className='text-[15px] sm:text-[20px] text-[#555555]'>{currency} 10</p>
              
            </div>
              <hr className='border-[#555555]' />
               <div className='flex justify-between py-2'>
                <p className='text-[15px] sm:text-[20px] text-[#555555]'>Total</p> <p className='text-[15px] sm:text-[20px] text-[#555555]'>{currency} {totalcartAmount() + 10}</p>
               
            </div>
             <hr className='border-[#555555]' />
        </div>
    )
}

export default CartTotal
