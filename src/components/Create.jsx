import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { NFT__DATA } from "../assets/data/data";
import bg from "../assets/images/bg.jpg";
import Modal from "./Modal";
import CreateInput from "./CreateInput";

function Create() {
  const [data, setData] = useState(NFT__DATA[4]);
  const [status, setStatus] = useState(false);
  console.log(data);
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="bg bg-no-repeat bg-cover bg-center h-72 "
      >
        <Navbar />
        <h1 className="font-bold text-4xl flex justify-center items-center h-full">
          Create Item
        </h1>
      </div>
      <div className="px-14 py-20 ct:px-6 ">
        <div className="wrapper flex justify-between items-center gap-20 px-4 ct:flex-col ct:gap-6 ct:px-44 tl:px-2 ">
          <div className="left flex-[0.4] ">
            <h1 className="font-bold text-3xl my-6">Preview Item</h1>
              <div className="box  p-4 bg-[#343444]  rounded-3xl ">
              <div className="top">
                <img
                  className="w-full rounded-3xl cursor-pointer"
                  src={data.imgUrl}
                  alt=""
                />
              </div>
              <div className="center">
                <h1 className="font-bold py-3 ">{data.title}</h1>
                <div className="center-bottom flex justify-between items-center ">
                  <div className="flex justify-between items-center ">
                    <img className="w-10" src={data.creatorImg} alt="" />
                    <div className="pl-2">
                      <h4 className="text-sm text-[#9e9d9d]">Created By</h4>
                      <h3 className="font-bold">{data.creator}</h3>
                    </div>
                  </div>
                  <div className="">
                    <h4 className="text-sm text-[#9e9d9d]">Current Bid</h4>
                    <h3 className="font-bold">{data.currentBid} ETH</h3>
                  </div>
                </div>
              </div>
              <div className="bottom  my-6 items-center  trendbut">
                <button
                  onClick={() => setStatus(true)}
                  className="font-bold bg-[#5152FC] px-6 py-2 rounded-2xl hover:bg-[#1a1919]"
                >
                  <i class="fa-solid fa-eye pr-2"></i> Place Bid
                </button>
              </div>
            </div>
          </div>
          <div className="right flex-1 mt-16">
           <CreateInput/>
          </div>
        </div>
      </div>
     
      <Footer />
      {status ? <Modal status={status} setStatus={setStatus} /> : null}
    </>
  );
}

export default Create;
