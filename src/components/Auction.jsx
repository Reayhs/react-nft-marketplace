import React from "react";
import { NFT__DATA } from "../assets/data/data";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SingleAuction from "./SingleAuction";

function Auction() {
  return (
    <>
      <section className="auction px-16 py-12 t:px-12 tl:px-6 ">
        <div className="title flex justify-between">
          <h2 className="text-3xl font-bold cursor-pointer">Live Auction</h2>
          <h4 className="underline  decoration-2 underline-offset-4 decoration-[#6039a0] font-bold  cursor-pointer">
            Explore more
          </h4>
        </div>
        <div className="auction-wrapper flex  justify-center  items-center  mt-12">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            className="mySwiper pr-20 tl:pr-10"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              650: {
                slidesPerView: 2,
              },
              1100: {
                slidesPerView: 3,
              },
              1300: {
                slidesPerView: 4,
              },
            }}
          >
            {NFT__DATA.map((item) => (
              <SwiperSlide>
                <SingleAuction key={item.id} {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Auction;
