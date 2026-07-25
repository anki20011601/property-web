import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from 'react-router-dom';
import BannerSection from '../components/BannerSection';
import FeaturedComponents from '../components/FeaturedComponents';
import VideoSectionComponent from '../components/VideoSectionComponent';
import FunFactSectionComponent from '../components/FunFactSectionComponent';
import BestDealSectionComponent from '../components/BestDealSectionComponent';
import ContactSectionComponent from '../components/ContactSectionComponent';


function Home() {
  return (
  <>
  <BannerSection />

  <FeaturedComponents />

  <VideoSectionComponent />

  <FunFactSectionComponent />

  <BestDealSectionComponent />

  <ContactSectionComponent />
  </>
  )
}

export default Home