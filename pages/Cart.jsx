import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../components/ShopContext'
import { assets } from '../assest/assets'
import CartTotal from '../components/CartTotal'

function Cart() {

    let { products, cartdata, currency, updatequantity , usenavigate} = useContext(ShopContext)
    let [allcartitem, setallcartitems] = useState([])

    useEffect(() => {
        let temp = []
        for (let key in cartdata) {
            for (let keysize in cartdata[key]) {
                if (cartdata[key][keysize] > 0) {
                    temp.push({
                        _id: key,
                        size: keysize,
                        quantity: cartdata[key][keysize]
                    })
                }
            }
        }
        setallcartitems(temp)


    }, [cartdata])







    return (
        <div className='border-t py-14'>
            <div className='mx-10 sm:mx-20'>
                <div className='flex gap-1 mb-4'><p className='text-[30px] sm:text-2xl tracking-[0%] leading-[100%] text-[#707070]'>Your</p>
                    <p className='text-[30px] sm:text-2xl tracking-[0%] leading-[100%] flex items-center gap-1'>CART <div className='h-[2px] w-[50px] border'></div></p></div>
            </div>

            <div>
                {
                    allcartitem.map((item, index) => {
                        let productdata = products.find((product) => (
                            product._id === item._id
                        ))

                        return (
                            <div key={index} className='border-t border-b mt-4 mx-10 sm:mx-20 grid grid-cols-[4fr_0.5fr_0.5fr] sm:[4fr_2fr_0.5fr] items-center gap-4'>

                                <div className='flex items-start gap-6'>
                                    <img className='w-16 sm:w-20' src={productdata.image[0]} alt="" />

                                    <div>
                                        <p className='text-[12px] sm:text-lg font-medium'>{productdata.name}</p>
                                        <div>
                                            <p>{currency} {productdata.price}</p>
                                            <p>{item.size}</p>
                                        </div>
                                    </div>
                                </div>

                                <input onChange={(e) => (e.target.value === 0 || e.target.value === 0 ? 'null' : updatequantity(item._id, item.size, Number(e.target.value)))} className='border max-w-10 sm:max-w-16 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
                                <img onClick={() => (updatequantity(item._id, item.size, 0))} className='w-4 mr-4 cursor-pointer ' src={assets.bin_icon} alt="" />
                            </div>
                        )
                    })
                }
            </div>

            <div className='sm:flex sm:flex-end '>

                <div className='w-full flex flex-col sm:w-[480px] start-end '>

                    <CartTotal />
                        <div className='flex items-center justify-end mx-10 sm:mx-20'>
                            
                                
                            <button onClick={()=>(usenavigate('/place-Order'))} className=' cursor-pointer  bg-black text-white px-5 sm:px-10 py-3 font-medium hover:scale-105 '>Proceed to checkout</button>
                        
                        </div>
                </div>
            </div>






        </div>
    )
}

export default Cart
