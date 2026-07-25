import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const BannerSection = () => {
  return (
    <>
     <div className="main-banner">
  <Swiper
    modules={[Autoplay]}
    loop={true}
    autoplay={{
      delay: 4000,
      disableOnInteraction: false,
    }}
    slidesPerView={1}
  >
    <SwiperSlide>
      <div className="item item-1">
        <div className="header-text">
          <span className="category">
            Toronto, <em>Canada</em>
          </span>
          <h2>
            Hurry!
            <br />
            Get the Best Villa for you
          </h2>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="item item-2">
        <div className="header-text">
          <span className="category">
            Melbourne, <em>Australia</em>
          </span>
          <h2>
            Be Quick!
            <br />
            Get the best villa in town
          </h2>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="item item-3">
        <div className="header-text">
          <span className="category">
            Miami, <em>South Florida</em>
          </span>
          <h2>
            Act Now!
            <br />
            Get the highest level penthouse
          </h2>
        </div>
      </div>
    </SwiperSlide>

  </Swiper>
</div>
    </>
  )
}

export default BannerSection