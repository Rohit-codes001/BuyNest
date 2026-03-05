import React, { useContext, useEffect, useState } from 'react'
import Title2 from '../components/Title2'
import CartTotal from '../components/CartTotal'
import { assets } from '../assest/assets'
import { backend_url } from '../src/App'

import { ShopContext } from '../components/ShopContext'
import { toast } from 'react-toastify'

function PlaceOrder() {

    let { usenavigate, token, delivery_fee, totalcartAmount, products, cartdata, setcartdata } = useContext(ShopContext)

    let [method, setmethod] = useState("COD")



    let [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        phone: ''

    })

    let onchangehandler = (e) => {
        try {

            let name = e.target.name
            let value = e.target.value
            setFormData(predata => ({ ...predata, [name]: value }))

        } catch (err) {
            console.log(err.message)
        }
    }

    async function onsubmithandler(e) {
        e.preventDefault()
        try {
            let orderItem = []
            for (let items in cartdata) {
                for (let item in cartdata[items])
                    if (cartdata[items][item] > 0) {
                        const itemInfo = structuredClone(products.find(product => product._id == items))
                        if (itemInfo) {
                            itemInfo.size = item
                            itemInfo.quantity = cartdata[items][item]
                            orderItem.push(itemInfo)
                        }
                    }
            }

            let orderdata = {
                address: formData,
                items: orderItem,
                amount: totalcartAmount() + delivery_fee
            }

            switch (method) {
                case 'COD':
                    let respons = await fetch('http://localhost:4000/api/order/placeorder', {
                        method: 'POST',
                        body: JSON.stringify( orderdata ),
                        headers: {
                            'Content-Type': 'application/json',
                            authorization: token
                        }
                    })
                    let data = await respons.json()
                    
                    if (data.success) {
                        setcartdata({})
                        console.log('done')
                        usenavigate('/Order')


                    } else {
                    
                        toast.error(data.message)
                    }
                    break;
                default:
                    break;
            }
        } catch (err) {
            console.log(err.message)


        }
    }




    return (
        <div>

            <div className='px-7 py-5 sm:px-22 sm:py-10'>

                <Title2 text1={'DELIVERY'} text2={"INFORMATION"} />
            </div>

            <form onSubmit={onsubmithandler} className='w-screen flex flex-col sm:flex-row'>

                {/* -----left side on sm */}
                <div className='w-full sm:w-[50%] sm:px-15'>
                    <div className='flex  items-center justify-around px-5 py-3'>
                        <input onChange={onchangehandler} value={formData.firstName} name='firstName' required className='border border-gray-300  w-[45%] py-2 px-2 ' type="text" placeholder='First name' />
                        <input onChange={onchangehandler} value={formData.lastName} name='lastName' required className='border border-gray-300 w-[45%]  py-2 px-2 ' type="text" placeholder='Last name' />
                    </div>
                    <div className='flex  items-center justify-around px-7 sm:px-8  py-2' >
                        <input onChange={onchangehandler} value={formData.email} name='email' required className='border border-gray-300  w-full px-2 py-2 ' type="email" placeholder='Email address' />
                    </div>

                    <div className='flex  items-center justify-around px-7 sm:px-8  py-2' >
                        <input onChange={onchangehandler} value={formData.street} name='street' required className='border border-gray-300  w-full px-2 py-2 ' type="text" placeholder='Street' />
                    </div>

                    <div className='flex  items-center justify-around px-5 py-3'>
                        <input onChange={onchangehandler} value={formData.city} name='city' required className='border border-gray-300 w-[45%]  py-2 px-2' type="text" placeholder='City' />
                        <input onChange={onchangehandler} value={formData.state} name='state' required className='border border-gray-300  w-[45%] py-2 px-2 ' type="text" placeholder='State' />
                    </div>

                    <div className='flex  items-center justify-around px-5 py-3'>
                        <input onChange={onchangehandler} value={formData.zipCode} name='zipCode' required className='border border-gray-300 w-[45%]  py-2 px-2' type="number" placeholder='Zipcode ' />
                        <input onChange={onchangehandler} value={formData.country} name='country' required className='border border-gray-300  w-[45%] py-2 px-2 ' type="text" placeholder='Country' />
                    </div>


                    <div className='flex  items-center justify-around px-7 sm:px-8  py-2' >
                        <input onChange={onchangehandler} value={formData.phone} name='phone' required className='border border-gray-300  w-full px-2 py-2 ' type="number" placeholder='Phone' />
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


                        <button type='submit' className=' cursor-pointer  bg-black text-white px-5 sm:px-10 py-3 font-medium hover:scale-105 '>ORDER NOW</button>

                    </div>


                </div>
            </form>
        </div>
    )
}

export default PlaceOrder
