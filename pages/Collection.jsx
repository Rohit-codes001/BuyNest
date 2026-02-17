import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../components/ShopContext'
import Card from '../components/Card'
import { assets } from '../assest/assets'
import { Link } from 'react-router-dom'

function Collection() {
    let [showfilter, setfilter] = useState(false)
    let [category, setgategory] = useState([])
    let [type, settype] = useState([])
    let [sortby, setsortby] = useState('Relavent')

    let [allproducts, setallproducts] = useState([])
    let { products, search } = useContext(ShopContext)

    function toggle(e) {
        let value = e.target.value
        if (category.includes(value)) {
            setgategory(category.filter(item => item !== value))
        } else {
            let arr = [...category, value]
            setgategory(arr);
        }


    }
    function toggle2(e) {
        let valuee = e.target.value

        if (type.includes(valuee)) {
            settype(type.filter(item => item !== valuee))
        } else {
            let arr = [...type, valuee]
            settype(arr)
        }
    }

    function applyAll() {
        let productCopy = [...products]

        if (category.length > 0) {
            productCopy = productCopy.filter(item =>
                category.includes(item.category.toLowerCase())
            )
        }
        if (search) {
            productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }

        setallproducts(productCopy)
    }


    function applyAll2() {

        let productCopy = [...products]
        if (type.length > 0) {
            productCopy = productCopy.filter(item => type.includes(item.subCategory.toLowerCase()))
        }
        setallproducts(productCopy)

    }


    function Shortproducts() {
        let copy_of_products = [...products]
        switch (sortby) {
            case "Low to high":
                setallproducts(copy_of_products.sort((a, b) => (a.price - b.price)))
                break;

            case "high to low":
                setallproducts(copy_of_products.sort((a, b) => (b.price - a.price)))
                break;
            default:
                applyAll();
                applyAll2();
                break;
        }
    }

    useEffect(() => {
        Shortproducts()
    }, [sortby])


    useEffect(() => {
        setallproducts(products)
    }, [products])

    useEffect(() => {
        applyAll()
    }, [category, search])

    useEffect(() => {

        applyAll2()
    }, [type])

    return (
        <div>
            <div className='flex flex-col sm:flex-row ' >
                <div className=' flex flex-col sm:px-10 sm:py-6 '>

                    <p onClick={() => (setfilter(!showfilter))} className=' text-2xl py-4 flex gap-1 items-center uppercase ml-6'>Filter
                        <img className={`sm:hidden h-[13px] ${showfilter ? 'rotate-90' : ''} `} src={assets.dropdown_icon} alt="" /></p>
                    <div className={`sm:block max-w-60 flex flex-col ml-6 border border-[#C8C8C8] ${showfilter ? 'block' : 'hidden'} `}>
                        <p className='px-4 text-xl'>Categories</p>
                        <ul className='py-4 px-4 flex flex-col gap-2 text-[#272727]'>
                            <li><input onChange={toggle} value="men" type="checkbox" /> Men</li>
                            <li><input onChange={toggle} value="women" type="checkbox" /> Women</li>
                            <li><input onChange={toggle} value="kids" type="checkbox" /> Kids</li>
                        </ul>

                    </div>
                    {/* filter with type */}
                    <div className={`sm:block max-w-60 flex flex-col ml-6 border my-10 border-[#C8C8C8] ${showfilter ? 'block' : 'hidden'} `}>
                        <p className='px-4 text-xl uppercase'>Type</p>
                        <ul className='py-4 px-4 flex flex-col gap-2  text-[#272727'>
                            <li><input onChange={toggle2} value='topwear' type="checkbox" />Topwear</li>
                            <li><input onChange={toggle2} value='bottomwear' type="checkbox" /> Bottomwear</li>
                            <li><input onChange={toggle2} value='winterwear' type="checkbox" /> Winterwear</li>
                        </ul>

                    </div>
                </div>

                <div className=' flex py-8  flex-col sm:flex-1  '>

                    <div className='px-4 py-4 flex justify-between'>
                        <p className='sm:text-[30px] flex items-center gap-2'><span className='text-[#707070]'>ALL</span> Collections <div className='h-[2px] w-[50px] border border-[#252525]'></div></p>
                        <select onChange={(e) => (setsortby(e.target.value))} className='border border-[#C8C8C8] outline-none sm:w-[200px]'>

                            <option value="Relavent">Relavent</option>
                            <option value="Low to high">Low to high</option>
                            <option value="high to low">high to low</option>
                        </select>


                    </div>

                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4'>
                        {

                            allproducts.map((item, index) => (
                                <Link key={index} to={`/products/${item._id}`}>  <Card key={index} name={item.name} image={item.image[0]} price={item.price} />
                                </Link>))

                        }
                    </div>

                </div>



            </div>
        </div>
    )
}

export default Collection
