import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../assets/css/styles.css";

// import required modules
import { Pagination } from "swiper";
import icon from '../assets/img/icon.png'

const Hero = () => {
  return (
  <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="poster-container">
            <img src="https://images.unsplash.com/photo-1602002418211-9d76470fa71f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=upgraded-points-xjTp2RjWg3A-unsplash.jpg&w=1920"/>
            <div className="text-block">
              <h2>BEST RESORTS 2022</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="poster-container">
            <img src="https://images.unsplash.com/photo-1587213811864-46e59f6873b1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=vangelis-tyros-6xeMf4bg0eA-unsplash.jpg&w=1920"/>
            <div className="text-block">
              <h2>5-STAR HOTELS 2022</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="poster-container">
            <img src="https://images.unsplash.com/photo-1614649024145-7f847b1c803f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=taylor-heery-8DlbPCxfGHA-unsplash.jpg&w=1920"/>
            <div className="text-block">
              <h2>COMFORTABLE STAY NIGHT</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Hero