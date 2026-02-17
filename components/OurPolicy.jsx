import React from 'react'
import { assets } from '../assest/assets'

function OurPolicy() {
    return (
        <div>
            <div className='flex items-center flex-col justify-around sm:flex-row'>
                <ul className='flex flex-col items-center py-10'>
                    <li><img src={assets.exchange_icon} alt="" /></li>
                    <li className='text-[25px]'>Easy Exchange Policy</li>
                    <li>We offer hassle free  exchange policy</li>
                </ul>
                 <ul className='flex flex-col items-center py-10'>
                    <li><img src={assets.quality_icon} alt="" /></li>
                    <li className='text-[25px]'>7 Days Return Policy</li>
                    <li>We provide 7 days free return policy </li>
                </ul>
                <ul className='flex flex-col items-center py-10'>
                    <li><img src={assets.support_img} alt="" /></li>
                    <li className='text-[25px]'>Best Customer Support</li>
                    <li>We provide 24/7 customer support</li>
                </ul>
                 
            </div>


        </div>
    )
}

export default OurPolicy
