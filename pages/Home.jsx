import React from 'react'

import Hero from '../components/Hero.jsx'
import LatestCollection from '../components/LatestCollection.jsx'
import Latest from '../components/Latest.jsx'
import BestSeller from '../components/BestSeller.jsx'
import BestSclothes from '../components/BestSclothes.jsx'
import OurPolicy from '../components/OurPolicy.jsx'
import Subscribe from '../components/Subscribe.jsx'
import Footer from '../components/Footer.jsx'


function Home() {
    return (
        <div>
            <Hero/>
            <Latest/>
            <LatestCollection/> 
            <BestSeller/>
            <BestSclothes/>
            <OurPolicy/>
            <Subscribe/>
             
        </div>
    )
}

export default Home
