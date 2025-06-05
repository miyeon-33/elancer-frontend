'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Suggestion() {
  const [activeButton, setActiveButton] = useState('개발');
  const buttons = ['개발', '기획', '퍼블리싱', '디자인', '기타'];
  return (
    <div className="max-w-[1200px] mx-auto max-md:px-[20px] max-sm:px-[20px]">
      <div className="flex pt-[56px] px-[56px] flex-col gap-[32px] rounded-[24px] bg-[#fff] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.06)] max-sm:pt-[32px] max-sm:px-[20px] max-sm:pb-[20px] max-sm:flex-col overflow-x-auto">
        <div className="flex justify-between items-start max-sm:flex-col max-sm:gap-[16px]">
          <h2 className="text-[#2a2b2e] text-[32px] font-bold max-sm:text-[20px]">
            프리랜서들이
            <br />
            <span className="text-[#f64a00]">현재 참여중인</span> 프로젝트
          </h2>
          <div className="flex justify-center items-start gap-[6px] max-sm:w-auto max-sm:justify-start max-sm:gap-[4px]">
            {buttons.map((btn) => (
              <button
                onClick={() => setActiveButton(btn)}
                key={btn}
                type="button"
                className={`rounded-[32px] text-center py-[8px] px-[20px] text-[16px] max-sm:py-[6px] max-sm:px-[12px] max-sm:text-[14px] ${
                  activeButton === btn
                    ? 'bg-[#2a2b2e] text-[#fff]'
                    : 'border border-[#dedfe7] bg-[#fff]'
                }`}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-start flex-wrap">
          <div className="grid grid-cols-2 gap-[24px] items-start max-sm:gap-[12px]  overflow-x-auto">
            <Link href="/project_datail/:id">
              <div className="flex flex-col rounded-[12px] py-[24px] px-[32px] gap-[12px] border border-[#dedfe7] bg-[#fff] hover:border-[#ff3148] max-sm:p-[16px] max-sm:min-w-[300px]">
                <div className="flex items-center justify-between h-[24px]">
                  <div className="flex items-center h-[22px] gap-[2px]">
                    <img src="/images/icons/adress-icon.27b99aa2.svg" />
                    <h2 className="text-[#38383d] text-[13px] font-semibold">
                      서울 종로구
                    </h2>
                  </div>
                  <div className="flex justify-end h-[24px] gap-[2px]">
                    <img src="/images/icons/heart-empty.5ce7692c.svg" />
                    <h2 className="text-[#1b1c1e] font-semibold text-[16px]">
                      0
                    </h2>
                  </div>
                </div>
                <div className="h-[60px] text-[20px] font-bold text-ellipsis line-clamp-2 break-words text-[#000] max-sm:text-[#1b1c1e] max-sm:text-[16px] max-sm:h-[48px]">
                  [초급/Java/약5개월/종각] 조폐공사 차세대 지급 시스템 추가 개발
                </div>
                <div className="flex gap-[4px] items-start flex-wrap max-sm:items-center max-sm:h-[50px]">
                  <span className="h-[22px] text-[#ff6948] text-[13px] font-medium whitespace-nowrap leading-[24px]">
                    개발
                  </span>
                  <span className="h-[22px] text-[#ff6948] bg-[#fbf3f1] text-[13px] font-medium whitespace-nowrap rounded-[16px] py-[2px] px-[8px]">
                    JAVA
                  </span>
                  <span className="h-[22px] text-[#ff6948] bg-[#fbf3f1] text-[13px] font-medium whitespace-nowrap rounded-[16px] py-[2px] px-[8px]">
                    Oracle
                  </span>
                  <span className="h-[22px] text-[#ff6948] bg-[#fbf3f1] text-[13px] font-medium whitespace-nowrap rounded-[16px] py-[2px] px-[8px]">
                    PostgreSQL
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-[4px] items-center flex-wrap">
                    <div className="flex items-center gap-[2px]">
                      <h2 className="text-[#777a83] text-[13px] font-normal break-keep">
                        숙련도
                      </h2>
                      <h2 className="text-[#1b1c1e] text-[14px] font-semibold break-keep">
                        초급
                      </h2>
                    </div>
                    <div className="w-[1px] h-[12px] bg-[#ececf1]"></div>
                    <div className="flex items-center gap-[2px]">
                      <h2 className="text-[#777a83] text-[13px] font-normal break-keep">
                        예상기간
                      </h2>
                      <h2 className="text-[#1b1c1e] text-[14px] font-semibold break-keep">
                        5개월
                      </h2>
                    </div>
                    <div className="w-[1px] h-[12px] bg-[#ececf1]"></div>
                    <div className="flex items-center gap-[2px]">
                      <h2 className="text-[#777a83] text-[13px] font-normal break-keep">
                        월 단가
                      </h2>
                      <h2 className="text-[#1b1c1e] text-[14px] font-semibold break-keep">
                        금액 제안 가능
                      </h2>
                    </div>
                  </div>
                  <div className="text-[#fff] text-[13px] whitespace-nowrap rounded-[2px] bg-[#f44343] font-normal py-[4px] px-[8px]">
                    마감 8일 전
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/project_datail/:id">
              <div className="flex flex-col rounded-[12px] py-[24px] px-[32px] gap-[12px] border border-[#dedfe7] bg-[#fff] w-full max-w-[532px] max-h-[242px] hover:border-[#ff3148] max-sm:min-w-[300px] max-sm:p-[16px]">
                <div className="flex items-center justify-between h-[24px]">
                  <div className="flex gap-[8px] h-[22px] items-center">
                    <div className="flex items-center gap-[2px]">
                      <img src="/images/icons/adress-icon.27b99aa2.svg" />
                      <h2 className="text-[#38383d] text-[13px] font-semibold">
                        성남시 판교
                      </h2>
                    </div>
                    <div className="w-[1px] h-[16px] bg-[#ececf1]"></div>
                    <div className="flex items-center">
                      <h2 className="text-[#007cfb] text-[14px] font-bold">
                        2
                      </h2>
                      <h2 className="text-[#777a83] text-[13px] font-normal">
                        명 참여중
                      </h2>
                    </div>
                  </div>
                  <div className="flex justify-end h-[24px] gap-[2px]">
                    <img src="/images/icons/heart-empty.5ce7692c.svg" />
                    <h2 className="text-[#1b1c1e] font-semibold text-[16px]">
                      0
                    </h2>
                  </div>
                </div>
                <div className="h-[60px] text-[20px] font-bold text-ellipsis line-clamp-2 break-words text-[#000] max-sm:text-[#1b1c1e] max-sm:text-[16px] max-sm:h-[48px]">
                  [중급/Java,Kotlin/10개월/판교] NHN 안드로이드 앱 고도화 개발
                </div>
                <div className="flex gap-[4px] items-start flex-wrap max-sm:items-center max-sm:h-[50px]">
                  <span className="h-[22px] text-[#ff6948] text-[13px] font-medium whitespace-nowrap leading-[24px]">
                    개발
                  </span>
                  <span className="h-[22px] text-[#ff6948] bg-[#fbf3f1] text-[13px] font-medium whitespace-nowrap rounded-[16px] py-[2px] px-[8px]">
                    JAVA
                  </span>
                  <span className="h-[22px] text-[#ff6948] bg-[#fbf3f1] text-[13px] font-medium whitespace-nowrap rounded-[16px] py-[2px] px-[8px]">
                    Android
                  </span>
                  <span className="h-[22px] text-[#ff6948] bg-[#fbf3f1] text-[13px] font-medium whitespace-nowrap rounded-[16px] py-[2px] px-[8px]">
                    Kotlin
                  </span>
                  <span className="h-[22px] text-[#ff6948] bg-[#fbf3f1] text-[13px] font-medium whitespace-nowrap rounded-[16px] py-[2px] px-[8px]">
                    Android(Kotlin)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-[4px] items-center flex-wrap">
                    <div className="flex items-center gap-[2px]">
                      <h2 className="text-[#777a83] text-[13px] font-normal break-keep">
                        숙련도
                      </h2>
                      <h2 className="text-[#1b1c1e] text-[14px] font-semibold break-keep">
                        중급
                      </h2>
                    </div>
                    <div className="w-[1px] h-[12px] bg-[#ececf1]"></div>
                    <div className="flex items-center gap-[2px]">
                      <h2 className="text-[#777a83] text-[13px] font-normal break-keep">
                        예상기간
                      </h2>
                      <h2 className="text-[#1b1c1e] text-[14px] font-semibold">
                        9개월
                      </h2>
                    </div>
                    <div className="w-[1px] h-[12px] bg-[#ececf1]"></div>
                    <div className="flex items-center gap-[2px]">
                      <h2 className="text-[#777a83] text-[13px] font-normal">
                        월 단가
                      </h2>
                      <h2 className="text-[#1b1c1e] text-[14px] font-semibold">
                        450 ~ 470만원
                      </h2>
                    </div>
                  </div>
                  <div className="text-[#fff] text-[13px] whitespace-nowrap rounded-[2px] bg-[#f44343] font-normal py-[4px] px-[8px] ">
                    마감 8일 전
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/project_datail/:id">
              <div className="flex flex-col rounded-[12px] py-[24px] px-[32px] gap-[12px] border border-[#dedfe7] bg-[#fff] w-full max-w-[532px] max-h-[242px] hover:border-[#ff3148] max-sm:min-w-[300px] max-sm:p-[16px]">
                <div className="flex items-center justify-between h-[24px]">
                  <div className="flex gap-[8px] h-[22px] items-center">
                    <div className="flex items-center gap-[2px]">
                      <img src="/images/icons/adress-icon.27b99aa2.svg" />
                      <h2 className="text-[#38383d] text-[13px] font-semibold">
                        서울시 중구
                      </h2>
                    </div>
                    <div className="w-[1px] h-[16px] bg-[#ececf1]"></div>
                    <div className="flex items-center">
                      <h2 className="text-[#007cfb] text-[14px] font-bold">
                        2
                      </h2>
                      <h2 className="text-[#777a83] text-[13px] font-normal">
                        명 참여중
                      </h2>
                    </div>
                  </div>
                  <div className="flex justify-end h-[24px] gap-[2px]">
                    <img src="/images/icons/heart-empty.5ce7692c.svg" />
                    <h2 className="text-[#1b1c1e] font-semibold text-[16px]">
                      0
                    </h2>
                  </div>
                </div>
                <div className="h-[60px] text-[20px] font-bold text-ellipsis line-clamp-2 break-words text-[#000] max-sm:text-[#1b1c1e] max-sm:text-[16px] max-sm:h-[48px]">
                  [고급/IOS/5.5개월/시청역] 카드사 앱 기능 개발건 관리 및 개발
                </div>
                <div className="flex gap-[4px] items-start flex-wrap max-sm:items-center max-sm:h-[50px]">
                  <span className="h-[22px] text-[#ff6948] text-[13px] font-medium whitespace-nowrap leading-[24px]">
                    개발
                  </span>
                  <span className="h-[22px] text-[#ff6948] bg-[#fbf3f1] text-[13px] font-medium whitespace-nowrap rounded-[16px] py-[2px] px-[8px]">
                    iOS
                  </span>
                  <span className="h-[22px] text-[#ff6948] bg-[#fbf3f1] text-[13px] font-medium whitespace-nowrap rounded-[16px] py-[2px] px-[8px]">
                    Swift
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-[4px] items-center flex-wrap">
                    <div className="flex items-center gap-[2px]">
                      <h2 className="text-[#777a83] text-[13px] font-normal">
                        숙련도
                      </h2>
                      <h2 className="text-[#1b1c1e] text-[14px] font-semibold">
                        고급
                      </h2>
                    </div>
                    <div className="w-[1px] h-[12px] bg-[#ececf1]"></div>
                    <div className="flex items-center gap-[2px]">
                      <h2 className="text-[#777a83] text-[13px] font-normal">
                        예상기간
                      </h2>
                      <h2 className="text-[#1b1c1e] text-[14px] font-semibold">
                        5개월
                      </h2>
                    </div>
                    <div className="w-[1px] h-[12px] bg-[#ececf1]"></div>
                    <div className="flex items-center gap-[2px]">
                      <h2 className="text-[#777a83] text-[13px] font-normal">
                        월 단가
                      </h2>
                      <h2 className="text-[#1b1c1e] text-[14px] font-semibold">
                        금액 제안 가능
                      </h2>
                    </div>
                  </div>
                  <div className="text-[#fff] text-[13px] whitespace-nowrap rounded-[2px] bg-[#f44343] font-normal py-[4px] px-[8px] ">
                    마감 8일 전
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/project_datail/:id">
              <div className="flex flex-col rounded-[12px] py-[24px] px-[32px] gap-[12px] border border-[#dedfe7] bg-[#fff] w-full max-w-[532px] max-h-[242px] hover:border-[#ff3148] max-sm:min-w-[300px] max-sm:p-[16px]">
                <div className="flex items-center justify-between h-[24px]">
                  <div className="flex gap-[8px] h-[22px] items-center">
                    <div className="flex items-center gap-[2px]">
                      <img src="/images/icons/adress-icon.27b99aa2.svg" />
                      <h2 className="text-[#38383d] text-[13px] font-semibold">
                        서울
                      </h2>
                    </div>
                    <div className="w-[1px] h-[16px] bg-[#ececf1]"></div>
                    <div className="flex items-center">
                      <h2 className="text-[#007cfb] text-[14px] font-bold">
                        3
                      </h2>
                      <h2 className="text-[#777a83] text-[13px] font-normal">
                        명 참여중
                      </h2>
                    </div>
                  </div>
                  <div className="flex justify-end h-[24px] gap-[2px]">
                    <img src="/images/icons/heart-empty.5ce7692c.svg" />
                    <h2 className="text-[#1b1c1e] font-semibold text-[16px]">
                      0
                    </h2>
                  </div>
                </div>
                <div className="h-[60px] text-[20px] font-bold text-ellipsis line-clamp-2 break-words text-[#000] max-sm:text-[#1b1c1e] max-sm:text-[16px] max-sm:h-[48px]">
                  [고급/Java(Nexacro)/약6개월/강남] 공통파트 개발
                </div>
                <div className="flex gap-[4px] items-start flex-wrap max-sm:items-center max-sm:h-[50px]">
                  <span className="h-[22px] text-[#ff6948] text-[13px] font-medium whitespace-nowrap leading-[24px]">
                    개발
                  </span>
                  <span className="h-[22px] text-[#ff6948] bg-[#fbf3f1] text-[13px] font-medium whitespace-nowrap rounded-[16px] py-[2px] px-[8px]">
                    JAVA
                  </span>
                  <span className="h-[22px] text-[#ff6948] bg-[#fbf3f1] text-[13px] font-medium whitespace-nowrap rounded-[16px] py-[2px] px-[8px]">
                    Nexacro
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-[4px] items-center flex-wrap">
                    <div className="flex items-center gap-[2px]">
                      <h2 className="text-[#777a83] text-[13px] font-normal">
                        숙련도
                      </h2>
                      <h2 className="text-[#1b1c1e] text-[14px] font-semibold">
                        고급
                      </h2>
                    </div>
                    <div className="w-[1px] h-[12px] bg-[#ececf1]"></div>
                    <div className="flex items-center gap-[2px]">
                      <h2 className="text-[#777a83] text-[13px] font-normal">
                        예상기간
                      </h2>
                      <h2 className="text-[#1b1c1e] text-[14px] font-semibold">
                        6개월
                      </h2>
                    </div>
                    <div className="w-[1px] h-[12px] bg-[#ececf1]"></div>
                    <div className="flex items-center gap-[2px]">
                      <h2 className="text-[#777a83] text-[13px] font-normal">
                        월 단가
                      </h2>
                      <h2 className="text-[#1b1c1e] text-[14px] font-semibold">
                        금액 제안 가능
                      </h2>
                    </div>
                  </div>
                  <div className="text-[#fff] text-[13px] whitespace-nowrap rounded-[2px] bg-[#f44343] font-normal py-[4px] px-[8px] ">
                    마감 15일 전
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <Link
          className="flex py-[24px] justify-center items-center gap-[8px] border-t border-[#ececf1] max-sm:py-[12px] max-sm:gap-[4px]"
          href="/list-partner"
        >
          <h2 className="text-[#58575e] text-[16px] font-bold">더보기</h2>
          <img src="/images/icons/more-btn.cb9074fb.svg" />
        </Link>
      </div>
    </div>
  );
}
