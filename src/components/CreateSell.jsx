import React from 'react'
import { SELLER_NFT} from "../assets/data/data"
import SingleCreateSell from './SingleCreateSell'

function CreateSell() {

  return (
    <section className="sell px-16 my-12  ct:px-12 tl:px-6">
      <h1 className='text-3xl font-bold my-11'>Create and sell your NFTs</h1>
      <div className="wrapper flex flex-col justify-center items-center  gap-10 ">
        {SELLER_NFT.map((item) => (
          <SingleCreateSell key={item.id} {...item}/>
        ))}
      </div>
    </section>
  )
}

export default CreateSell