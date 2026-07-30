import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const BannerSection = () => {
  const [home, setHome] = useState({});
   
  useEffect(() => {
    getHomeData();
  }, []);


  const getHomeData = async () => {
       try{
            fetch("http://127.0.0.1:8000/api/get-page-data/homepage")
            .then((response) => response.json())
            .then((res) => {
              // console.log(res.data[6].section2_title1);
               const pageData = Object.fromEntries(          //this function converts res array into an object
                  res.data.map((item) => [item.key, item.keyValue])
                );
                
                setHome(pageData);  // this will set the pageData values into home state and we can access in our jsx file
                // console.log(home);
            })
            .catch((error) => {
              console.log(error);
            });
       }
       catch(err){
         console.log(err);
       }
  }

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
            {home.section2_title1}
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