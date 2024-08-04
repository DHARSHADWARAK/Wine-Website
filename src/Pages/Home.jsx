import React from 'react'
import Discover from '../components/Discover'
import Sunny_Wine from '../components/Sunny_Wine'
import Slider from '../components/Slider'
import NavBar from '../components/Navbar'
import Body from '../components/Body'
import Products from '../components/Products'

const Home = () => {
  return (
    <>
      <NavBar />
      <Body />
      <Products />
      <Discover />
      <Sunny_Wine />
      <Slider />
    </>
  )
}

export default Home