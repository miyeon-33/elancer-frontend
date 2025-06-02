'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './MainSlider.module.css';

export default function Pick() {
  return (
    <div className="flex flex-col w-auto max-w-[1200px] items-start gap-[32px] rounded-[24px] bg-[#fff] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.06)] mb-[80px] pt-[56px] px-[56px] max-md:px-[20px] max-sm:px-[20px]">
      <div className="flex items-start gap-[32px] w-full max-w-[1200px] overflow-hidden">
        <div className="flex w-[312px] flex-col items-start self-stretch justify-between">
          <div className="gap-[16px] flex flex-col">
            <h2 className="self-stretch text-[#1b1c1e] text-[32px] font-bold inline-block">
              이랜서&nbsp;
              <span className="text-[#ff6948]">PICK</span>
              <br />
              추천 프로젝트 입니다!
            </h2>
            <p className="text-[#58575e] text-[20px] font-normal inline-block">
              로그인 후 회원정보를 업데이트 하시면
              <br />더 많은 추천 정보를 얻으실 수 있습니다.
            </p>
          </div>
          <div className="flex items-center gap-[8px]">
            <img src="/images/icons/left-nav.eb875d7a.svg" />
            <img src="/images/icons/left-nav.eb875d7a.svg" />
          </div>
        </div>
        <div className="w-[744px] overflow-hidden">
          <Swiper
            slidesPerView={2}
            navigation
            modules={[Navigation]}
            className={styles.pickSlider}
          >
            <SwiperSlide className="w-[312px]  border ">
              <div className="h-[435px]"></div>
            </SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide>
            <SwiperSlide>4</SwiperSlide>
            <SwiperSlide>5</SwiperSlide>
            <SwiperSlide>6</SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="border w-full">dddddddddd</div>
    </div>
  );
}
