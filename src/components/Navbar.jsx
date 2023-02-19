import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [status, setStatus] = useState(true);
  let location = useLocation();

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.querySelector(".navbarcon").style.backgroundColor = "#14141f";
      document.querySelector(".navbarcon").style.boxShadow =
        "2px 2px 4px -2px #e250e5";
    } else {
      document.querySelector(".navbarcon").style.backgroundColor =
        "transparent";
      document.querySelector(".navbarcon").style.boxShadow = "none";
    }
  }

  return (
    <nav className="fixed top-0 w-full  left-0 navbarcon z-50 ct:static ">
      <div className="nav-wrapper flex justify-between items-center px-16 py-4 w-full ct:px-12 tl:px-6 ">
        <div className="left flex items-center text-3xl gap-3">
          <i className="fa-regular fa-fire-flame-curved bg-[linear-gradient(-45deg,#e250e5,#4b50e6,#e250e5,#4b50e6)] "></i>
          <h1 className="bg-[linear-gradient(-45deg,#e250e5,#4b50e6,#e250e5,#4b50e6)]  text-3xl font-bold">
            ReNFTs
          </h1>
        </div>
        <div
          className={`center ${
            status && "ct:hidden"
          }  ct:fixed ct:w-64 tl:w-60 ct:p-0 ct:h-full top-0 left-0 z-50`}
        >
          <ul className="flex gap-10 text-lg font-bold text-white ct:flex-col ct:text-center ct:justify-center ct:gap-12 ct:text-2xl ct:pb-14 ct:absolute ct:w-full ct:bg-[#343444] ct:h-full tl:gap-10 ">
            <li>
              <a
                href="/"
                className={`${location.pathname === "/" && "text-[#b210f2]"}`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/market"
                className={`${
                  location.pathname === "/market" && "text-[#b210f2]"
                }`}
              >
                Market
              </a>
            </li>
            <li>
              <a
                href="/create"
                className={`${
                  location.pathname === "/create" && "text-[#b210f2]"
                }`}
              >
               Create
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className={`${
                  location.pathname === "/contact" && "text-[#b210f2]"
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="right ct:flex ct:gap-10 items-center hover:font-bold  ">
          <button className="border border-solid border-[#b210f2] px-5 py-3 rounded-2xl text-sm text-white ">
            <a href="wallet">
              {" "}
              <i className="fa-solid fa-credit-card text-white pr-2 "></i>{" "}
              Connect Wallet
            </a>
          </button>
          <i
            onClick={() => setStatus(!status)}
            className="fa-solid fa-bars hidden ct:block text-[#b210f2] text-2xl cursor-pointer"
          ></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
