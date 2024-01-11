// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./MainSlider.css";
// import "./styles.css";
import {Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

const MainSlider = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="rounded-xl  md:col-span-2">
        <Swiper
          cssMode={true}
          navigation={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Autoplay,Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="./images/sliderimage1.png"
              alt="slider1"
              className="w-full rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./images/sliderimage2.png"
              alt="slider1"
              className="w-full rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./images/sliderimage3.png"
              alt="slider1"
              className="w-full rounded-xl"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-1  gap-2">
        <div className="relative">
          <div className="absolute text-xs text-white p-4 md:text-lg bg-gradient-to-tr from-[#1111118f]  to-[#11111100] lg:bg-none h-[100%]">
            <p className="">
              Top Sold<br /> Product <br /> of 2023!
            </p>
          </div>
          <img src="/images/banner1.jpg" alt="banner1" className="rounded-xl" />
        </div>
        <div className="relative">
          <div className="absolute text-xs text-white p-4 md:text-lg bg-gradient-to-tr from-[#1111118f] to-[#11111100] lg:bg-none h-full ">
            <p>
              Best Choice <br /> of the Year!
            </p>
          </div>
          <img src="/images/banner2.jpg" alt="banner1" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
