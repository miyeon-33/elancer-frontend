'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';
import styles from './MainSlider.module.css';

export default function MainSlider() {
  return (
    <div className="max-w-[1200px] h-[260px] rounded-[24px] mt-[32px] relative">
      <Swiper
        loop
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        // autoplay
        navigation
        modules={[Pagination, Navigation, Autoplay]}
        className={styles.slider}
      >
        <SwiperSlide>
          <div className="bg-[rgb(159,45,79)] w-full h-[260px] relative rounded-[24px]">
            <div className="flex flex-col items-start justify-center gap-[24px] absolute top-1/2 -translate-y-1/2 left-[120px]">
              <h1 className="font-bold text-[28px] text-[#fff]">
                일본 현지에서 진행되는 IT 프로젝트에
                <br />
                참여 가능한 회원님들의 수요조사를 진행합니다!
              </h1>
              <Link href="/community/detail/819" className="h-[25px]">
                <div className="flex items-center justify-center border-b-2 border-[#f3f4f6]">
                  <h2 className="text-[#f3f4f6] text-center text-[16px]">
                    자세히 보기
                  </h2>
                  <img
                    src="/images/icons/Plus.135d661e.svg"
                    className="w-[24px]"
                  />
                </div>
              </Link>
            </div>
            <div className="w-[320px] h-[260px] absolute right-[120px]">
              <img src="/images/icons/japan.bbf6f82f.svg" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
      </Swiper>
    </div>
  );
}
