import React from "react";
import { NFT__DATA } from "../assets/data/data";
import SingleTrending from "./SingleTrending";

function Trending() {
  return (
    <section className="auction px-16 py-12 t:px-12 tl:px-6">
      <div className="title">
        <h2 className="text-3xl font-bold cursor-pointer ml-2">Trending</h2>
      </div>
      <div className="auction-wrapper flex flex-wrap  justify-center  items-center  mt-12 gap-12 lg:gap-6">
        {NFT__DATA.map((item) => (
         <>
          <SingleTrending key={item.id} {...item}/>
         </>
        ))}
      </div>
    </section>
  );
}

export default Trending;
