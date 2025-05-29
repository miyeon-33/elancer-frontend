'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [serviceToggle, setServiceToggle] = useState(false);
  const [bgColor, setBgColor] = useState('#fff');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setBgColor('hsla(0,0%,100%,0.85)');
      } else {
        setBgColor('#fff');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{ backgroundColor: bgColor }}
      className="w-full px-[60px] max-md:px-[20px] flex items-center z-20
      h-[80px] max-md:h-[59px] max-md:justify-between fixed top-0 left-1/2 -translate-x-1/2"
    >
      <Link href="/">
        <img
          src="/images/icons/Logo.svg"
          alt="헤더 로고"
          className="w-[76px] h-[40px]"
        />
      </Link>
      <div className="pl-[96px] mx-auto max-md:hidden relative">
        <ul
          className="flex justify-center gap-[16px] items-center text-[16px] 
        font-bold text-[#1a1a1a] whitespace-nowrap"
        >
          <li
            className="px-[12px] py-[16px] flex items-center group text-[#1a1a1a]
          hover:rounded-[7px] hover:bg-[rgba(139,149,161,0.1)] leading-[40px] h-[40px] relative"
          >
            <Link href="/products/ALTOOLS">
              <p className="text-[#1a1a1a]">알툴즈 다운로드</p>
            </Link>
            <img
              src="/images/drop.png"
              alt="드랍"
              className="w-[10px] h-[10px] ml-[6px]"
            />
            {/* 호버메뉴 */}
            <div
              className="w-[800px] h-[480px] pt-[24px] px-[20px] pb-[20px] absolute hidden group-hover:block
            top-[100%] left-0 bg-[hsla(0,0%,100%,.98)] rounded-[6px] shadow-[0_0_1px_rgba(0,0,0,0.25),_0_8px_20px_rgba(0,0,0,0.15)]"
            >
              <div className="flex gap-[48px] items-start justify-items-start pb-[24px]">
                {/* Tool */}
                <div className="min-w-[212px]">
                  <h3
                    className="font-normal text-[12px] text-[#8b95a1] mb-[12px] pl-[8px]
                  leading-[18px]"
                  >
                    Tool
                  </h3>
                  <Link href="/products/ALZIP">
                    <div className="flex p-[8px] hover:bg-[rgba(139,149,161,0.1)] text-[#1a1a1a] rounded-[6px]">
                      <img
                        src="/images/icon_120_alzip.png"
                        alt="알집"
                        className="w-[40px] h-[40px]"
                      />
                      <dl className="pl-[10px]">
                        <dt className="text-[14px] leading-[1] pb-[8px]">
                          알집
                        </dt>
                        <dd className="text-[12px] leading-[1] text-[#8b95a1] font-normal">
                          전국민 압축프로그램
                        </dd>
                      </dl>
                    </div>
                  </Link>
                  <Link href="/products/ALCAPTURE">
                    <div className="flex p-[8px] mt-[8px] text-[#1a1a1a] ">
                      <img
                        src="/images/icon_120_alcapture.png"
                        alt="알캡처"
                        className="w-[40px] h-[40px]"
                      />
                      <dl className="pl-[10px]">
                        <dt className="text-[14px] leading-[1] pb-[8px]">
                          알캡처
                        </dt>
                        <dd className="text-[12px] leading-[1] text-[#8b95a1] font-normal">
                          쉽고 빠른 화면 캡처
                        </dd>
                      </dl>
                    </div>
                  </Link>
                  <Link href="/products/ALDRIVE">
                    <div className="flex p-[8px] mt-[8px] text-[#1a1a1a] hover:bg-[rgba(139,149,161,0.1)] rounded-[6px]">
                      <img
                        src="/images/icon_120_aldrive.png"
                        alt="알드라이브"
                        className="w-[40px] h-[40px]"
                      />
                      <dl className="pl-[10px]">
                        <dt className="text-[14px] leading-[1] pb-[8px]">
                          알드라이브
                        </dt>
                        <dd className="text-[12px] leading-[1] text-[#8b95a1] font-normal">
                          편리한 파일 전송 클라이언트
                        </dd>
                      </dl>
                    </div>
                  </Link>
                  <Link href="/products/ALYAC">
                    <div>
                      <h3 className="mt-[20px] mb-[8px] font-normal text-[12px] text-[#8b95a1] leading-[18px] pl-[8px]">
                        Security
                      </h3>
                      <div className="flex p-[8px] text-[#1a1a1a] mt-[8px] hover:bg-[rgba(139,149,161,0.1)] rounded-[6px]">
                        <img
                          src="/images/icon_120_alyac.png"
                          alt="알약"
                          className="w-[40px] h-[40px]"
                        />
                        <dl className="pl-[10px]">
                          <dt className="text-[14px] leading-[1] pb-[8px]">
                            알약
                          </dt>
                          <dd className="text-[12px] leading-[1] text-[#8b95a1] font-normal">
                            전국민 백신 프로그램
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </Link>
                </div>
                {/* Contents */}
                <div className="min-w-[212px]">
                  <h3
                    className="font-normal text-[12px] text-[#8b95a1] mb-[12px] pl-[8px]
                  leading-[18px]"
                  >
                    Contents
                  </h3>
                  <Link href="/products/ALSEE">
                    <div className="flex p-[8px] text-[#1a1a1a] hover:bg-[rgba(139,149,161,0.1)] rounded-[6px]">
                      <img
                        src="/images/icon_120_alsee.png"
                        alt="알씨"
                        className="w-[40px] h-[40px]"
                      />
                      <dl className="pl-[10px]">
                        <dt className="text-[14px] leading-[1] pb-[8px]">
                          알씨
                        </dt>
                        <dd className="text-[12px] leading-[1] text-[#8b95a1] font-normal">
                          이미지 뷰어/사진 편집 프로그램
                        </dd>
                      </dl>
                    </div>
                  </Link>
                  <Link href="/products/ALPDF">
                    <div className="flex p-[8px] text-[#1a1a1a] mt-[8px] hover:bg-[rgba(139,149,161,0.1)] rounded-[6px]">
                      <img
                        src="/images/icon_120_alpdf.png"
                        alt="알PDF"
                        className="w-[40px] h-[40px]"
                      />
                      <dl className="pl-[10px]">
                        <dt className="text-[14px] leading-[1] pb-[8px]">
                          알PDF
                        </dt>
                        <dd className="text-[12px] leading-[1] text-[#8b95a1] font-normal">
                          PDF 뷰어/리더, PDF 변환/편집
                        </dd>
                      </dl>
                    </div>
                  </Link>
                  <Link href="/products/ALSONG">
                    <div className="flex text-[#1a1a1a] p-[8px] mt-[8px] hover:bg-[rgba(139,149,161,0.1)] rounded-[6px]">
                      <img
                        src="/images/icon_120_alsong.png"
                        alt="알송"
                        className="w-[40px] h-[40px]"
                      />
                      <dl className="pl-[10px]">
                        <dt className="text-[14px] leading-[1] pb-[8px]">
                          알송
                        </dt>
                        <dd className="text-[12px] leading-[1] text-[#8b95a1] font-normal">
                          온라인 음악가사 플레이어
                        </dd>
                      </dl>
                    </div>
                  </Link>
                  <div>
                    <Link href="https://alan.estsoft.ai/">
                      <div className="flex text-[#1a1a1a] p-[8px] mt-[8px] hover:bg-[rgba(139,149,161,0.1)] rounded-[6px]">
                        <img
                          src="/images/icon_120_alan.png"
                          alt="앨런"
                          className="w-[40px] h-[40px]"
                        />
                        <dl className="pl-[10px]">
                          <dt className="text-[14px] leading-[1] pb-[8px]">
                            앨런
                          </dt>
                          <dd className="text-[12px] leading-[1] text-[#8b95a1] font-normal">
                            AI 검색 엔진 서비스
                          </dd>
                        </dl>
                      </div>
                    </Link>
                  </div>
                </div>
                {/* Mobile */}
                <div className="min-w-[212px]">
                  <h3
                    className="font-normal text-[12px] text-[#8b95a1] mb-[12px] pl-[8px]
                  leading-[18px]"
                  >
                    Mobile
                  </h3>
                  <Link href="/products/mobile#ALPDFM">
                    <div className="flex p-[8px] text-[#1a1a1a] hover:bg-[rgba(139,149,161,0.1)] rounded-[6px]">
                      <img
                        src="/images/icon_120_alpdfMobile.png"
                        alt=" 알PDF 모바일"
                        className="w-[40px] h-[40px]"
                      />
                      <dl className="pl-[10px]">
                        <dt className="text-[14px] leading-[1] pb-[8px]">
                          알PDF 모바일
                        </dt>
                        <dd className="text-[12px] leading-[1] text-[#8b95a1] font-normal">
                          올인원 PDF 솔루션
                        </dd>
                      </dl>
                    </div>
                  </Link>
                  <Link href="/products/mobile#ALZIPM">
                    <div className="flex p-[8px] text-[#1a1a1a] mt-[8px] hover:bg-[rgba(139,149,161,0.1)] rounded-[6px]">
                      <img
                        src="/images/icon_120_alzipMobile.png"
                        alt="알집 모바일"
                        className="w-[40px] h-[40px]"
                      />
                      <dl className="pl-[10px]">
                        <dt className="text-[14px] leading-[1] pb-[8px]">
                          알집 모바일
                        </dt>
                        <dd className="text-[12px] leading-[1] text-[#8b95a1] font-normal">
                          압축 지원 파일 탐색 관리자
                        </dd>
                      </dl>
                    </div>
                  </Link>
                  <Link href="/products/mobile#ALSONGM">
                    <div className="flex p-[8px] mt-[8px] text-[#1a1a1a] hover:bg-[rgba(139,149,161,0.1)] rounded-[6px]">
                      <img
                        src="/images/icon_120_alsongMobile.png"
                        alt="알송 모바일"
                        className="w-[40px] h-[40px]"
                      />
                      <dl className="pl-[10px]">
                        <dt className="text-[14px] leading-[1] pb-[8px]">
                          알송 모바일
                        </dt>
                        <dd className="text-[12px] leading-[1] text-[#8b95a1] font-normal">
                          음악과 가사를 동시에
                        </dd>
                      </dl>
                    </div>
                  </Link>
                  <div>
                    <Link href="/products/mobile#ALYACM">
                      <div className="flex p-[8px] mt-[8px] text-[#1a1a1a] hover:bg-[rgba(139,149,161,0.1)] rounded-[6px]">
                        <img
                          src="/images/icon_120_alyacMobile.png"
                          alt="알약M"
                          className="w-[40px] h-[40px] rounded-[8px]"
                        />
                        <dl className="pl-[10px]">
                          <dt className="text-[14px] leading-[1] pb-[8px]">
                            알약M
                          </dt>
                          <dd className="text-[12px] leading-[1] text-[#8b95a1] font-normal">
                            스마트폰의 모든 처방
                          </dd>
                        </dl>
                      </div>
                    </Link>
                    <Link href="/products/mobile#PICNIC">
                      <div className="flex p-[8px] mt-[8px] text-[#1a1a1a] hover:bg-[rgba(139,149,161,0.1)] rounded-[6px]">
                        <img
                          src="/images/icon_120_picnicMobile.png"
                          alt="피크닉"
                          className="w-[40px] h-[40px] rounded-[8px]"
                        />
                        <dl className="pl-[10px]">
                          <dt className="text-[14px] leading-[1] pb-[8px]">
                            피크닉
                          </dt>
                          <dd className="text-[12px] leading-[1] text-[#8b95a1] font-normal">
                            맑은 하늘 필터 카메라
                          </dd>
                        </dl>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/products/ALTOOLS">
                <div
                  className="flex justify-center items-center gap-[67px] h-[70px] rounded-[10px]
              pl-[14px] bg-gradient-to-r from-[#ff6746] to-[#ff477e]"
                >
                  <img
                    src="/images/icon_pc_altools.png"
                    alt="알집툴즈"
                    className="w-[192px] h-auto"
                  />
                  <strong className="flex items-center justify-center text-[#fff] text-[12px] font-normal">
                    알툴즈 모든 제품을 한 번에.
                    <em className="text-[17px] font-bold pl-[12px] flex items-center gap-[7px]">
                      알툴즈 통합팩
                      <img
                        src="/images/icons/go.svg"
                        alt="go"
                        className="w-[8px] h-[12px]"
                      />
                    </em>
                  </strong>
                </div>
              </Link>
            </div>
          </li>
          <Link href="/adzero/intro">
            <li className="px-[12px] py-[16px] flex items-center hover:rounded-[7px] hover:bg-[rgba(139,149,161,0.1)] leading-[40px] h-[40px] text-gray-600">
              알툴즈 AD-ZERO
            </li>
          </Link>
          <Link href="/business">
            <li
              className="px-[12px] py-[16px] hover:rounded-[7px] text-gray-600
          hover:bg-[rgba(139,149,161,0.1)] flex items-center h-[40px]"
            >
              비즈니스 구매
            </li>
          </Link>
          <li
            className="px-[12px] py-[16px] flex items-center relative group
          hover:rounded-[7px] hover:bg-[rgba(139,149,161,0.1)] leading-[40px] h-[40px]"
          >
            고객센터
            <img
              src="/images/drop.png"
              alt="드랍"
              className="w-[10px] h-[10px] ml-[6px]"
            />
            <div
              className="py-[14px] px-[12px] absolute hidden group-hover:block
            top-[100%] left-0 bg-[hsla(0,0%,100%,.98)] rounded-[6px] whitespace-nowrap
            shadow-[0_0_1px_rgba(0,0,0,0.25),_0_8px_20px_rgba(0,0,0,0.15)]"
            >
              <ul className="text-[14px] font-normal">
                <Link href="/service/FAQ">
                  <li
                    className="py-[10px] px-[8px] h-[34px] leading-[34px] flex items-center
                hover:bg-[rgba(139,149,161,0.1)] hover:rounded-[7px]"
                  >
                    자주하는 질문
                  </li>
                </Link>
                <Link href="/login">
                  <li
                    className="py-[10px] px-[8px] h-[34px] leading-[34px] flex items-center
                hover:bg-[rgba(139,149,161,0.1)] hover:rounded-[7px]"
                  >
                    1:1 문의하기
                  </li>
                </Link>
                <Link href="/service/notice">
                  <li
                    className="py-[10px] px-[8px] h-[34px] leading-[34px] flex items-center
                hover:bg-[rgba(139,149,161,0.1)] hover:rounded-[7px]"
                  >
                    공지사항
                  </li>
                </Link>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex gap-[20px]">
        <Link href="https://apluspoint.co.kr/">
          <img
            src="/images/apoint.png"
            alt="에이쁠포인트"
            className="w-[148px] h-[32px] max-md:w-[130px] max-md:h-[28px] max-md:absolute
            max-md:top-[16px] max-md:right-[84px]"
          />
        </Link>
        <div className="min-w-[92px]">
          <span className="float-right">
            <Link href="/login">
              <button
                type="button"
                className="h-[36px] text-[13px] rounded-[7px] px-[16px] bg-[#1a1a1a] text-[#fff]
              font-bold hover:bg-[#484848] max-md:hidden"
              >
                로그인
              </button>
            </Link>
            <button
              className="w-[32px] h-[32px] hidden max-md:block"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                src={
                  isOpen
                    ? '/images/icons/svgexport-4.svg'
                    : '/images/icons/svgexport-3.svg'
                }
                alt="메뉴"
              />
            </button>
          </span>
          {isOpen && (
            <div className="absolute top-[59px] left-0 w-full bg-[#fff]">
              <div className="pt-[12px] px-[20px] pb-[20px]">
                <Link href="/login">
                  <button
                    type="button"
                    className="text-[15px] rounded-[7px] px-[16px] bg-[#1a1a1a] text-[#fff]
              font-bold hover:bg-[#484848] w-full h-[52px]"
                  >
                    로그인
                  </button>
                </Link>
              </div>
              <ul className="px-[20px] pb-[60px]">
                <li
                  className={`flex items-center text-gray-600 py-[24px] text-[18px]
                h-[66px] font-bold ${
                  toggle ? 'border-0' : 'border-b border-b-[#f2f4f6]'
                }`}
                  onClick={() => setToggle(!toggle)}
                >
                  <p className="cursor-pointer">알툴즈 다운로드</p>
                  <img
                    src="/images/drop.png"
                    alt="드랍"
                    className={`w-[10px] h-[10px] ml-[6px] cursor-pointer ${
                      toggle ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </li>
                {toggle && (
                  <div className="">
                    <h3
                      className="font-normal text-[12px] text-[#8b95a1] px-[10px]
                  leading-[18px]"
                    >
                      Tool
                    </h3>
                    <Link href="/products/ALZIP">
                      <div className="flex p-[8px] text-[#1a1a1a] mt-[8px]">
                        <img
                          src="/images/icon_120_alzip.png"
                          alt="알집"
                          className="w-[40px] h-[40px]"
                        />
                        <dl className="pl-[10px]">
                          <dt className="text-[14px] leading-[1] pb-[8px]">
                            알집
                          </dt>
                          <dd className="text-[12px] leading-[1] text-[#8b95a1] font-normal">
                            전국민 압축프로그램
                          </dd>
                        </dl>
                      </div>
                    </Link>
                    <Link href="/products/ALCAPTURE">
                      <div className="flex p-[8px] text-[#1a1a1a] mt-[8px]">
                        <img
                          src="/images/icon_120_alcapture.png"
                          alt="알캡처"
                          className="w-[40px] h-[40px]"
                        />
                        <dl className="pl-[10px]">
                          <dt className="text-[14px] leading-[1] pb-[8px]">
                            알캡처
                          </dt>
                          <dd className="text-[12px] leading-[1] text-[#8b95a1] font-normal">
                            쉽고 빠른 화면 캡처
                          </dd>
                        </dl>
                      </div>
                    </Link>
                    <Link href="/products/ALDRIVE">
                      <div className="flex p-[8px] mt-[8px] text-[#1a1a1a] hover:bg-[rgba(139,149,161,0.1)] rounded-[6px]">
                        <img
                          src="/images/icon_120_aldrive.png"
                          alt="알드라이브"
                          className="w-[40px] h-[40px]"
                        />
                        <dl className="pl-[10px]">
                          <dt className="text-[14px] leading-[1] pb-[8px]">
                            알드라이브
                          </dt>
                          <dd className="text-[12px] leading-[1] text-[#8b95a1] font-normal">
                            편리한 파일 전송 클라이언트
                          </dd>
                        </dl>
                      </div>
                    </Link>
                    <Link href="/products/ALYAC">
                      <div>
                        <h3 className="mt-[20px] font-normal text-[12px] text-[#8b95a1] leading-[18px] pl-[8px]">
                          Security
                        </h3>
                        <div className="flex p-[8px] text-[#1a1a1a] mt-[8px]">
                          <img
                            src="/images/icon_120_alyac.png"
                            alt="알약"
                            className="w-[40px] h-[40px]"
                          />
                          <dl className="pl-[10px]">
                            <dt className="text-[14px] leading-[1] pb-[8px]">
                              알약
                            </dt>
                            <dd className="text-[12px] leading-[1] text-[#8b95a1] font-normal">
                              전국민 백신 프로그램
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </Link>
                    <h3
                      className="font-normal text-[12px] text-[#8b95a1] mt-[20px] px-[10px]
                  leading-[18px]"
                    >
                      Contents
                    </h3>
                    <Link href="/products/ALSEE">
                      <div className="flex p-[8px] text-[#1a1a1a] mt-[8px]">
                        <img
                          src="/images/icon_120_alsee.png"
                          alt="알씨"
                          className="w-[40px] h-[40px]"
                        />
                        <dl className="pl-[10px]">
                          <dt className="text-[14px] leading-[1] pb-[8px]">
                            알씨
                          </dt>
                          <dd className="text-[12px] leading-[1] text-[#8b95a1] font-normal">
                            이미지 뷰어/사진 편집 프로그램
                          </dd>
                        </dl>
                      </div>
                    </Link>
                    <Link href="/products/ALPDF">
                      <div className="flex p-[8px] text-[#1a1a1a] mt-[8px] hover:bg-[rgba(139,149,161,0.1)] rounded-[6px]">
                        <img
                          src="/images/icon_120_alpdf.png"
                          alt="알PDF"
                          className="w-[40px] h-[40px]"
                        />
                        <dl className="pl-[10px]">
                          <dt className="text-[14px] leading-[1] pb-[8px]">
                            알PDF
                          </dt>
                          <dd className="text-[12px] leading-[1] text-[#8b95a1] font-normal">
                            PDF 뷰어/리더, PDF 변환/편집
                          </dd>
                        </dl>
                      </div>
                    </Link>
                    <Link href="/products/ALSONG">
                      <div className="flex text-[#1a1a1a] p-[8px] mt-[8px] hover:bg-[rgba(139,149,161,0.1)] rounded-[6px]">
                        <img
                          src="/images/icon_120_alsong.png"
                          alt="알송"
                          className="w-[40px] h-[40px]"
                        />
                        <dl className="pl-[10px]">
                          <dt className="text-[14px] leading-[1] pb-[8px]">
                            알송
                          </dt>
                          <dd className="text-[12px] leading-[1] text-[#8b95a1] font-normal">
                            온라인 음악가사 플레이어
                          </dd>
                        </dl>
                      </div>
                    </Link>
                    <div>
                      <Link href="https://alan.estsoft.ai/">
                        <div className="flex text-[#1a1a1a] p-[8px] mt-[8px] hover:bg-[rgba(139,149,161,0.1)] rounded-[6px]">
                          <img
                            src="/images/icon_120_alan.png"
                            alt="앨런"
                            className="w-[40px] h-[40px]"
                          />
                          <dl className="pl-[10px]">
                            <dt className="text-[14px] leading-[1] pb-[8px]">
                              앨런
                            </dt>
                            <dd className="text-[12px] leading-[1] text-[#8b95a1] font-normal">
                              AI 검색 엔진 서비스
                            </dd>
                          </dl>
                        </div>
                      </Link>
                    </div>
                    <h3
                      className="font-normal text-[12px] text-[#8b95a1] mt-[20px] px-[10px]
                  leading-[18px]"
                    >
                      Mobile
                    </h3>
                    <Link href="/products/mobile#ALPDFM">
                      <div className="flex p-[8px] text-[#1a1a1a] mt-[8px]">
                        <img
                          src="/images/icon_120_alpdfMobile.png"
                          alt=" 알PDF 모바일"
                          className="w-[40px] h-[40px]"
                        />
                        <dl className="pl-[10px]">
                          <dt className="text-[14px] leading-[1] pb-[8px]">
                            알PDF 모바일
                          </dt>
                          <dd className="text-[12px] leading-[1] text-[#8b95a1] font-normal">
                            올인원 PDF 솔루션
                          </dd>
                        </dl>
                      </div>
                    </Link>
                    <Link href="/products/mobile#ALZIPM">
                      <div className="flex p-[8px] text-[#1a1a1a] mt-[8px] ">
                        <img
                          src="/images/icon_120_alzipMobile.png"
                          alt="알집 모바일"
                          className="w-[40px] h-[40px]"
                        />
                        <dl className="pl-[10px]">
                          <dt className="text-[14px] leading-[1] pb-[8px]">
                            알집 모바일
                          </dt>
                          <dd className="text-[12px] leading-[1] text-[#8b95a1] font-normal">
                            압축 지원 파일 탐색 관리자
                          </dd>
                        </dl>
                      </div>
                    </Link>
                    <Link href="/products/mobile#ALSONGM">
                      <div className="flex p-[8px] mt-[8px] text-[#1a1a1a] ">
                        <img
                          src="/images/icon_120_alsongMobile.png"
                          alt="알송 모바일"
                          className="w-[40px] h-[40px]"
                        />
                        <dl className="pl-[10px]">
                          <dt className="text-[14px] leading-[1] pb-[8px]">
                            알송 모바일
                          </dt>
                          <dd className="text-[12px] leading-[1] text-[#8b95a1] font-normal">
                            음악과 가사를 동시에
                          </dd>
                        </dl>
                      </div>
                    </Link>
                    <div>
                      <Link href="/products/mobile#ALYACM">
                        <div className="flex p-[8px] mt-[8px] text-[#1a1a1a] ">
                          <img
                            src="/images/icon_120_alyacMobile.png"
                            alt="알약M"
                            className="w-[40px] h-[40px] rounded-[8px]"
                          />
                          <dl className="pl-[10px]">
                            <dt className="text-[14px] leading-[1] pb-[8px]">
                              알약M
                            </dt>
                            <dd className="text-[12px] leading-[1] text-[#8b95a1] font-normal">
                              스마트폰의 모든 처방
                            </dd>
                          </dl>
                        </div>
                      </Link>
                      <Link href="/products/mobile#PICNIC">
                        <div className="flex p-[8px] mt-[8px] text-[#1a1a1a] ">
                          <img
                            src="/images/icon_120_picnicMobile.png"
                            alt="피크닉"
                            className="w-[40px] h-[40px] rounded-[8px]"
                          />
                          <dl className="pl-[10px]">
                            <dt className="text-[14px] leading-[1] pb-[8px]">
                              피크닉
                            </dt>
                            <dd className="text-[12px] leading-[1] text-[#8b95a1] font-normal">
                              맑은 하늘 필터 카메라
                            </dd>
                          </dl>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="flex justify-center items-center gap-[67px] h-[48px] rounded-[10px]
              pl-[14px] bg-gradient-to-r from-[#ff6746] to-[#ff477e] mt-[20px]"
                    >
                      <strong className="flex items-center justify-center text-[#fff] text-[12px] font-normal">
                        알툴즈 모든 제품을 한 번에.
                        <em className="text-[14px] font-bold pl-[12px] flex items-center gap-[7px]">
                          알툴즈 통합팩
                          <img
                            src="/images/icons/go.svg"
                            alt="go"
                            className="w-[8px] h-[12px]"
                          />
                        </em>
                      </strong>
                    </div>
                  </div>
                )}
                <li
                  className="flex items-center text-gray-600 py-[24px] text-[18px]
                h-[66px] font-bold border-b border-b-[#f2f4f6]"
                >
                  <Link href="/adzero/intro" className="text-gray-600">
                    <p>알툴즈 AD-ZERO</p>
                  </Link>
                </li>
                <li
                  className="flex items-center text-gray-600 py-[24px] text-[18px]
                h-[66px] font-bold border-b border-b-[#f2f4f6]"
                >
                  <Link href="/business" className="text-gray-600">
                    <p>비즈니스 구매</p>
                  </Link>
                </li>
                <li
                  className={`flex items-center text-gray-600 py-[24px] text-[18px]
                h-[66px] font-bold ${
                  serviceToggle ? 'border-0' : 'border-b border-b-[#f2f4f6]'
                }`}
                  onClick={() => setServiceToggle(!serviceToggle)}
                >
                  <p className="cursor-pointer">고객센터</p>
                  <img
                    src="/images/drop.png"
                    alt="드랍"
                    className={`w-[10px] h-[10px] ml-[6px] cursor-pointer ${
                      serviceToggle ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </li>
                {serviceToggle && (
                  <ul className="text-gray-600">
                    <Link href="/service/FAQ" className="text-gray-600">
                      <li className="p-[8px] leading-[1] text-[15px]">
                        자주하는 질문
                      </li>
                    </Link>
                    <Link href="/login" className="text-gray-600">
                      <li className="p-[8px] leading-[1] text-[15px] mt-[4px]">
                        1:1 문의하기
                      </li>
                    </Link>
                    <Link href="/service/notice" className="text-gray-600">
                      <li className="p-[8px] leading-[1] text-[15px] mt-[4px]">
                        공지사항
                      </li>
                    </Link>
                  </ul>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
