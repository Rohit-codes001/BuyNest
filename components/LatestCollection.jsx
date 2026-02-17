import React, { useEffect, useState } from 'react'
import { ShopContext  } from './ShopContext'
import { useContext } from 'react'
import Card from './Card'

function LatestCollection() {
    const [showproducts , setshowproducts] = useState([])
    const { products, currency, delivery_fee } = useContext(ShopContext)
     
    useEffect(()=>{
        setshowproducts(products.slice(0,10))
    },[])
    console.log(showproducts)

    

    return (
        <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 py-4 px-4 '>
              {
                showproducts.map((item , index)=>(
                    <Card key={index} name={item.name} image={item.image[0]} price={item.price}   />
                ))
              }
        </div>
    )
}

export default LatestCollection
