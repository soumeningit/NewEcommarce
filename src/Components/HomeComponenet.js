import React from 'react'
import Navbar from './Navbar'
import HomeContent from './HomeContent'
import Homebottom from './Homebottom'
import SellingItem from './SellingItem'
import VegitableItem from './VegitableItem'
import Trending from './Trending'
import Review from './Review'
import Footer from './Footer'

function HomeComponenet() {
    return (
        <div>

            <HomeContent />
            <Homebottom />
            <SellingItem />
            <VegitableItem />
            <Trending />
            <Review />
            <Footer />
        </div>
    )
}

export default HomeComponenet