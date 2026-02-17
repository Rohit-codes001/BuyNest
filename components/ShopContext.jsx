
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { products } from '../assest/assets' //array
import { toast } from 'react-toastify'
  import { useNavigate } from 'react-router-dom';


 export let ShopContext = createContext()
  
 
 function ShopcontextProvider(props){
   
    let currency = "INR"
    let delivery_fee = 10;
    let [search , setsearch] = useState()
    let [showsearchbar , setshowsearchbar] = useState(true)
    let [cartdata , setcartdata] = useState({})
    let usenavigate = useNavigate()

         async  function addcart(prodcutId , size){
           
            if(!size){
                toast.error("PLease select a size")
                return;
            }
            let cartitem = structuredClone(cartdata)
           
                if(cartitem[prodcutId]){
                    if(cartitem[prodcutId][size]){
                        cartitem[prodcutId][size] += 1
                    }else{
                        cartitem[prodcutId][size] = 1
                    }
                }else{
                    cartitem[prodcutId] ={}
                    cartitem[prodcutId][size] = 1;
                }
                
                setcartdata(cartitem)
           }   


             function cartcount(){
                let count = 0;
                for(let key in cartdata){
                    for(let keys in cartdata[key]){
                       count += cartdata[key][keys]
                    }
                }
                
                return count;
             }

             async function updatequantity(itemId , size , quantity){
                let cartitem = structuredClone(cartdata)
                cartitem[itemId][size] = quantity
                setcartdata(cartitem)
              
                
             }


                 function totalcartAmount() {
                        let totalAmount =0;
                        for(let keyId in cartdata){
                            let productInfo = products.find((product)=>(
                                product._id === keyId
                            ))
                             try{
                                for(let keysize in cartdata[keyId]){
                                totalAmount += productInfo.price * cartdata[keyId][keysize]
                            }
                             }catch(err){

                             }
                            
                          }

                          return totalAmount
                }

           useEffect(()=>{
            
            cartcount()
           },[cartdata])

    const value ={
             products , currency , delivery_fee , search , setsearch,
             showsearchbar , setshowsearchbar , addcart , cartdata , cartcount ,
              updatequantity , totalcartAmount ,usenavigate
    }
    console.log(products)
return(
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
)
 }


 export default ShopcontextProvider
