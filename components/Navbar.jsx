import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from './ShopContext'


function Navbar() {
    let [visible, setvisible] = useState(false)
    let { showsearchbar, setshowsearchbar, cartcount } = useContext(ShopContext)

    return (
        <div className='h-[56px] w-screen py-5  flex items-center justify-around '>
            <img className='w-30 sm:w-50' src="../assest/BuyNest.png " alt="logo" />


            <ul className=' prata-regular hidden  md:flex items-center gap-4 md:block '>
                <NavLink to='/' className="flex items-center flex-col justify-center">
                    <p className='uppercase'>Home</p>
                    <hr className='w-8 h-[1.5px] border border-green-400 hidden' />
                </NavLink>

                <NavLink to='/about' className="flex items-center flex-col justify-center " >
                    <p className='uppercase'>About</p>
                    <hr className='w-8 h-[1.5px] border border-green-400 hidden' />
                </NavLink>

                <NavLink to='/collection' className="flex items-center flex-col justify-center" >
                    <p className='uppercase'>Collection</p>
                    <hr className='w-8 h-[1.5px] border border-green-400 hidden' />
                </NavLink>

                <NavLink to='/contact' className="flex items-center flex-col justify-center" >
                    <p className='uppercase'>contact</p>
                    <hr className='w-8 h-[1.5px] border border-green-400 hidden' />
                </NavLink>
            </ul>


            <div className='flex items-center gap-8'>
                <img className='w-6 sm:w-8' onClick={() => (setshowsearchbar(!showsearchbar))} src="../assest/search_icon.png" alt="" />
                <div className='group relative'>
                    <Link to={'/Login'}> <img className='w-6 sm:w-8' src="../assest/profile_icon.png" alt="" />  </Link>
 
                                      <div className='group-hover:block hidden cursor-pointer absolute border flex flex-col items-center justify-around gap-4 w-36 bg-slate-100 py-3 px-5 border-0'>
                        <ul>
                            <li className='cursor-pointer'>My Profile</li>
                            <li className='cursor-pointer'>Orders</li>
                            <li className='cursor-pointer'>Logout</li>
                        </ul>


                    </div>
                </div>
                <Link className=' relative' to='/cart'><img className='w-6 sm:w-8' src="../assest/cart_icon.png" alt="" />
                    <p className='absolute top-0 right-0 text-[15px] bg-amber-400 font-bold text-red-600 rounded-2xl '>{cartcount()}</p>
                </Link>

                <img  onClick={() => (setvisible(true))} className='md:hidden sm:hidden lg:hidden w-6 sm:h-8' src="../assest/menu_icon.png" alt="" />

            </div>


            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden transition-all bg-white ${visible ? 'w-full' : 'w-0'}  `}>
                <span onClick={() => (setvisible(false))}>BACK</span>

                <ul className='flex flex-col gap-1'>
                    <Link onClick={() => setvisible(false)} className='uppercase cursor-pointer py-4 px-2 ' to='/'>Home</Link>
                    <hr />
                    <Link onClick={() => setvisible(false)} className='uppercase cursor-pointer py-4 px-2 ' to='/about'>about</Link>
                    <hr />
                    <Link onClick={() => setvisible(false)} className='uppercase cursor-pointer py-4 px-2 ' to='/collection'>collection</Link>
                    <hr />
                    <Link onClick={() => setvisible(false)} className='uppercase cursor-pointer py-4 px-2 ' to='/contact'>contact</Link>
                    <hr />
                </ul>

            </div>

        </div>
    )
}

export default Navbar
