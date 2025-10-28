'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css'; 
import { Navigation, Pagination, A11y } from 'swiper/modules';



const Sliders2 = () => {
    return (
        <div className="mx-auto ml-1.5 px-4 py-5 mt-10 mb-30">
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
                    src="/images/HOT PICKS 3.png"
                    alt="Banner Coffee"
                    width={369}
                    height={299}
                    priority
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src="/images/HOT PICKS 3.png"
                    alt="Banner Coffee"
                    width={369}
                    height={299}
                    priority
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src="/images/HOT PICKS 3.png"
                    alt="Banner Coffee"
                    width={369}
                    height={299}
                    priority
                />
            </SwiperSlide>

        </Swiper>
        </div>
    )
}

export default Sliders2;