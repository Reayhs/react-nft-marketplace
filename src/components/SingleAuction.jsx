import React, { useState } from "react";
import Modal from "./Modal";

function SingleAuction({ title, creatorImg, creator, currentBid, imgUrl }) {
  return (
    <>
      <div className="box p-4 bg-[#343444] flex flex-col  rounded-3xl">
        <div className="top">
          <img
            className="w-full rounded-3xl cursor-pointer"
            src={imgUrl}
            alt=""
          />
        </div>
        <div className="center">
          <h1 className="font-bold py-3 ">{title}</h1>
          <div className="center-bottom flex justify-between items-center ">
            <div className="flex justify-between items-center ">
              <img className="w-10" src={creatorImg} alt="" />
              <div className="pl-2">
                <h4 className="text-sm text-[#9e9d9d]">Created By</h4>
                <h3 className="font-bold">{creator}</h3>
              </div>
            </div>
            <div className="">
              <h4 className="text-sm text-[#9e9d9d]">Current Bid</h4>
              <h3 className="font-bold">{currentBid} ETH</h3>
            </div>
          </div>
        </div>
        <div className="bottom flex justify-between my-6 items-center blabla">
          <h4 className="text-sm text-[#9e9d9d] ">View History</h4>
        </div>
      </div>
    </>
  );
}

export default SingleAuction;
