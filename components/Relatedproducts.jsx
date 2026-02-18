import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from './ShopContext'
import Card from './Card'
import { Link } from 'react-router-dom'

function Relatedproducts({ prodcutscategory, productsubcategory }) {

    let { products } = useContext(ShopContext)
    let [relatedproducts, setrelatedproducts] = useState([])

    useEffect(() => {
        if (products.length > 0) {
            let cp_profucts = products.slice();

            cp_profucts = cp_profucts.filter((item) => (
                prodcutscategory == item.category
            ))

            cp_profucts = cp_profucts.filter((item) => (
                productsubcategory == item.subCategory
            ))
     setrelatedproducts(cp_profucts.slice(0,5))
        }
    }, [products])
 console.log("relatedproducts" +" "+ relatedproducts)


    return (
        <div>
   <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'> 
{
    relatedproducts.map((item , index)=>(
        <Link key={index} to={`/products/${item._id}`}>
        <Card key={index} image={item.image[0]} name={item.name} price={item.price} /></Link>
    ))
}
   </div>

        </div>
    )
}

export default Relatedproducts
