import React from 'react'

function Modal({status,setStatus}) {
  return (

<div className="modalll">
<div className="modall text-center p-8 absolute top-[50%] left-[50%]  text-white bg-[#343444] z-30 rounded-lg tl:w-[80%]">
<div className="wrapper p-0">
    <h1 className='text-center text-2xl font-bold mb-2 tl:text-lg'>Place a Bid</h1>
    <h2 className='text-center text-2xl font-bold tl:text-lg'>You must bid at least 5.89 ETH</h2>
    <div className="input-wrap">
        <input type="text"  placeholder='00 : 00 ETH' className='mt-6 bg-transparent border border-white p-2 w-full my-3 rounded-lg'/>
        <h1 className='text-left mt-5 tl:text-sm'>Enter Quantity, 7 available</h1>
        <input type="text"  placeholder='Enter quantity' className='bg-transparent border border-white p-2 w-full my-3 rounded-lg'/>
    </div>
    <div className="bottom">
        <div className="box flex justify-between items-center font-bold my-4 tl:text-sm">
            <h1>You must bid at least</h1>
            <h2>5.89 ETH</h2>
        </div>
        <div className="box flex justify-between items-center font-bold my-4 tl:text-sm">
            <h1>Service Free</h1>
            <h2>50.89 ETH</h2>
        </div>
        <div className="box flex justify-between items-center font-bold my-4 tl:text-sm">
            <h1>Total Bid Amount</h1>
            <h2>5.89 ETH</h2>
        </div>
    </div>
    <button className='text-lg font-bold bg-[#5142FC] p-2 rounded-2xl mt-5 hover:bg-[#1a1919]'>Place a Bid</button>
    <i onClick={() => setStatus(false)} className="fa-solid fa-xmark absolute top-4 right-4 text-[#5142FC] text-2xl cursor-pointer "></i>
</div>
</div>
</div>

  )
}

export default Modal