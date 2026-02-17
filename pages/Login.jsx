import React from 'react'
import { useState } from 'react'
import Subscribe from "../components/Subscribe";

function Login() {
    let [currentstate , setcurentstate] = useState("Sign up")
     
    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <div>
             <div className='flex items-center justify-around py-10'>
                <p className="text-2xl flex items-center gap-2 ">{currentstate} <div className="h-[2px] w-[50px] border"></div></p>
             </div>
             <div>
                <form onSubmit={handleSubmit}  className="flex flex-col items-center">
                    <div className='flex flex-col gap-4 m-auto min-w-[300px]'>
                        {currentstate === "Login" ? ' ' : 
                        <input className='text-sm py-2 px-2 border border-[#000000]' type="text " placeholder='Enter your name' required/>}
                        <input className='text-sm py-2 px-2 border border-[#000000]' type="email" placeholder='Enter your email'       required />
                        <input className='text-sm py-2 px-2 border border-[#000000]' type="password" placeholder='Enter your password' required />
                        <div className="flex justify-between"><p>Forgot your password?</p> <p>{currentstate === "Login" ? "Create account" : "Login here" }</p></div>
                    </div>
                     <button onClick={()=>(setcurentstate('Login'))} className=" mt-4 py-2 px-6 border bg-black text-white">{currentstate === 'Login' ? "Login" : "Sign up" }</button>
                </form>
             </div>
             <Subscribe/>
             
        </div>
    )
}

export default Login
