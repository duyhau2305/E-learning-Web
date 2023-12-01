import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Controller,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/css";

export default function BrandComponent() {
  const dataList = ["Netflix", "Grab", "Airbnb", "Google", "Nestle", "Disney"];

  return (
    <section className="w-full py-[50px] max-w-[1320px] mx-auto ">
      <Swiper
        spaceBetween={20}
        navigation
        loop
        centeredSlides={false}
        modules={[Navigation, Scrollbar, Autoplay, A11y, Controller]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        direction="horizontal"
        scrollbar={{ draggable: true }}
        speed={3000}
        slidesPerView={5}
      >
        {dataList.map((e) => (
          <SwiperSlide key={e} className="text-center flex justify-center items-center">
            <img src={`/assets/image/brand/${e.toLowerCase()}.png`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
