'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css'; 
import { Navigation, Pagination, A11y } from 'swiper/modules';


const Sliders1 = () => {
return(
  <div className="mx-auto ml-1.5 px-4 py-2 mt-14 ">
  <Swiper
    modules={[Navigation, Pagination, A11y]}
    spaceBetween={20}
    slidesPerView={1}
    navigation={{
      prevEl: "prev-button",
      nextEl: "next-button"
    }}
    pagination={{ clickable: true }}
    loop={true}
  >

    <SwiperSlide>
      <Image
        src="/images/coffee banner1.png"
        alt="Banner Coffee"
        width={375}
        height={100}
        loading="lazy"
      />
    </SwiperSlide>
    <SwiperSlide>
      <Image
        src="/images/coffee banner1.png"
        alt="Banner Coffee"
        width={375}
        height={100}
        loading="lazy"
      />
    </SwiperSlide>
    <SwiperSlide>
      <Image
        src="/images/coffee banner1.png"
        alt="Banner Coffee"
        width={375}
        height={100}
        loading="lazy"
      />
    </SwiperSlide>

  </Swiper>
  </div>
)
}

export default Sliders1;