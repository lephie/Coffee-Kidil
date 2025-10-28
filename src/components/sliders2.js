'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css'; 
import { Navigation, Pagination, A11y } from 'swiper/modules';



const Sliders2 = () => {
    return (
        <div className="mx-20">
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
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