'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AlzipDownload() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="pt-[80px] pb-[60px] max-md:px-[40px] max-md:pt-[20px] max-md:pb-[60px] max-sm:pt-[20px] max-sm:px-[20px] max-sm:pb-[60px]">
      <div className="mx-auto max-w-[1120px] min-h-[200px] relative">
        <div className="min-h-[200px] grid-cols-[200px_1fr] grid-rows-[auto_auto] gap-x-[40px] gap-y-[40px] grid max-sm:grid-cols-[80px_1fr] max-sm:min-h-[80px] max-sm:gap-x-[16px] max-sm:gap-y-0">
          <span className="overflow-hidden row-span-2 w-[200px] h-[200px] flex justify-center items-center bg-[#f5f6f7] rounded-[20px] border border-[rgba(0,0,0,0.1)] max-sm:row-start-1 max-sm:row-end-2 max-sm:w-[80px] max-sm:h-[80px] max-sm:rounded-[8px]">
            <img src="/images/icon_400_alzip.png" />
          </span>
          <div className="col-start-2 col-end-3 row-start-1 row-end-2">
            <h2 className="text-[40px] font-bold break-keep text-gray-600 max-sm:text-[24px]">
              알집
            </h2>
            <p className="text-[20px] font-bold pt-[8px] max-sm:text-[14px] text-gray-600">
              전국민 압축프로그램
            </p>
          </div>
          <div className="col-start-2 col-end-3 row-start-2 row-end-3 flex justify-start items-start gap-[10px] max-sm:w-full max-sm:col-start-1 max-sm:col-span-2 max-sm:mt-[20px]">
            <span className="min-w-[180px] max-md:min-w-auto max-sm:hidden">
              <Link
                href="/"
                className="h-[66px] text-[18px] rounded-[10px] px-[36px] bg-[#1a1a1a] flex items-center justify-center text-[#fff] font-bold transition-all duration-200 hover:bg-[#484848]"
              >
                설치하기
                <span className="-mr-[8px] ml-[8px]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M13.5 5.5L8.5 10.5L3.5 5.5"
                      stroke="#fff"
                      strokeWidth="2"
                    ></path>
                    <path d="M8.5 10V0" stroke="#fff" strokeWidth="2"></path>
                    <path d="M2 14H15" stroke="#fff" strokeWidth="2"></path>
                  </svg>
                </span>
              </Link>
            </span>
            <span className="min-w-[180px] max-md:min-w-auto inline-block max-sm:w-full">
              <Link
                href="/"
                className="h-[66px] text-[18px] rounded-[10px] px-[36px] flex items-center justify-center font-bold transition-all duration-200 hover:bg-[rgba(26,26,26,0.1)] border-2 border-[#1a1a1a] text-gray-600 max-md:px-[30px] max-sm:h-[52px] max-sm:text-[15px]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="flex-grow-0 shrink-0 basis-auto mr-[8px] -ml-[8px] max-sm:w-[20px] max-sm:h-[20px] max-sm:mr-[6px] max-sm:-ml-[6px]"
                >
                  <path
                    d="M3.33453 2.66817C3.12263 2.89127 3 3.23862 3 3.68845V19.7335C3 20.1833 3.12263 20.5307 3.33453 20.7538L3.38683 20.8027L12.3263 11.8153V11.603L3.38683 2.61557L3.33453 2.66817Z"
                    fill="#1a1a1a"
                  ></path>
                  <path
                    d="M16.3828 14.8125L13.4062 11.8152V11.6029L16.3864 8.60561L16.4531 8.64461L19.9824 10.6643C20.9896 11.2375 20.9896 12.1806 19.9824 12.7574L16.4531 14.7735L16.3828 14.8125Z"
                    fill="#1a1a1a"
                  ></path>
                  <path
                    d="M15.9137 15.3319L12.8668 12.2675L3.875 21.3121C4.20953 21.6658 4.75506 21.7084 5.37544 21.3547L15.9137 15.3319Z"
                    fill="#1a1a1a"
                  ></path>
                  <path
                    d="M15.9137 8.08595L5.37544 2.06316C4.75506 1.7131 4.20953 1.75572 3.875 2.10941L12.8668 11.1504L15.9137 8.08595Z"
                    fill="#1a1a1a"
                  ></path>
                </svg>
                Google Play
              </Link>
            </span>
          </div>
        </div>
        <Link
          href="/adzero/intro"
          className="flex justify-between items-center w-full text-left text-[#fff] rounded-[7px] py-[20px] px-[32px] mt-[56px] bg-gradient-to-r from-[#f64] to-[#ff4a81] max-sm:mt-[40px] max-sm:flex-col max-sm:pt-[24px] max-sm:px-[20px] max-sm:pb-[32px]"
        >
          <h3 className="text-[20px] font-bold break-keep max-sm:text-[15px] text-center max-sm:leading-1.3 max-sm:mb-[16px]">
            광고없이 사용하고 싶다면?
            <span className="max-sm:block">
              지금 알툴즈 AD-ZERO 시작하세요!
            </span>
          </h3>
          <em
            className="flex justify-center items-center text-[15px] font-bold
              after:w-[12px] after:h-[12px] after:inline-flex after:ml-[4px] after:bg-[url('/images/icons/after.svg')] after:bg-[0_0] after:bg-[100%_auto] after:bg-no-repeat max-sm:text-[14px]"
          >
            알툴즈 AD ZERO 구독하기
          </em>
        </Link>
        <div className="mt-[60px] max-md:mt-[40px] max-md:w-full">
          <h3 className="text-[18px] font-semibold pb-[16px] text-gray-600 max-sm:text-[16px]">
            함께하면 좋은 알툴즈 바로가기
          </h3>
          <ul className="flex justify-start items-center flex-wrap gap-[4px]">
            <li>
              <Link
                href="/products/ALZIP"
                className="flex justify-center items-center text-[14px] text-[#333d4b] whitespace-nowrap border border-[#e5e8eb] hover:border-[#8b95a1] transition-all duration-200 rounded-[22px] py-[8px] pr-[15px] pl-[12px] after:w-[6px] after:h-[9px] after:ml-[5px] after:bg-[url('/images/icons/after1.svg')] max-md:text-[13px] max-md:rounded-[16px] max-md:py-[6px] max-md:pr-[12px] max-md:pl-[10px] max-md:after:hidden"
              >
                <img
                  src="/images/80alzip.png"
                  className="inline-block w-[26px] h-[26px] mr-[5px] max-md:w-[20px] max-md:h-[20px] max-md:mr-[4px]"
                />
                알집
              </Link>
            </li>
            <li>
              <Link
                href="/products/ALZIP"
                className="flex justify-center items-center text-[14px] text-[#333d4b] whitespace-nowrap border border-[#e5e8eb] hover:border-[#8b95a1] transition-all duration-200 rounded-[22px] py-[8px] pr-[15px] pl-[12px] after:w-[6px] after:h-[9px] after:ml-[5px] after:bg-[url('/images/icons/after1.svg')] max-md:text-[13px] max-md:rounded-[16px] max-md:py-[6px] max-md:pr-[12px] max-md:pl-[10px] max-md:after:hidden"
              >
                <img
                  src="/images/icon80alcapture.png"
                  className="inline-block w-[26px] h-[26px] mr-[5px] max-md:w-[20px] max-md:h-[20px] max-md:mr-[4px]"
                />
                알캡처
              </Link>
            </li>
            <li>
              <Link
                href="/products/ALZIP"
                className="flex justify-center items-center text-[14px] text-[#333d4b] whitespace-nowrap border border-[#e5e8eb] hover:border-[#8b95a1] transition-all duration-200 rounded-[22px] py-[8px] pr-[15px] pl-[12px] after:w-[6px] after:h-[9px] after:ml-[5px] after:bg-[url('/images/icons/after1.svg')] max-md:text-[13px] max-md:rounded-[16px] max-md:py-[6px] max-md:pr-[12px] max-md:pl-[10px] max-md:after:hidden"
              >
                <img
                  src="/images/icon_80_aldrive.png"
                  className="inline-block w-[26px] h-[26px] mr-[5px] max-md:w-[20px] max-md:h-[20px] max-md:mr-[4px]"
                />
                알드라이브
              </Link>
            </li>
            <li>
              <Link
                href="/products/ALZIP"
                className="flex justify-center items-center text-[14px] text-[#333d4b] whitespace-nowrap border border-[#e5e8eb] hover:border-[#8b95a1] transition-all duration-200 rounded-[22px] py-[8px] pr-[15px] pl-[12px] after:w-[6px] after:h-[9px] after:ml-[5px] after:bg-[url('/images/icons/after1.svg')] max-md:text-[13px] max-md:rounded-[16px] max-md:py-[6px] max-md:pr-[12px] max-md:pl-[10px] max-md:after:hidden"
              >
                <img
                  src="/images/icon_80_alyac.png"
                  className="inline-block w-[26px] h-[26px] mr-[5px] max-md:w-[20px] max-md:h-[20px] max-md:mr-[4px]"
                />
                알약
              </Link>
            </li>
            <li>
              <Link
                href="/products/ALZIP"
                className="flex justify-center items-center text-[14px] text-[#333d4b] whitespace-nowrap border border-[#e5e8eb] hover:border-[#8b95a1] transition-all duration-200 rounded-[22px] py-[8px] pr-[15px] pl-[12px] after:w-[6px] after:h-[9px] after:ml-[5px] after:bg-[url('/images/icons/after1.svg')] max-md:text-[13px] max-md:rounded-[16px] max-md:py-[6px] max-md:pr-[12px] max-md:pl-[10px] max-md:after:hidden"
              >
                <img
                  src="/images/icon_80_alsee.png"
                  className="inline-block w-[26px] h-[26px] mr-[5px] max-md:w-[20px] max-md:h-[20px] max-md:mr-[4px]"
                />
                알씨
              </Link>
            </li>
            <li>
              <Link
                href="/products/ALZIP"
                className="flex justify-center items-center text-[14px] text-[#333d4b] whitespace-nowrap border border-[#e5e8eb] hover:border-[#8b95a1] transition-all duration-200 rounded-[22px] py-[8px] pr-[15px] pl-[12px] after:w-[6px] after:h-[9px] after:ml-[5px] after:bg-[url('/images/icons/after1.svg')] max-md:text-[13px] max-md:rounded-[16px] max-md:py-[6px] max-md:pr-[12px] max-md:pl-[10px] max-md:after:hidden"
              >
                <img
                  src="/images/icon_80_alpdf.png"
                  className="inline-block w-[26px] h-[26px] mr-[5px] max-md:w-[20px] max-md:h-[20px] max-md:mr-[4px]"
                />
                알PDF
              </Link>
            </li>
            <li>
              <Link
                href="/products/ALZIP"
                className="flex justify-center items-center text-[14px] text-[#333d4b] whitespace-nowrap border border-[#e5e8eb] hover:border-[#8b95a1] transition-all duration-200 rounded-[22px] py-[8px] pr-[15px] pl-[12px] after:w-[6px] after:h-[9px] after:ml-[5px] after:bg-[url('/images/icons/after1.svg')] max-md:text-[13px] max-md:rounded-[16px] max-md:py-[6px] max-md:pr-[12px] max-md:pl-[10px] max-md:after:hidden"
              >
                <img
                  src="/images/icon_80_alsong.png"
                  className="inline-block w-[26px] h-[26px] mr-[5px] max-md:w-[20px] max-md:h-[20px] max-md:mr-[4px]"
                />
                알송
              </Link>
            </li>
          </ul>
        </div>
        <div className="absolute top-0 right-0 w-[240px] max-md:static max-md:w-auto max-md:mt-[40px]">
          <div
            className={`text-[18px] font-semibold mb-[16px] cursor-pointer hidden  text-gray-600 after:inline-block after:w-[16px] after:h-[16px] after:ml-[4px] after:bg-[url('/images/icons/toggle.svg')] max-md:flex max-md:items-center max-sm:text-[16px] ${
              isOpen ? 'after:rotate-180' : 'after:rotate-0'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            사용 환경 및 상세 정보
          </div>
          {isOpen && (
            <ul>
              <li className="text-[14px] text-[#4e5968]">
                PC 권장 사양 : Win 11, 10
              </li>
              <li className="text-[14px] text-[#4e5968] pt-[10px] max-md:pt-[8px]">
                PC 파일 크기 : 43.9MB
              </li>
              <li className="text-[14px] pt-[10px] max-md:pt-[8px]">
                <Link
                  href="https://aldn.altools.co.kr/altools/manual/altoolsmanager/almanager_10_manual.pdf"
                  className="text-[#08f] hover:text-[#0064d9]"
                >
                  온라인 도움말
                </Link>
              </li>
              <li className="text-[14px] pt-[10px] max-md:pt-[8px]">
                <Link
                  href="/service/FAQ"
                  className="text-[#08f] hover:text-[#0064d9]"
                >
                  자주하는 질문
                </Link>
              </li>
              <li className="text-[14px] pt-[10px]">
                <Link
                  href="/business"
                  className="text-[#08f] hover:text-[#0064d9]"
                >
                  라이선스 안내
                </Link>
              </li>
              <li className="text-[14px] pt-[10px]">
                <Link
                  href="/business"
                  className="text-[#08f] hover:text-[#0064d9]"
                >
                  EGG 포맷 및 해제모듈 관련 안내
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
