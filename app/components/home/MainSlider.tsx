'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';
import styles from './MainSlider.module.css';
import { useState } from 'react';

export default function MainSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="max-w-[1200px] h-[260px] rounded-[24px] mt-[32px] relative max-sm:mt-0 max-sm:pt-[20px] max-md:px-[20px] max-sm:px-[20px] mx-auto">
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay
        navigation
        modules={[Pagination, Navigation, Autoplay]}
        className={styles.slider}
      >
        <SwiperSlide>
          <Link href="/community/detail/819" className="h-[25px]">
            <div className="bg-[rgb(159,45,79)] w-full h-[260px] relative rounded-[24px]">
              <div className="flex flex-col items-start justify-center gap-[24px] absolute top-1/2 -translate-y-1/2 left-[120px] max-sm:pt-[24px] max-sm:pr-[30px] max-sm:pl-[24px] max-sm:left-0 max-sm:top-0 max-sm:translate-0">
                <h1 className="font-bold text-[28px] text-[#fff] max-sm:text-[18px]">
                  일본 현지에서 진행되는 IT 프로젝트에
                  <br />
                  참여 가능한 회원님들의 수요조사를 진행합니다!
                </h1>
                <div className="flex items-center justify-center border-b-2 border-[#f3f4f6]">
                  <h2 className="text-[#f3f4f6] text-center text-[16px] max-sm:text-[13px]">
                    자세히 보기
                  </h2>
                  <img
                    src="/images/icons/Plus.135d661e.svg"
                    className="w-[24px] max-sm:w-[16px]"
                  />
                </div>
              </div>
              <div className="w-[320px] h-[260px] absolute right-[120px] block max-sm:hidden">
                <img src="/images/icons/japan.bbf6f82f.svg" />
              </div>
              <div className="w-[176px] h-[160px] absolute right-[24px] -bottom-[4px] mt-[80px] ml-[135px] hidden max-sm:block">
                <img src="/images/icons/japanM.a065a9bf.svg" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/community/detail/819" className="h-[25px]">
            <div className="bg-[rgb(27,28,30)] w-full h-[260px] relative rounded-[24px] overflow-hidden">
              <div className="flex flex-col items-start justify-center gap-[24px] absolute top-1/2 -translate-y-1/2 left-[120px] max-sm:pt-[24px] max-sm:pr-[30px] max-sm:pl-[24px] max-sm:left-0 max-sm:top-0 max-sm:translate-0">
                <h1 className="font-bold text-[28px] text-[#fff] max-sm:text-[18px]">
                  이력서 쓰는 시간도 돈이다!
                  <br />
                  <div className="inline-block relative">
                    돈버는 이력서 자동관리 서비스 오토폴리오
                    <img
                      src="/images/icons/logo-tm.ecba2268.svg"
                      className="absolute -top-[5px] -right-[25px] w-[25px] h-auto max-sm:-top-[2px] max-sm:-right-[15px] max-sm:w-[14px]"
                    />
                  </div>
                </h1>
                <div className="flex items-center justify-center border-b-2 border-[#f3f4f6]">
                  <h2 className="text-[#f3f4f6] text-center text-[16px] max-sm:text-[13px]">
                    오트폴리오 바로가기
                  </h2>
                  <img
                    src="/images/icons/Plus.135d661e.svg"
                    className="w-[24px] max-sm:w-[16px]"
                  />
                </div>
              </div>
              <div className="w-[320px] h-[260px] absolute right-[120px] block max-sm:hidden">
                <img src="/images/icons/AutoFolio.facc41cb.svg" />
              </div>
              <div className="w-[176px] h-[160px] absolute right-[24px] -bottom-[4px] mt-[80px] ml-[135px] hidden max-sm:block">
                <img src="/images/AutoFolio-M.png" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/community/detail/819" className="h-[25px]">
            <div className="bg-[rgb(37,38,137)] w-full h-[260px] relative rounded-[24px]">
              <div className="flex flex-col items-start justify-center gap-[24px] absolute top-1/2 -translate-y-1/2 left-[120px] max-sm:pt-[24px] max-sm:pr-[30px] max-sm:pl-[24px] max-sm:left-0 max-sm:top-0 max-sm:translate-0">
                <h1 className="font-bold text-[28px] text-[#fff] max-sm:text-[18px]">
                  이랜서 추천 콘텐츠를 만나보세요!
                  <br />
                  이랜서는 개개인의 자유를 언제나 응원합니다
                </h1>
                <div className="flex items-center justify-center border-b-2 border-[#f3f4f6]">
                  <h2 className="text-[#f3f4f6] text-center text-[16px] max-sm:text-[13px]">
                    이랜서 생각 바로가기
                  </h2>
                  <img
                    src="/images/icons/Plus.135d661e.svg"
                    className="w-[24px] max-sm:w-[16px]"
                  />
                </div>
              </div>
              <div className="w-[320px] h-[260px] absolute right-[120px] -bottom-[4px] block max-sm:hidden">
                <img src="/images/icons/ElancerThink.179878b2.svg" />
              </div>
              <div className="w-[176px] h-[160px] absolute right-[24px] -bottom-[4px] mt-[80px] ml-[135px] hidden max-sm:block">
                <img src="/images/ElancerThink-M.png" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/community/detail/819" className="h-[25px]">
            <div className="bg-[rgb(1,110,84)] w-full h-[260px] relative rounded-[24px]">
              <div className="flex flex-col items-start justify-center gap-[24px] absolute top-1/2 -translate-y-1/2 left-[120px] max-sm:pt-[24px] max-sm:pr-[30px] max-sm:pl-[24px] max-sm:left-0 max-sm:top-0 max-sm:translate-0">
                <h1 className="font-bold text-[28px] text-[#fff] max-sm:text-[18px]">
                  이랜서 런클럽 훈련과정을 소개합니다!
                  <br />
                  전문가 레슨도 받고 러닝크루와 함께 달려요
                </h1>
                <div className="flex items-center justify-center border-b-2 border-[#f3f4f6]">
                  <h2 className="text-[#f3f4f6] text-center text-[16px] max-sm:text-[13px]">
                    자세히 알아보기
                  </h2>
                  <img
                    src="/images/icons/Plus.135d661e.svg"
                    className="w-[24px] max-sm:w-[16px]"
                  />
                </div>
              </div>
              <div className="w-[320px] h-[260px] absolute right-[120px] block max-sm:hidden">
                <img src="/images/icons/RunClub.2d0b6d15.svg" />
              </div>
              <div className="w-[176px] h-[160px] absolute right-[24px] -bottom-[4px] mt-[80px] ml-[135px] hidden max-sm:block">
                <img src="/images/RunClub-M.png" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
