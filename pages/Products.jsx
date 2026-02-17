import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ShopContext } from '../components/ShopContext'
import { assets } from '../assest/assets'
import Relatedproduct from '../components/Relatedproducts'

function Products() {

    let { productId } = useParams()
    console.log("productId" + " " + productId)
    let { products, currency , addcart } = useContext(ShopContext)
    let [productdata, setproductdata] = useState(false)
    let [productimage, setprodcutimage] = useState('')
    let [size, setsize] = useState('')


    async function fetchdata() {
        products.map((item) => {
            if (item._id == productId) {
                setproductdata(item)
                
                setprodcutimage(item.image[0])
                return null;
            }
        })

    }


    
    useEffect(() => {
        fetchdata()
    }, [productId])




    return productdata ? (
        <div>
            <div className='flex flex-col items-center justify-around sm:flex-row items-center w-screen h-[95vh] sm:h-[40vh] md:h-[80vh] '>
                {/* left side div phone me upper div */}
                <div className='w-full h-[70%] flex flex-col gap-2 items-center sm:h-full sm:flex-row  ' >
                    <div className=' h-[80%] w-[90%] mt-2 sm:[400px] sm:w-[350px] sm:ml-[50px]  '>
                        <img className=' h-[100%] w-[100%] sm:h-[400px] sm:w-[350px] sm:ml-[50px]  ' src={productimage} alt="" />
                    </div>
                    {/*   all images   */}
                    <div className='h-[20%] w-[80%] sm:h-[400px] sm:w-[120px] sm:ml-14  flex items-center gap-2 sm:flex-col overflow-scroll'>
                        {

                            productdata.image.map((item) => (

                                <img onClick={() => (setprodcutimage(item))} className='  m-2 h-full w-[20px] sm:h-[90px] w-[100px] mt-2 ' src={item} alt="" />
                            ))
                        }
                    </div>


                </div>

                {/* left side div phone me upper div */}
                <div className='w-full h-[30%] sm:h-full  sm:flex sm:flex-col sm:gap4'>
                    <p className='text-[20px] py-2 px-2 sm:text-2xl sm:pt-10'>{productdata.name}</p>
                    <div>
                        <ul className='flex py-2 px-2'>
                            <li>
                                <img className='size-4 sm:size-8' src={assets.star_icon} alt="" /> </li>
                            <li>
                                <img className='size-4 sm:size-8' src={assets.star_icon} alt="" /> </li>
                            <li>
                                <img className='size-4 sm:size-8' src={assets.star_icon} alt="" /> </li>
                            <li>
                                <img className='size-4 sm:size-8' src={assets.star_icon} alt="" /> </li>

                            <li>
                                <img className='size-4 sm:size-8' src={assets.star_dull_icon} alt="" /></li>

                            <li><p className='text-[13px] sm:text-2xl'>(22)</p></li>
                        </ul>
                    </div>

                    <p className='text-[10px] px-2 py-2 sm:text-[16px] text-[#555555]'>{productdata.description}</p>
                    <div className='px-2 py-2 flex gap-8'>{
                        productdata.sizes.map(item => (
                            <button onClick={() => (setsize(item))} className={`py-1 px-2 cursor-pointer  bg-gray-100 ${size == item ? 'border' : ' '}`}  >{item}</button>
                        ))
                    }</div>
                    <div className='flex items-center  justify-around py-4 sm:w-[60%]  sm:my-5'>
                        <button onClick={()=>(addcart(productdata._id , size))} className='border px-6 py-3 rounded-2xl text-[15px] cursor-pointer'>Add to cart</button>
                        <button className=' px-7 py-3 rounded-2xl bg-yellow-300 text-[15px] cursor-pointer '>By at  {currency} {productdata.price}</button>
                    </div>

                    {/* ------Cash on delivery is available on this product. ------  */}
                    <div className='hidden sm:block'>
                        <hr className='w-3/5 px-5' />
                        <p className='text-[#555555] sm:text-[16px] sm:leading-[25px] tracking-[0%]'>100% Original product.</p>
                        <p className='text-[#555555] sm:text-[16px] sm:leading-[25px] tracking-[0%]'>Cash on delivery is available on this product.</p>
                        <p className='text-[#555555] sm:text-[16px] sm:leading-[25px] tracking-[0%]'>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>

                <div>

                </div>

            </div>



            {/* -- description ----  */}

            <div className='py-10'>
                <div className='flex gap-4 px-2 '>
                    <button className='  py-4 px-10 border border-[#D0D0D0] sm:w-[170px] '  >Description</button>
                    <button className='  py-4 px-8  bg-[#D0D0D0]'> Reviews (122) </button>
                </div>

                <div className='flex items-center flex-col gap-4 border border-[#D0D0D0] py-2 px-2 my-2 mx-2 sm:py-6 md:py-10 lg:py-12 '>
                    <p className='px-4 sm:leading-[28px] tracking-[0% text-[#555555] '>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet.
                        It serves as a virtual marketplace where businesses and individuals can showcase their products,
                        interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained
                        immense popularity due to their
                        convenience, accessibility, and the global reach
                        they offer.</p>

                    <p className='px-4 sm:leading-[28px] tracking-[0% text-[#555555]'>E-commerce websites typically display products or services along with detailed descriptions,
                        images, prices, and any available variations (e.g., sizes, colors). Each product usually has
                        its own dedicated page with relevant information.</p>
                </div>


                {/*  Related products */}

                <div className='py-10 flex items-center sm:flex-col'>
                     <div className='flex w-screen  items-center justify-around '> {/*  title */}
                        <div className='flex'>
                            
                            <p className='text-[30px] px-2 sm:text-2xl text-[#707070] '>Related   </p>
                            <p className='text-[30px] px-2 sm:text-2xl flex items-center gap-2 '>Products <div className='h-[2px] w-[50px] border'></div></p>
                        </div>
                         </div> 
                    
                </div>
                 <div className='flex flex-col sm:flex-row'>
                        {/* show products   */}
                       
                       <Relatedproduct prodcutscategory={productdata.category} productsubcategory={productdata.subCategory} />                    </div>


            </div>







        </div>
    ) : <div className='opacity-0'></div>
}

export default Products
