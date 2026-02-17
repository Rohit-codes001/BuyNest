import React, { useContext } from 'react'
import { ShopContext } from '../components/ShopContext'
import Title2 from '../components/Title2'

function Order() {
    let { products, currency } = useContext(ShopContext)

    return (
        <div>
            <div className='text-2xl px-4 py-2 sm:px-20'>
                <Title2 text1={"MY"} text2={"ORDERS"} />
            </div>

            <div className='px-4 sm:px-20 sm:py-10 '>
                {
                    products.slice(0, 4).map((item, index) => (
                        <div key={index} className='py-4 px-2  border-t border-b border-gray-300 flex flex-col sm:flex-row md:items-center md:justify-between gap-4'>
                            <div className='flex items-start gap-6 text-sm '>
                                <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                                <div className='flex flex-col gap-2'>
                                    <p className='text-[12px] font-medium'  >{item.name}</p>
                                    <div className='flex gap-2'>
                                        <p className='text-[14px]'>{currency} {item.price}</p>
                                        <p>Quantity : 1</p>
                                        <p>size : m</p>
                                    </div>
                                    <div className=' flex items-center justify-between'>
                                        <span>Date : 7 Feb 2026</span>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className=' flex gap-6 justify-between '>
                                <p className='flex items-center gap-2'>Ready to Ship <p className='h-[10px] w-[10px] rounded-[50%] bg-green-500'></p></p>
                                <button className=' border border-gray-300 px-2 bg-yellow-400 text-black font-medium rounded-[5px] cursor-pointer '>Tract Order</button>

                            </div>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Order
