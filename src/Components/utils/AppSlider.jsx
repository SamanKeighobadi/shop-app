import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
// import "swiper/css/pagination";
// import "swiper/";

// import required modules
import { Navigation,Autoplay } from "swiper";

const AppSlider = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation,Autoplay]}  autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} className="mySwiper">
        <SwiperSlide>
          <img
            height={300}
            style={{ width: "100%" }}
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AppSlider;
