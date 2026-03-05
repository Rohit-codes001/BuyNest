
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
// import { products } from '../assest/assets' //array
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
let backendUrl = import.meta.env.VITE_BACKEND_URL


export let ShopContext = createContext()


function ShopcontextProvider(props) {

    let currency = "INR"
    let delivery_fee = 10;
    let [search, setsearch] = useState()
    let [showsearchbar, setshowsearchbar] = useState(true)
    let [cartdata, setcartdata] = useState({})
    let usenavigate = useNavigate()
    let [token , settoken] = useState('')
    
    let [products, setproducts] = useState([])

   
    
    let getproducts = async () => {
        try {
            settoken(localStorage.getItem('token'))
            let respons = await fetch('http://localhost:4000/api/user/allproducts', {
                method: 'GET'                
            })
            let data = await respons.json()
            
            setproducts(data.allproducts)
        }catch(err){

        }
       }
     useEffect(()=>(
        getproducts()
     ),[])
     

         let getcart = async (token) =>{
                 try{
                    let respons = await fetch('http://localhost:4000/api/cart/getCart',{
                    method:'POST',
    
                    headers:{
                        
                    'Content-type':'application/json',
                    authorization : token
                    }
                 })
                 let data = await respons.json()
                 if(data.success){
                    setcartdata(data.cartData)
                 }

                 }catch(err){
                    console.log(err.message)
                 }
    }


      
    useEffect(()=>{
        if(!token && localStorage.getItem('token')){
              settoken(localStorage.getItem('token'))
              getcart(localStorage.getItem('token'))

        }
},[])

    async function addcart(prodcutId, size) {

        if (!size) {
            toast.error("PLease select a size")
            return;
        }
        let cartitem = structuredClone(cartdata)

        if (cartitem[prodcutId]) {
            if (cartitem[prodcutId][size]) {
                cartitem[prodcutId][size] += 1
            } else {
                cartitem[prodcutId][size] = 1
            }
        } else {
            cartitem[prodcutId] = {}
            cartitem[prodcutId][size] = 1;
        }

        setcartdata(cartitem)


        if(token){
            
                  console.log(prodcutId)
            try{
                  let respons = await fetch('http://localhost:4000/api/cart/add',{
                    method:'POST',
                    body:JSON.stringify({prodcutId , size}),
                    headers:{
                        'Content-Type': 'application/json',
                        authorization : token
                    }
                  })
                  let data = await respons.json()
                  toast.success(data.message)
                
            }catch(err){
                toast.error(err.message)

            }
        }
    }


    function cartcount() {
        let count = 0;
        for (let key in cartdata) {
            for (let keys in cartdata[key]) {
                count += cartdata[key][keys]
            }
        }

        return count;
    }

    async function updatequantity(prodcutId, size, quantity) {
        let cartitem = structuredClone(cartdata)
        cartitem[prodcutId][size] = quantity
        setcartdata(cartitem)


        if(token){
            try{
             await fetch('http://localhost:4000/api/cart/update',{
                method:'POST',
                body:JSON.stringify({prodcutId , size , quantity}),
                headers:{
                    'Content-type':'application/json',
                    authorization : token
                }
                
              })
              

            }catch(err){


            }
        }


    }




    function totalcartAmount() {
        let totalAmount = 0;
        for (let keyId in cartdata) {
            let productInfo = products.find((product) => (
                product._id === keyId
            ))
            try {
                for (let keysize in cartdata[keyId]) {
                    totalAmount += productInfo.price * cartdata[keyId][keysize]
                }
            } catch (err) {

            }

        }

        return totalAmount
    }

    useEffect(() => {

        cartcount()
    }, [cartdata])

    const value = {
        products, currency, delivery_fee, search, setsearch,
        showsearchbar, setshowsearchbar, addcart, cartdata, cartcount, setcartdata,
        updatequantity, totalcartAmount, usenavigate, backendUrl ,token , settoken

    }


    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopcontextProvider
