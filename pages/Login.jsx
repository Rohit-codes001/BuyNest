import React, { useContext } from 'react'
import { useState } from 'react'
import Subscribe from "../components/Subscribe";
import { ShopContext } from '../components/ShopContext';
import { toast } from 'react-toastify';
import {backend_url} from '../src/App'

function Login() {
    let [currentstate, setcurentstate] = useState("Login")
    let { token, settoken, usenavigate } = useContext(ShopContext)
    let [name, setname] = useState('')
    let [email, setemail] = useState('test@gmail.com')
    let [password, setpassword] = useState('12345678')
    async function handleSubmit(e) {
        e.preventDefault()
        try{
            
          
            if(currentstate == "Sign up"){


            let respons = await fetch(backend_url+'/api/user/register',{
                method:"POST",
                body:JSON.stringify({name ,email , password}),
                headers:{
                    "Content-Type": 'application/json'
                }
            })
            let data = await respons.json()
            console.log(data)
         
            }else{
                
            let respons = await fetch(backend_url+'/api/user/login',{
                method:"POST",
                body:JSON.stringify({email , password}),
                headers:{
                    "Content-Type": 'application/json'
                }
            })
            let data = await respons.json()
            console.log(data)
            if(data.success){
                usenavigate('/')
                localStorage.setItem('token',data.token)
                settoken(data.token)
            }else{
                console.log(data.message)
                toast.error(data.message)
            }
            
            }

        }catch(err){

        }

    }



    return (
        <div>
            <div className='flex items-center justify-around py-10'>
                <p className="text-2xl flex items-center gap-2 ">{currentstate} <div className="h-[2px] w-[50px] border"></div></p>
            </div>
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <div className='flex flex-col gap-4 m-auto min-w-[300px]'>
                        {currentstate === "Login" ? ' ' :
                            <input onChange={(e) => (setname(e.target.value))} value={name} className='text-sm py-2 px-2 border border-[#000000]' type="text " placeholder='Enter your name' required />}
                        <input onChange={(e) => (setemail(e.target.value))} value={email} className='text-sm py-2 px-2 border border-[#000000]' type="email" placeholder='Enter your email' required />
                        <input onChange={(e) => (setpassword(e.target.value))} value={password} className='text-sm py-2 px-2 border border-[#000000]' type="password" placeholder='Enter your password' required />
                        <div className="flex justify-between"><p>Forgot your password?</p> <p>{currentstate === "Login" ? <p onClick={() => (setcurentstate('Sign up'))}>Create account</p> : <p onClick={() => (setcurentstate('Login'))}>Login here</p>}</p></div>
                    </div>
                    <button onClick={() => (setcurentstate('Login'))} type='submit' className=" mt-4 py-2 px-6 border bg-black text-white cursor-pointer">{currentstate === 'Login' ? "Login" : "Sign up"}</button>
                </form>
            </div> 
            <Subscribe />

        </div>
    )
}

export default Login
