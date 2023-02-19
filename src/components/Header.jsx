import React from 'react'
import bgg from "../assets/images/bgg.webp"

function Header() {
  return (
   <>
    <header className='mt-20 ct:mt-0'>
      <div className=" header-wrapper flex justify-between items-center px-auto gap-20 py-20 px-16 ct:flex-col ct:text-center ct:px-12 tl:px-6">
        <div className="left mb-14 ct:mb-6 tl:mb-0  ">
          <h1 className='text-4xl font-bold lg:text-2xl'>Discover rare digital art and collect</h1>
          <h2 className='text-4xl py-4 font-bold pl-2  lg:text-lg'><span className='bg-[linear-gradient(-45deg,#e250e5,#4b50e6,#e250e5,#4b50e6)]'>sell extraordinary</span>  ReNFTs</h2>
          <p className='text-lg text-[#8f8d8d] mt-2 lg:text-sm leading-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti excepturi omnis neque adipisci sequi ullam unde in minus quis quos.</p>
          <div className="btn-wrapper flex gap-10 mt-10 ct:justify-center ">
            <button className='border border-[#b210f2] px-6 py-2 rounded-2xl'> <i className="fa-solid fa-rocket pr-2"></i> Explore</button>
            <button className='border border-[#b210f2] px-6 py-2 rounded-2xl'> <i className="fa-solid fa-pen pr-2"></i> Create</button>
          </div>
        </div>
        <div className="right ">
          <img className='w-[800px] rounded-2xl ' src={bgg} alt="" />
        </div>
      </div>
    </header>
   </>
  )
}

export default Header