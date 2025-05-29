'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const slideData = [
  {
    id: 1,
    title: 'AI 얼굴 모자이크 출시!',
    description: `AI가 얼굴을 자동으로 찾아 모자이크 처리!
      초상권 보호, 이제 클릭 한 번으로 해결해요.`,
    explanation: 'AI 기능 자세히보기',
  },
  {
    id: 2,
    title: '알PDF 모바일 출시!',
    description: `PC에서 검증된 강력한 PDF 편집 기능을
      앱 하나로 언제 어디서나 쉽고 편리하게 이용하세요.`,
    explanation: '자세히 알아보기',
  },
  {
    id: 3,
    title: 'AI 배경 제거 & 화질 개선 출시!',
    description: `AI가 자동으로 이미지의 배경을 제거하고
      사진 화질을 빠르게 업그레이드할 수 있어요.`,
    explanation: 'AI 기능 자세히보기',
  },
  {
    id: 4,
    title: `자유로운 편집과
    문서 포맷 변환`,
    description: `제한이 많던 PDF 문서,
    원하는 문서 형식 변환과 편집을 손쉽게!`,
    explanation: '알PDF 자세히보기',
  },
  {
    id: 5,
    title: `알툴즈를 더 편리하게.
    내 PC를 위한 필수 매니저`,
    description: `알매니저가 다양한 알툴즈의 최신 기능을
      놓치지 않고 챙겨드려요.`,
    explanation: '알매니저 자세히보기',
  },
  {
    id: 6,
    title: `다양한 캡처는 기본,
    간편한 편집까지`,
    description: `크롭, 모자이크 등 신규 편집 기능이 추가된
      알캡처 3.0을 지금 바로 사용해 보세요.`,
    explanation: '알캡처 자세히보기',
  },
];

export default function MainSlider() {
  const prevRef = useRef(null); // 이전 버튼 ref
  const nextRef = useRef(null); // 다음 버튼 ref
  const paginationRef = useRef(null); // 페이지네이션 ref
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [realIndex, setRealIndex] = useState(0);

  function handleSlideChange() {
    setRealIndex(swiperInstance?.realIndex);
  }

  function handleToggle() {
    if (isPlaying) {
      swiperInstance?.autoplay?.stop();
    } else {
      swiperInstance?.autoplay?.start();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <div
      className="mx-auto w-[calc(100%-80px)] overflow-hidden rounded-[28px] h-[600px] relative
      max-w-[2560px] max-md:h-[480px] max-md:w-[calc(100%-40px)] max-md:rounded-[16px]"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        pagination={{
          el: paginationRef.current,
          type: 'fraction',
          clickable: true,
        }}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
        }}
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <img
            src="/images/img_mainSlide_ai_feature.png"
            alt="슬라이드1"
            className="object-cover h-[600px] min-w-[1024px] w-full block max-md:hidden"
          />
          <img
            src="/images/mainslider1md.png"
            alt="슬라이드1모바일"
            className="object-cover h-[480px] max-w-[1023px] w-full hidden max-md:block"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/img_mainSlide_alpdfMobile.png"
            alt="슬라이드2"
            className="object-cover h-[600px] min-w-[1024px] w-full block max-md:hidden"
          />
          <img
            src="/images/mainslider2md.png"
            alt="슬라이드2모바일"
            className="object-cover h-[480px] max-w-[1023px] w-full hidden max-md:block"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/img_mainSlide_alsee.png"
            alt="슬라이드3"
            className="object-cover h-[600px] min-w-[1024px] w-full block max-md:hidden"
          />
          <img
            src="/images/mainslider3md.png"
            alt="슬라이드3모바일"
            className="object-cover h-[480px] max-w-[1023px] w-full hidden max-md:block"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/img_mainSlide_alpdf.png"
            alt="슬라이드4"
            className="object-cover h-[600px] min-w-[1024px] w-full block max-md:hidden"
          />
          <img
            src="/images/mainslider4md.png"
            alt="슬라이드4모바일"
            className="object-cover h-[480px] max-w-[1023px] w-full hidden max-md:block"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/img_mainSlide_almanager.png"
            alt="슬라이드5"
            className="object-cover h-[600px] min-w-[1024px] w-full block max-md:hidden"
          />
          <img
            src="/images/mainslider5md.png"
            alt="슬라이드5모바일"
            className="object-cover h-[480px] max-w-[1023px] w-full hidden max-md:block"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/img_mainSlide_alcapture.png"
            alt="슬라이드6"
            className="object-cover h-[600px] min-w-[1024px] w-full block max-md:hidden"
          />
          <img
            src="/images/mainslider6md.png"
            alt="슬라이드6모바일"
            className="object-cover h-[480px] max-w-[1023px] w-full hidden max-md:block"
          />
        </SwiperSlide>
        <div
          className="max-w-[1120px] mx-auto w-full px-[40px]
          absolute left-1/2 -translate-x-1/2 bottom-[28px] right-0 z-10
          flex items-center justify-items-start max-md:justify-center
          max-md:bottom-auto max-md:top-[445px]"
        >
          <button
            ref={prevRef}
            type="button"
            className="mr-[20px] hover:border hover:rounded-[50%] hover:border-[#1a1a1a]
              w-[32px] h-[32px] "
          >
            <img
              src="/images/icons/slider-btn-prev.svg"
              alt="이전"
              className=""
            />
          </button>
          <div className="w-[59px] text-gray-600 px-[8px] text-center">
            <span ref={paginationRef} className="text-[12px] h-[18px]"></span>
          </div>
          <button onClick={handleToggle}>
            <img
              src={
                isPlaying ? '/images/icons/stop.svg' : '/images/icons/play.svg'
              }
              alt={isPlaying ? '정지' : '재생'}
            />
          </button>
          <button
            ref={nextRef}
            type="button"
            className="ml-[20px] hover:border hover:rounded-[50%] hover:border-[#1a1a1a]
              w-[32px] h-[32px] "
          >
            <img
              src="/images/icons/slider-btn-next.svg"
              alt="다음"
              className=""
            />
          </button>
        </div>
      </Swiper>
      {slideData.map((slide) => (
        <div
          key={slide.id}
          className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full text-50px
              whitespace-pre-line px-[40px] max-w-[1120px] max-md:px-[20px] z-1 max-md:top-[146px]
              ${
                slide.id === swiperInstance?.realIndex + 1
                  ? 'opacity-100 transition-all duration-500'
                  : 'opacity-0'
              } ${
            slide.id === 1 || slide.id === 2 ? 'text-[#fff]' : 'text-gray-600'
          }`}
        >
          <div
            className="flex items-start flex-col max-w-[1120px]
              h-full mx-auto max-md:items-center "
          >
            <h2
              className="text-[48px] leading-[1.3] font-bold
                max-md:text-[24px] break-keep max-md:text-center"
            >
              {slide.title}
            </h2>
            <p
              className="text-[16px] mt-[20px] leading-[1.6]
                max-md:text-center max-md:mt-[12px] max-md:text-[15px]"
            >
              {slide.description}
            </p>
            <button
              type="button"
              className="mt-[40px] h-[66px] text-[18px] rounded-[10px] px-[36px] bg-[#fff]
                  font-bold text-gray-600 flex items-center justify-center
                  max-md:text-[16px] max-md:mt-[20px] max-sm:h-[52px]"
            >
              <p>{slide.explanation}</p>
              <span className="ml-[8px] w-[16px] h-[16px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6 3L11 8L6 13"
                    stroke="#1a1a1a"
                    strokeWidth="2"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
