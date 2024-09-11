// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="carousel"
      >
        <SwiperSlide>
          <img
            src="https://bookingcare.vn/_next/image?url=https%3A%2F%2Fcdn.bookingcare.vn%2Ffo%2F2023%2F11%2F02%2F134537-group-12314.png&w=2048&q=75"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://bookingcare.vn/_next/image?url=https%3A%2F%2Fcdn.bookingcare.vn%2Ffo%2F2024%2F03%2F15%2F094346-hoi-dap-cong-dong.png&w=2048&q=75"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.bookingcare.vn/fo/2023/10/10/163557-dat-lich-cham-soc-wecare247.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.bookingcare.vn/fo/2023/09/07/141422-144204-dat-lich-kham-bookingcare-pharmacity.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
