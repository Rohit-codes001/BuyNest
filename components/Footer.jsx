import React from 'react'

function Footer() {
    return (
        <div className=' py-10 flex flex-col items-center sm:flex-row sm:justify-around sm:gap-8 '>
            
            <div className='sm:w-[40%] sm:px-10 sm:py-15'>
                <ul className='flex flex-col items-center'>
                <li className='text-[25px]'>BUYNEST</li>
                <li className='text-[10px] py-2 px-2 leading-4 font-bold sm:text-[18px] sm:font-normal sm:leading-[30px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
            </ul>
            </div>

            
            <div>
                <ul className='flex gap-2 py-4 sm:gap-4 sm:flex-col'>
                    <p className=' hidden sm:block sm:text-[20px]'>COMPNAY</p>
                <li className='text-[18px]'>Home</li>
                <li className='text-[18px]'>About Us</li>
                <li className='text-[18px]'>Delivery</li>
                <li className='text-[18px]'>Privacy Policy</li>
            </ul>
            </div>
           
           <div className=''>
             <ul className='flex gap-2 py-4 sm:flex-col sm:py-[-30px]'>
                <p className='hidden sm:block sm:text-[20px]'>GET IN TOUCH</p>
                <li>+1-212-456-7890</li>
                <li>Buynest@gmail.com</li>
            </ul>
              
           </div>
          
          
        </div>
    )
}

export default Footer
