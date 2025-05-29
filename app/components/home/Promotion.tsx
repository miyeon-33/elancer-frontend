'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import styles from '@/app/components/home/MainSlider.module.css';

export default function Promotion() {
  return (
    <div
      className="mt-[28px] max-md:mt-[16px] max-w-[2560px] mx-auto w-[calc(100%-80px)] max-md:w-[calc(100%-40px)]
    rounded-[28px] overflow-hidden relative"
    >
      <Swiper
        className={styles['main-slider']}
        modules={[Navigation, Pagination]}
        loop={true}
        // speed={1000}
        // autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{
          type: 'fraction',
        }}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 20 },
          1025: { slidesPerView: 1 },
        }}
      >
        <SwiperSlide className="">
          <img
            src="/images/Promotion1.png"
            alt="모자이크"
            className="object-cover h-[360px] min-w-[1024px] max-md:hidden flex justify-center items-center"
          />
          <img
            src="/images/Promotion1mb.png"
            alt="모자이크"
            className="object-cover h-[360px] min-w-[1024px] max-md:min-w-full hidden max-md:block max-md:rounded-[16px] max-md:h-full "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/Promotion2.png"
            alt="PDF편집"
            className="object-cover h-[360px] min-w-[1024px] max-md:min-w-auto max-md:hidden"
          />
          <img
            src="/images/Promotion2mb.png"
            alt="모자이크"
            className="object-cover h-[360px] min-w-[1024px] max-md:min-w-full hidden max-md:block max-md:rounded-[16px] max-md:h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/Promotion3.png"
            alt="편집"
            className="object-cover h-[360px] min-w-[1024px] max-md:min-w-auto max-md:hidden"
          />
          <img
            src="/images/Promotion3mb.png"
            alt="모자이크"
            className="object-cover h-[360px] min-w-[1024px] max-md:min-w-full hidden max-md:block max-md:rounded-[16px] max-md:h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/Promotion4.png"
            alt="PDF출시"
            className="object-cover h-[360px] min-w-[1024px] max-md:min-w-auto max-md:hidden"
          />
          <img
            src="/images/Promotion4mb.png"
            alt="모자이크"
            className="object-cover h-[360px] min-w-[1024px] max-md:min-w-full hidden max-md:block max-md:rounded-[16px] max-md:h-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
