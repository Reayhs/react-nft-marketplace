import React from 'react'
import {SELLER__DATA} from "../assets/data/data"

function Seller() {
  return (
    <section className="seller px-16 py-14 ct:px-12 tl:px-6 ">
      <h1 className='font-bold text-4xl ml-6 mb-12 ct:mb-6'>Top Seller</h1>
      <div className="seller-wrapper grid grid-cols-8 lg:grid-cols-5 ct:grid-cols-4 tl:grid-cols-2   ">
        {SELLER__DATA.map((item) => (
          <div className="box p-6">
            <div className="left sellerimg">
              <img className='w-full' src={item.sellerImg} alt="" />
            </div>
            <div className="flex items-center justify-center flex-col">
              <h1 className='font-bold  '>{item.sellerName}</h1>
              <h2 className='font-bold '>{item.currentBid} ETH </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Seller