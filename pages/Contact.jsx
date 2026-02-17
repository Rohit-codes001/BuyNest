import React from 'react'
import { assets } from '../assest/assets'
import Title2 from '../components/Title2'
import Subscribe from '../components/Subscribe'

function Contact() {
    return (
        <div>
            <div className='text-2xl flex items-center justify-around py-5'><Title2 text1={"CONTACT"} text2={"US"} /></div>
            <div className='w-screen flex flex-col sm:flex-row'>
                {/* ---left side----- */}
                <div className='w-full sm:w-[50%] py-10 px-5 flex items-center '>
                    <img className='sm:w-[90%] sm:pl-30 ' src={assets.contact_img} alt="" />
                </div>

                {/* ---right side----- */}
                <div className='w-full sm:w-[50%] px-5 flex flex-col gap-3 sm:gap-6  py-20'>
                    <p className='text-2xl text-[#6D6D6D]'>Our Store</p>
                    <div>
                        <p className='text-[#6D6D6D]'>
                            54709 Willms Station
                        </p>
                        <p className='text-[#6D6D6D]'>
                            Suite 350, Washington, USA
                        </p>
                    </div>
                    <div>
                        <p className='text-[#6D6D6D]'>Tel: (415) 555‑0132</p>
                        <p className='text-[#6D6D6D]'>Email: BuyNest@gmail.com</p>
                    </div>
                        
                <div>
                    <p className='text-gray-600'>Careers at BuyNest</p>
                    <p className='text-[#6D6D6D]'>Learn more about our teams and job openings.</p>
                </div>
                
                <div>
                    <button className='text-[#6D6D6D] py-3 px-4 border border-[#6D6D6D] hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
                </div>
                </div>

            </div>

            <div>
                <Subscribe />
            </div>
        </div>
    )
}

export default Contact
