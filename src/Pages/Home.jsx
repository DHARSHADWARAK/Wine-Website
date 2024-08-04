import React from 'react'
import Discover from '../components/Discover'
import Sunny_Wine from '../components/Sunny_Wine'
import Slider from '../components/Slider'

import NavBar from '../components/Navbar'
import Body from '../components/Body'
import Products from '../components/Products'

import Wize_blog from '../components/Wize_blog'
import Subscribe from '../components/Subscribe'
import Footerbar from '../components/Footerbar'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>

      <NavBar />
      <Body />
      <Products />
      <Discover />
      <Sunny_Wine />
      <Slider />
    <Wize_blog/>
    <Subscribe/>
    <Footerbar/>
    <Footer/>

    </>
  )
}

export default Home