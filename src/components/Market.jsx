import React, { useState } from "react";
import Navbar from "./Navbar";
import bg from "../assets/images/bg.jpg";
import { NFT__DATA } from "../assets/data/data";
import SingleTrending from "./SingleTrending";
import Footer from "./Footer";

function Market() {
  
  const [data, setData] = useState(NFT__DATA);

  const allCategories = ["All", ...new Set(data.map((item) => item.category))];
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "All") {
      return setData(NFT__DATA);
    }
    const newItems = NFT__DATA.filter((item) => item.category === category);
    setData(newItems);
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="bg bg-no-repeat bg-cover bg-center h-72 "
      >
        <Navbar />
        <h1 className="font-bold text-4xl flex justify-center items-center h-full">MarketPlace</h1>
      </div>

      <div className="flex justify-center items-center gap-4 mt-14 ">
        {categories.map((item) => (
          <div key={item.id} className="">
            <button
              onClick={() => filterItems(item)}
              className={`border border-white p-2 mx-auto text-center w-20 rounded-2xl font-bold hover:bg-[#7a27ab] transition-all`}
            >
              {" "}
              {item}
            </button>
          </div>
        ))}
      </div>

      <section className="auction px-16 py-12 t:px-12 tl:px-6">
        <div className="auction-wrapper flex flex-wrap  justify-center  items-center  mt-12 gap-12 lg:gap-6">
          {data.map((item) => (
            <SingleTrending key={item.id} {...item} />
          ))}
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Market;
