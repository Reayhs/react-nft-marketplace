import React from 'react'
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Auction from "../components/Auction"
import CreateSell from "../components/CreateSell"
import Trending from "../components/Trending"
import Seller from "../components/Seller"
import Footer from "../components/Footer"


function Home() {
  return (
   <>
    <Navbar/>
    <Header/>
    <Auction/>
    <Seller/>
    <Trending/>
    <CreateSell/>
    <Footer/>  

   </>
  )
}

export default Home