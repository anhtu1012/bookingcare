// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Grid, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import CardMain from "../card";
import { getDoctor } from "../../services/api";

export default function Relate({
  numberOfSlides = 5,
  autoplay = false,
  rows = 1,
  data = "doctor",
}) {
  const swiperContainerStyle = {
    "--swiper-rows": rows,
    "--swiper-space-between": "30px",
  };
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    let res;
    if (data === "doctor") {
      res = await getDoctor(5);
    }
    setItems(res.data.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);
  const handleCardClick = () => {
    // Cuộn lên đầu trang
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Cho phép cuộn mượt mà
    });
  };
  return (
    <div className="swiper-container" style={swiperContainerStyle}>
      <Swiper
        spaceBetween={30}
        slidesPerView={numberOfSlides}
        grid={{
          rows: rows,
        }}
        autoplay={
          autoplay
            ? {
                delay: 2500,
                disableOnInteraction: false,
              }
            : false
        }
        modules={autoplay ? [Autoplay, Grid, Navigation] : [Grid, Navigation]}
        className={`relate ${rows === 2 ? "multi-item" : ""}`}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="multi-slide">
            <div onClick={handleCardClick}>
              {data === "doctor" ? (
                <CardMain doctor={item} />
              ) : (
                <CardMain product={item} />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
