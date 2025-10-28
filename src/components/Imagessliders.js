
'use client';
import Image from "next/image"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css'; 
import { Navigation, Pagination, A11y } from 'swiper/modules';


const Imagessliders = () => {
    return(
      <div className="margin-0">
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation ={{
        prevEl : "prev-button",
        nextEl :  "next-button"
      }}
      pagination={{ clickable: true }}
      loop={true}
      >
     
      <SwiperSlide>
        <Image
          src="/images/macthaa.png" 
          alt="Matchaa promos"
          width={412}
          height={326}
          priority
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/macthaa.png" 
          alt="Matchaa promos"
          width={412}
          height={326}
          priority
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/macthaa.png" 
          alt="Matchaa promos"
          width={412}
          height={326}
          priority
        />
      </SwiperSlide>
    </Swiper>



    </div>


    )
}


export default Imagessliders;