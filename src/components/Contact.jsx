import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bg from "../assets/images/bg.jpg";

function Contact() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="bg bg-no-repeat bg-cover bg-center h-72"
      >
        <Navbar />
        <h1 className="font-bold text-4xl flex justify-center items-center h-full">Contact</h1>
      </div>
      <div className="contact">
        <div className="wrapper ">
          <h1 className="text-3xl font-bold text-center mt-10">Drop a Message</h1>
          <p className="text-lg text-center text-[#6c6868] my-6 tl:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsum aperiam <br /> cumque fugit suscipit animi natus nostrum voluptatem iste quam!</p>
          <form action="" className="flex flex-col justify-center items-center px-10  ">
            <div className="flex gap-4 py-2  ">
              <input
                className="bg-transparent w-96 h-14 rounded-sm  border-[1px] border-white pl-4 text-white placeholder-white lg:w-36 "
                type="text"
                placeholder="Name"
              />
              <input
                className="bg-transparent h-14 w-96  rounded-sm  border-[1px] border-white pl-4 text-white placeholder-white  lg:w-36"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="flex gap-4  py-4  ">
              <input
                className="bg-transparent h-14 w-96 rounded-sm  border-[1px] border-white pl-4 text-white placeholder-white  lg:w-36"
                type="email"
                placeholder="Email"
              />
              <input
                className="bg-transparent h-14 w-96 rounded-sm border-[1px] border-white pl-4 text-white placeholder-white  lg:w-36"
                type="phone"
                placeholder="Phone"
              />
            </div>
            <textarea
              className="bg-transparent rounded-sm border-[1px] border-white h-36 pl-4 lg:w-[310px] text-white w-[775px] placeholder-white pt-2"
              rows={40}
              cols={35}
              placeholder="Message"
            ></textarea>
                <button className="bg-white text-black border-black border-[1] py-[16px] rounded-lg px-8 my-8 w-48 font-bold ">Send</button>
                </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;
