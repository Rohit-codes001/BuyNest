import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import About from '../pages/About'
import Collection from '../pages/Collection'
import Contact from '../pages/Contact'
import Products from '../pages/Products'
import Cart from '../pages/Cart'
import Order from '../pages/Order'
import PlaceOrder from '../pages/PlaceOrder'
import Login from '../pages/Login'
import Footer from '../components/Footer'
import Searchbar from '../components/Searchbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar/>
      <ToastContainer/>
      <Searchbar/>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/about' element={<About/>}/>
       <Route path='/collection' element={<Collection/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/products/:productId' element={<Products/>}/>
       <Route path='/cart' element={<Cart/>} />
       <Route path='/Order' element={<Order/>} />
       <Route path='/place-Order' element={<PlaceOrder/>} />
       <Route path='/Login' element={<Login/>} />
       
        

      </Routes>
     <Footer/>


    </div>
  )
}

export default App
