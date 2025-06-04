'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './PickSlider.module.css';
import Link from 'next/link';

export default function Pick() {
  return (
    <div className="max-w-[1200px] max-md:px-[20px] max-sm:px-[20px]">
      <div className="flex flex-col w-autoitems-start gap-[32px] rounded-[24px] bg-[#fff] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.06)] mb-[80px] pt-[56px] px-[56px]">
        <div className="flex items-start gap-[32px] w-full max-w-[1200px] overflow-hidden relative">
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
          </div>
          <div className="w-[744px] overflow-hidden">
            <Swiper
              slidesPerView={2}
              navigation
              modules={[Navigation]}
              className={styles.pickslider}
              spaceBetween={24}
            >
              <SwiperSlide className="w-[312px]">
                <div className="h-[435px] flex flex-col items-center bg-[#fff] rounded-[12px] p-[24px] gap-[12px] border border-[#dedfe7] hover:border-[#ff9148] transition-all duration-300">
                  <div className="flex justify-between items-start w-full">
                    <div className="flex justify-center items-center rounded-[2px] py-[4px] px-[8px] bg-[#f44343] font-normal text-[#fff] text-[13px] whitespace-nowrap">
                      마감 16일 전
                    </div>
                    <div className="flex justify-end h-[24px] gap-[2px]">
                      <img src="/images/icons/heart-empty.5ce7692c.svg" />
                      <h2 className="text-[#1b1c1e] text-[16px] font-semibold">
                        6
                      </h2>
                    </div>
                  </div>
                  <div className="w-[264px] h-[149px] rounded-[8px] border border-[#ececf1] bg-[#fdfdfd] flex items-center justify-center">
                    <img src="/images/icons/logo.97dbb956.svg" />
                  </div>
                  <div className="text-[#1b1c1e] text-[18px] font-bold max-h-[50px] text-ellipsis break-keep whitespace-normal line-clamp-2">
                    [초급/Java/약12개월/서울역] 계약 시스템 및 클라우드 플랫폼
                    지원(7월~)
                  </div>
                  <div className="flex gap-[4px] items-center flex-wrap h-[52px] overflow-hidden">
                    <h2 className="h-[22px] text-[#ff6948] text-[13px] font-medium whitespace-nowrap leading-[24px]">
                      개발
                    </h2>
                    <span className="rounded-[16px] py-[2px] px-[8px] bg-[#fdf6f4] text-[#ff6948] h-[22px] text-[13px] font-normal whitespace-nowrap">
                      JAVA
                    </span>
                    <span className="rounded-[16px] py-[2px] px-[8px] bg-[#fdf6f4] text-[#ff6948] h-[22px] text-[13px] font-normal whitespace-nowrap">
                      JavaScript
                    </span>
                    <span className="rounded-[16px] py-[2px] px-[8px] bg-[#fdf6f4] text-[#ff6948] h-[22px] text-[13px] font-normal whitespace-nowrap">
                      JSP
                    </span>
                    <span className="rounded-[16px] py-[2px] px-[8px] bg-[#fdf6f4] text-[#ff6948] h-[22px] text-[13px] font-normal whitespace-nowrap">
                      Spring
                    </span>
                    <div className="flex items-center gap-[4px] text-[#777a83] h-[22px] text-[13px]">
                      외 +1개
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-[8px]">
                    <div className="flex items-center flex-wrap gap-[4px] w-full">
                      <div className="flex items-center gap-[2px]">
                        <img src="/images/icons/adress-icon.27b99aa2.svg" />
                        <h2 className="text-[13px] text-[#38383d] font-semibold">
                          서울
                        </h2>
                      </div>
                      <div className="w-[1px] h-[12px] mx-[1px] bg-[#ececf1]"></div>
                      <div className="flex items-center gap-[2px]">
                        <span className="text-[#777a83] font-normal text-[13px]">
                          숙련도
                        </span>
                        <span className="text-[#1b1c1e] text-[14px] font-semibold">
                          초급
                        </span>
                      </div>
                      <div className="w-[1px] h-[12px] mx-[1px] bg-[#ececf1]"></div>
                      <div className="flex items-center gap-[2px]">
                        <span className="text-[#777a83] font-normal text-[13px]">
                          예상기간
                        </span>
                        <span className="text-[#1b1c1e] text-[14px] font-semibold">
                          12개월
                        </span>
                      </div>
                      <div className="w-[1px] h-[12px] mx-[1px] bg-[#ececf1]"></div>
                      <div className="flex items-center gap-[2px]">
                        <span className="text-[#777a83] font-normal text-[13px]">
                          월 단가
                        </span>
                        <span className="text-[#1b1c1e] text-[14px] font-semibold">
                          금액 제안 가능
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-[435px] flex flex-col items-center bg-[#fff] rounded-[12px] p-[24px] gap-[12px] border border-[#dedfe7] hover:border-[#ff9148] transition-all duration-300">
                  <div className="flex justify-between items-start w-full">
                    <div className="flex justify-center items-center rounded-[2px] py-[4px] px-[8px] bg-[#f44343] font-normal text-[#fff] text-[13px] whitespace-nowrap">
                      마감 9일 전
                    </div>
                    <div className="flex justify-end h-[24px] gap-[2px]">
                      <img src="/images/icons/heart-empty.5ce7692c.svg" />
                      <h2 className="text-[#1b1c1e] text-[16px] font-semibold">
                        6
                      </h2>
                    </div>
                  </div>
                  <div className="w-[264px] h-[149px] rounded-[8px] border border-[#ececf1] bg-[#fdfdfd] flex items-center justify-center">
                    <img src="/images/icons/logo.97dbb956.svg" />
                  </div>
                  <div className="text-[#1b1c1e] text-[18px] font-bold max-h-[50px] text-ellipsis break-keep whitespace-normal line-clamp-2">
                    [고급/JAVA/5개월/증미역] 물류 / 회계 시스템 개발
                  </div>
                  <div className="flex gap-[4px] items-start h-[52px] overflow-hidden w-full">
                    <h2 className="h-[22px] text-[#ff6948] text-[13px] font-medium whitespace-nowrap leading-[24px]">
                      개발
                    </h2>
                    <span className="rounded-[16px] py-[2px] px-[8px] bg-[#fdf6f4] text-[#ff6948] h-[22px] text-[13px] font-normal whitespace-nowrap">
                      JAVA
                    </span>
                  </div>
                  <div className="w-full flex flex-col gap-[8px]">
                    <div className="flex items-center flex-wrap gap-[4px] w-full">
                      <div className="flex items-center gap-[2px]">
                        <img src="/images/icons/adress-icon.27b99aa2.svg" />
                        <h2 className="text-[13px] text-[#38383d] font-semibold">
                          서울
                        </h2>
                      </div>
                      <div className="w-[1px] h-[12px] mx-[1px] bg-[#ececf1]"></div>
                      <div className="flex items-center gap-[2px]">
                        <span className="text-[#777a83] font-normal text-[13px]">
                          숙련도
                        </span>
                        <span className="text-[#1b1c1e] text-[14px] font-semibold">
                          고급
                        </span>
                      </div>
                      <div className="w-[1px] h-[12px] mx-[1px] bg-[#ececf1]"></div>
                      <div className="flex items-center gap-[2px]">
                        <span className="text-[#777a83] font-normal text-[13px]">
                          예상기간
                        </span>
                        <span className="text-[#1b1c1e] text-[14px] font-semibold">
                          5개월
                        </span>
                      </div>
                      <div className="w-[1px] h-[12px] mx-[1px] bg-[#ececf1]"></div>
                      <div className="flex items-center gap-[2px]">
                        <span className="text-[#777a83] font-normal text-[13px]">
                          월 단가
                        </span>
                        <span className="text-[#1b1c1e] text-[14px] font-semibold">
                          금액 제안 가능
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-[435px] flex flex-col items-center bg-[#fff] rounded-[12px] p-[24px] gap-[12px] border border-[#dedfe7] hover:border-[#ff9148] transition-all duration-300">
                  <div className="flex justify-between items-start w-full">
                    <div className="flex justify-center items-center rounded-[2px] py-[4px] px-[8px] bg-[#f44343] font-normal text-[#fff] text-[13px] whitespace-nowrap">
                      마감 2일 전
                    </div>
                    <div className="flex justify-end h-[24px] gap-[2px]">
                      <img src="/images/icons/heart-empty.5ce7692c.svg" />
                      <h2 className="text-[#1b1c1e] text-[16px] font-semibold">
                        4
                      </h2>
                    </div>
                  </div>
                  <div className="w-[264px] h-[149px] rounded-[8px] border border-[#ececf1] bg-[#fdfdfd] flex items-center justify-center">
                    <img src="/images/company-logo_75.png" />
                  </div>
                  <div className="text-[#1b1c1e] text-[18px] font-bold max-h-[50px] text-ellipsis break-keep whitespace-normal line-clamp-2">
                    [고급/VC++,MFC/6개월(연장가능)/공덕] (QT) 클라이언트 개발
                  </div>
                  <div className="flex gap-[4px] items-start flex-wrap h-[52px] overflow-hidden w-full">
                    <h2 className="h-[22px] text-[#ff6948] text-[13px] font-medium whitespace-nowrap leading-[24px]">
                      개발
                    </h2>
                    <span className="rounded-[16px] py-[2px] px-[8px] bg-[#fdf6f4] text-[#ff6948] h-[22px] text-[13px] font-normal whitespace-nowrap">
                      VC++
                    </span>
                    <span className="rounded-[16px] py-[2px] px-[8px] bg-[#fdf6f4] text-[#ff6948] h-[22px] text-[13px] font-normal whitespace-nowrap">
                      MFC
                    </span>
                  </div>
                  <div className="w-full flex flex-col gap-[8px]">
                    <div className="flex items-center flex-wrap gap-[4px] w-full">
                      <div className="flex items-center gap-[2px]">
                        <img src="/images/icons/adress-icon.27b99aa2.svg" />
                        <h2 className="text-[13px] text-[#38383d] font-semibold">
                          서울
                        </h2>
                      </div>
                      <div className="w-[1px] h-[12px] mx-[1px] bg-[#ececf1]"></div>
                      <div className="flex items-center gap-[2px]">
                        <span className="text-[#777a83] font-normal text-[13px]">
                          숙련도
                        </span>
                        <span className="text-[#1b1c1e] text-[14px] font-semibold">
                          고급
                        </span>
                      </div>
                      <div className="w-[1px] h-[12px] mx-[1px] bg-[#ececf1]"></div>
                      <div className="flex items-center gap-[2px]">
                        <span className="text-[#777a83] font-normal text-[13px]">
                          예상기간
                        </span>
                        <span className="text-[#1b1c1e] text-[14px] font-semibold">
                          6개월
                        </span>
                      </div>
                      <div className="w-[1px] h-[12px] mx-[1px] bg-[#ececf1]"></div>
                      <div className="flex items-center gap-[2px]">
                        <span className="text-[#777a83] font-normal text-[13px]">
                          월 단가
                        </span>
                        <span className="text-[#1b1c1e] text-[14px] font-semibold">
                          금액 제안 가능
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-[435px] flex flex-col items-center bg-[#fff] rounded-[12px] p-[24px] gap-[12px] border border-[#dedfe7] hover:border-[#ff9148] transition-all duration-300">
                  <div className="flex justify-between items-start w-full">
                    <div className="flex justify-center items-center rounded-[2px] py-[4px] px-[8px] bg-[#f44343] font-normal text-[#fff] text-[13px] whitespace-nowrap">
                      마감 2일 전
                    </div>
                    <div className="flex justify-end h-[24px] gap-[2px]">
                      <img src="/images/icons/heart-empty.5ce7692c.svg" />
                      <h2 className="text-[#1b1c1e] text-[16px] font-semibold">
                        4
                      </h2>
                    </div>
                  </div>
                  <div className="w-[264px] h-[149px] rounded-[8px] border border-[#ececf1] bg-[#fdfdfd] flex items-center justify-center">
                    <img src="/images/company-logo_680.png" />
                  </div>
                  <div className="text-[#1b1c1e] text-[18px] font-bold max-h-[50px] text-ellipsis break-keep whitespace-normal line-clamp-2">
                    [중급/Java/약7개월/역삼] GS칼텍스 에너지플러스앱 개발 및
                    유지보수 (고급가능)
                  </div>
                  <div className="flex gap-[4px] items-start flex-wrap h-[52px] overflow-hidden">
                    <h2 className="h-[22px] text-[#ff6948] text-[13px] font-medium whitespace-nowrap leading-[24px]">
                      개발
                    </h2>
                    <span className="rounded-[16px] py-[2px] px-[8px] bg-[#fdf6f4] text-[#ff6948] h-[22px] text-[13px] font-normal whitespace-nowrap">
                      JAVA
                    </span>
                    <span className="rounded-[16px] py-[2px] px-[8px] bg-[#fdf6f4] text-[#ff6948] h-[22px] text-[13px] font-normal whitespace-nowrap">
                      Vue.js
                    </span>
                    <span className="rounded-[16px] py-[2px] px-[8px] bg-[#fdf6f4] text-[#ff6948] h-[22px] text-[13px] font-normal whitespace-nowrap">
                      SpringBoot
                    </span>
                    <span className="rounded-[16px] py-[2px] px-[8px] bg-[#fdf6f4] text-[#ff6948] h-[22px] text-[13px] font-normal whitespace-nowrap">
                      AWS
                    </span>
                  </div>
                  <div className="w-full flex flex-col gap-[8px]">
                    <div className="flex items-center flex-wrap gap-[4px] w-full">
                      <div className="flex items-center gap-[2px]">
                        <img src="/images/icons/adress-icon.27b99aa2.svg" />
                        <h2 className="text-[13px] text-[#38383d] font-semibold">
                          서울 강남구
                        </h2>
                      </div>
                      <div className="w-[1px] h-[12px] mx-[1px] bg-[#ececf1]"></div>
                      <div className="flex items-center gap-[2px]">
                        <span className="text-[#777a83] font-normal text-[13px]">
                          숙련도
                        </span>
                        <span className="text-[#1b1c1e] text-[14px] font-semibold">
                          중급
                        </span>
                      </div>
                      <div className="w-[1px] h-[12px] mx-[1px] bg-[#ececf1]"></div>
                      <div className="flex items-center gap-[2px]">
                        <span className="text-[#777a83] font-normal text-[13px]">
                          예상기간
                        </span>
                        <span className="text-[#1b1c1e] text-[14px] font-semibold">
                          7개월
                        </span>
                      </div>
                      <div className="w-[1px] h-[12px] mx-[1px] bg-[#ececf1]"></div>
                      <div className="flex items-center gap-[2px]">
                        <span className="text-[#777a83] font-normal text-[13px]">
                          월 단가
                        </span>
                        <span className="text-[#1b1c1e] text-[14px] font-semibold">
                          금액 제안 가능
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-[435px] flex flex-col items-center bg-[#fff] rounded-[12px] p-[24px] gap-[12px] border border-[#dedfe7] hover:border-[#ff9148] transition-all duration-300">
                  <div className="flex justify-between items-start w-full">
                    <div className="flex justify-center items-center rounded-[2px] py-[4px] px-[8px] bg-[#f44343] font-normal text-[#fff] text-[13px] whitespace-nowrap">
                      마감 2일 전
                    </div>
                    <div className="flex justify-end h-[24px] gap-[2px]">
                      <img src="/images/icons/heart-empty.5ce7692c.svg" />
                      <h2 className="text-[#1b1c1e] text-[16px] font-semibold">
                        10
                      </h2>
                    </div>
                  </div>
                  <div className="w-[264px] h-[149px] rounded-[8px] border border-[#ececf1] bg-[#fdfdfd] flex items-center justify-center">
                    <img src="/images/company-logo_75.png" />
                  </div>
                  <div className="text-[#1b1c1e] text-[18px] font-bold max-h-[50px] text-ellipsis break-keep whitespace-normal line-clamp-2">
                    [중급/JavaScript/3개월(연장가능)/공덕] (MTS) 클라이언트
                    맵화면 개발자 (고급가능)
                  </div>
                  <div className="flex gap-[4px] items-start h-[52px] overflow-hidden">
                    <h2 className="h-[22px] text-[#ff6948] text-[13px] font-medium whitespace-nowrap leading-[24px]">
                      개발
                    </h2>
                    <span className="rounded-[16px] py-[2px] px-[8px] bg-[#fdf6f4] text-[#ff6948] h-[22px] text-[13px] font-normal whitespace-nowrap">
                      JavaScript
                    </span>
                    <span className="rounded-[16px] py-[2px] px-[8px] bg-[#fdf6f4] text-[#ff6948] h-[22px] text-[13px] font-normal whitespace-nowrap">
                      CSS
                    </span>
                    <span className="rounded-[16px] py-[2px] px-[8px] bg-[#fdf6f4] text-[#ff6948] h-[22px] text-[13px] font-normal whitespace-nowrap">
                      HTML
                    </span>
                    <span className="rounded-[16px] py-[2px] px-[8px] bg-[#fdf6f4] text-[#ff6948] h-[22px] text-[13px] font-normal whitespace-nowrap">
                      VSCode
                    </span>
                  </div>
                  <div className="w-full flex flex-col gap-[8px]">
                    <div className="flex items-center flex-wrap gap-[4px] w-full">
                      <div className="flex items-center gap-[2px]">
                        <img src="/images/icons/adress-icon.27b99aa2.svg" />
                        <h2 className="text-[13px] text-[#38383d] font-semibold">
                          서울
                        </h2>
                      </div>
                      <div className="w-[1px] h-[12px] mx-[1px] bg-[#ececf1]"></div>
                      <div className="flex items-center gap-[2px]">
                        <span className="text-[#777a83] font-normal text-[13px]">
                          숙련도
                        </span>
                        <span className="text-[#1b1c1e] text-[14px] font-semibold">
                          중급
                        </span>
                      </div>
                      <div className="w-[1px] h-[12px] mx-[1px] bg-[#ececf1]"></div>
                      <div className="flex items-center gap-[2px]">
                        <span className="text-[#777a83] font-normal text-[13px]">
                          예상기간
                        </span>
                        <span className="text-[#1b1c1e] text-[14px] font-semibold">
                          3개월
                        </span>
                      </div>
                      <div className="w-[1px] h-[12px] mx-[1px] bg-[#ececf1]"></div>
                      <div className="flex items-center gap-[2px]">
                        <span className="text-[#777a83] font-normal text-[13px]">
                          월 단가
                        </span>
                        <span className="text-[#1b1c1e] text-[14px] font-semibold">
                          금액 제안 가능
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-[435px] flex flex-col items-center bg-[#fff] rounded-[12px] p-[24px] gap-[12px] border border-[#dedfe7] hover:border-[#ff9148] transition-all duration-300">
                  <div className="flex justify-between items-start w-full">
                    <div className="flex justify-center items-center rounded-[2px] py-[4px] px-[8px] bg-[#f44343] font-normal text-[#fff] text-[13px] whitespace-nowrap">
                      마감 2일 전
                    </div>
                    <div className="flex justify-end h-[24px] gap-[2px]">
                      <img src="/images/icons/heart-empty.5ce7692c.svg" />
                      <h2 className="text-[#1b1c1e] text-[16px] font-semibold">
                        5
                      </h2>
                    </div>
                  </div>
                  <div className="w-[264px] h-[149px] rounded-[8px] border border-[#ececf1] bg-[#fdfdfd] flex items-center justify-center">
                    <img src="/images/icons/logo.97dbb956.svg" />
                  </div>
                  <div className="text-[#1b1c1e] text-[18px] font-bold max-h-[50px] text-ellipsis break-keep whitespace-normal line-clamp-2">
                    [고급/JAVA/11개월/선릉역] DB생명 방카슈랑스 개발(7월중순~)
                  </div>
                  <div className="flex gap-[4px] items-start h-[52px] overflow-hidden w-full">
                    <h2 className="h-[22px] text-[#ff6948] text-[13px] font-medium whitespace-nowrap leading-[24px]">
                      개발
                    </h2>
                    <span className="rounded-[16px] py-[2px] px-[8px] bg-[#fdf6f4] text-[#ff6948] h-[22px] text-[13px] font-normal whitespace-nowrap">
                      JAVA
                    </span>
                  </div>
                  <div className="w-full flex flex-col gap-[8px]">
                    <div className="flex items-center flex-wrap gap-[4px] w-full">
                      <div className="flex items-center gap-[2px]">
                        <img src="/images/icons/adress-icon.27b99aa2.svg" />
                        <h2 className="text-[13px] text-[#38383d] font-semibold">
                          서울시 강남구
                        </h2>
                      </div>
                      <div className="w-[1px] h-[12px] mx-[1px] bg-[#ececf1]"></div>
                      <div className="flex items-center gap-[2px]">
                        <span className="text-[#777a83] font-normal text-[13px]">
                          숙련도
                        </span>
                        <span className="text-[#1b1c1e] text-[14px] font-semibold">
                          고급
                        </span>
                      </div>
                      <div className="w-[1px] h-[12px] mx-[1px] bg-[#ececf1]"></div>
                      <div className="flex items-center gap-[2px]">
                        <span className="text-[#777a83] font-normal text-[13px]">
                          예상기간
                        </span>
                        <span className="text-[#1b1c1e] text-[14px] font-semibold">
                          11개월
                        </span>
                      </div>
                      <div className="w-[1px] h-[12px] mx-[1px] bg-[#ececf1]"></div>
                      <div className="flex items-center gap-[2px]">
                        <span className="text-[#777a83] font-normal text-[13px]">
                          월 단가
                        </span>
                        <span className="text-[#1b1c1e] text-[14px] font-semibold">
                          금액 제안 가능
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <Link href="/list-partner">
          <div className="flex py-[24px] justify-center items-center gap-[8px] border-t border-[#ececf1]">
            <h2 className="text-[#58575e] text-[16px] font-bold">더보기</h2>
            <img src="/images/icons/more-btn.cb9074fb.svg" />
          </div>
        </Link>
      </div>
    </div>
  );
}
