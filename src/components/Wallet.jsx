import React from "react";
import Footer from "./Footer";
import bg from "../assets/images/bg.jpg";
import Navbar from "./Navbar";

function Wallet() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="bg bg-no-repeat bg-cover bg-center h-72"
      >
        <Navbar />
        <h1 className="font-bold text-4xl flex justify-center items-center h-full">Connect Wallet</h1>
      </div>
      <div className="wallet">
        <h1 className="text-3xl font-bold text-center mt-10">
          Connect your wallet
        </h1>
        <p className="text-lg text-center text-[#6c6868] my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          ipsum aperiam <br /> cumque fugit suscipit animi natus nostrum
          voluptatem iste quam!
        </p>
        <div className="wrapper grid grid-cols-4 lg:grid-cols-2 tl:grid-cols-1 justify-between items-center p-10 gap-10 text-center">
          <div className="box p-6 bg-[#343444]">
          <i class="fa-solid fa-bitcoin-sign text-3xl"></i>
          <h1 className="text-3xl font-bold text-center mt-10">Bitcoin</h1>
          <p className="text-sm text-[#d0cdcd] mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium accusamus repellat rerum consequatur explicabo? Reiciendis!</p>
          </div>
          <div className="box  p-6 bg-[#343444]">
          <i class="fa-solid fa-circle-info   text-3xl"></i>
          <h1 className="text-3xl font-bold text-center mt-10">Conbase</h1>
          <p className="text-sm text-[#d0cdcd] mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium accusamus repellat rerum consequatur explicabo? Reiciendis!</p>
          </div>
          <div className="box  p-6 bg-[#343444]">
          <i class="fa-solid fa-coins   text-3xl"></i>
          <h1 className="text-3xl font-bold text-center mt-10">Matemask</h1>
          <p className="text-sm text-[#d0cdcd] mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium accusamus repellat rerum consequatur explicabo? Reiciendis!</p>
          </div>
          <div className="box p-6 bg-[#343444]">
          <i class="fa-brands fa-bitcoin  text-3xl"></i>
          <h1 className="text-3xl font-bold text-center mt-10">Authreum</h1>
          <p className="text-sm text-[#d0cdcd] mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium accusamus repellat rerum consequatur explicabo? Reiciendis!</p>
          </div>

      
        
        
          
        
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Wallet;
