import React from 'react'
import Searchbar from '../components/Searchbar'
import Products from './Products'
import { assets } from '../assest/assets'
import Title2 from '../components/Title2'
import Subscribe from '../components/Subscribe'

function About() {
    return (
        <div>

            <div className=' h-[100px] w-screen flex items-center justify-around '>
                <Title2 text1={"ABOUT"} text2={"US"} />
            </div>
            <div className='w-screen flex flex-col items-center gap-4 sm:flex-row'>
                {/* ---- left side */}

                <div className='w-[100%] sm:w-[50%] flex items-center justify-around '>

                    <img className='py-5 w-[90%] sm:w-[80%] sm:h-[60%] sm:py-10 px-5' src={assets.about_img} alt="" />
                </div>


                {/* ---- right side */}

                <div className='w-[100%] sm:w-[50%] flex flex-col gap-4 '>
                    <p className=' px-5 text-[#6D6D6D] text-[15px] leading-[150%] '>
                        Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
                    </p>

                    <p className=' px-5 text-[#6D6D6D] text-[15px] leading-[150%] '>
                        Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.

                    </p>

                    <p className=' px-5 text-[#6D6D6D] text-[15px] leading-[150%] '>
                        Our Mission
                    </p>
                    <p className=' px-5 text-[#6D6D6D] text-[15px] leading-[150%] '>
                        Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
                    </p>
                </div>

            </div>

            <div className=' text-xl px-5 py-10 sm:px-22 '>

                <Title2 text1={"WHY"} text2={"CHOOSE US"} />
            </div>
                 

                 <div className='flex flex-col sm:flex-row text-sm mb-20 sm:px-20 px-5'>
                    <div className=' border border-gray-300 px-5 py-10 sm:py-20 min-w-[300px]  md:px-16 flex flex-col gap-5'>
                        <b>Quality Assurance:</b>
                        <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
                    </div>
                    <div className='border border-gray-300  px-5 py-10 sm:py-20 md:px-16 flex flex-col gap-5'>
                        <b>Convenience</b>
                        <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
                    </div>

                    
                    <div className='border border-gray-300  px-5 py-10 sm:py-20 md:px-16 flex flex-col gap-5'>
                        <b>Exceptional Customer Service:</b>
                        <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
                    </div>
                 </div>
           
           
            <div>
                <Subscribe />
            </div>
        </div>
    )
}

export default About
