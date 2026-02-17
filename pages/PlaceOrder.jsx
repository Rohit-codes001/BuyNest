import React, { useContext, useEffect, useState } from 'react'
import Title2 from '../components/Title2'
import CartTotal from '../components/CartTotal'
import { assets } from '../assest/assets'

import { ShopContext } from '../components/ShopContext'

function PlaceOrder() {

    let { usenavigate } = useContext(ShopContext)

    let [method, setmethod] = useState("COD")

    useEffect(() => {
        console.log(method)
    }, [method])

    return (
        <div>

            <div className='px-7 py-5 sm:px-22 sm:py-10'>
                
            <Title2 text1={'DELIVERY'} text2={"INFORMATION"} />
            </div>

            <div className='w-screen flex flex-col sm:flex-row'>

                {/* -----left side on sm */}
                <div className='w-full sm:w-[50%] sm:px-15'>
                    <div className='flex  items-center justify-around px-5 py-3'>
                        <input className='border border-gray-300 w-[45%]  py-2 px-2 ' type="text" placeholder='First name' />
                        <input className='border border-gray-300  w-[45%] py-2 px-2 ' type="text" placeholder='Last name' />
                    </div>
                    <div className='flex  items-center justify-around px-7 sm:px-8  py-2' >
                        <input className='border border-gray-300  w-full px-2 py-2 ' type="text" placeholder='Email address' />
                    </div>

                    <div className='flex  items-center justify-around px-7 sm:px-8  py-2' >
                        <input className='border border-gray-300  w-full px-2 py-2 ' type="text" placeholder='Street' />
                    </div>

                    <div className='flex  items-center justify-around px-5 py-3'>
                        <input className='border border-gray-300 w-[45%]  py-2 px-2' type="text" placeholder='City' />
                        <input className='border border-gray-300  w-[45%] py-2 px-2 ' type="text" placeholder='State' />
                    </div>

                    <div className='flex  items-center justify-around px-5 py-3'>
                        <input className='border border-gray-300 w-[45%]  py-2 px-2' type="text" placeholder='Zipcode ' />
                        <input className='border border-gray-300  w-[45%] py-2 px-2 ' type="text" placeholder='Country' />
                    </div>


                    <div className='flex  items-center justify-around px-7 sm:px-8  py-2' >
                        <input className='border border-gray-300  w-full px-2 py-2 ' type="text" placeholder='Phone' />
                    </div>


                </div>

                {/* -----left side on sm */}
                <div className='w-full sm:w-[50%] sm:px-15'>
                    <CartTotal />
                    <div className='flex gap-2 flex-col sm:flex-row items-center  cursor-pointer px-10 '>
                        <div onClick={() => (setmethod("stripe"))} className='px-2  py-2 border  border-gray-300 w-full flex items-center gap-2'  >
                            <p className={`h-3 w-3 rounded-[50%] border  border-gray-300 ${method === 'stripe' ? 'bg-green-500' : ' '}`}></p>
                            <img className='h-5 mx-3' src={assets.stripe_logo} alt="" />
                        </div>


                        <div onClick={() => (setmethod("razorpay"))} className='px-2  py-2 border  border-gray-300 w-full flex items-center gap-2  cursor-pointer' >
                           
                           <p className={`h-3 w-3 rounded-[50%] border  border-gray-300 ${method === 'razorpay' ? 'bg-green-500' : ' '}`}></p>
 
                            <img className='h-5 mx-3' src={assets.razorpay_logo} alt="" />
                        </div>


                        <div onClick={() => (setmethod("COD"))} className='px-2  py-3 border  border-gray-300 w-full flex items-center gap-2  cursor-pointer' >
                            <p className={`h-3 w-3 rounded-[50%] border  border-gray-300 ${method === 'COD' ? 'bg-green-500' : ' '}`}></p>
                            <p className='  text-sm sm:text-[12px] ' >CASH ON DELIVERY</p>
                        </div>

                    </div>
                    <div className='flex items-center justify-end mx-10 sm:mx-20 py-2'>


                        <button onClick={() => (usenavigate('/Order'))} className=' cursor-pointer  bg-black text-white px-5 sm:px-10 py-3 font-medium hover:scale-105 '>ORDER NOW</button>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default PlaceOrder
