import React, { useEffect, useState } from 'react'
import { ShopContext } from './ShopContext'
import { useContext } from 'react'
import Card from './Card'

function BestSclothes() {
    let { products } = useContext(ShopContext)
    let [showproducts, setshowproducts] = useState([])
    useEffect(() => {
        function filterdata(){
            
        let filterproducts = products.filter((item) => (
            item.bestseller == true
        ))
        setshowproducts(filterproducts.slice(0, 5))
        }
        filterdata()
    }, [])

    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 py-4 px-4'>
            {
                showproducts.map((item, index) => (
                    <Card key={index} name={item.name} price={item.price} image={item.image[0]} />
                ))
            }
        </div>
    )
}

export default BestSclothes
