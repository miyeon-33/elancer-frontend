'use client';

import { useEffect, useState } from 'react';

export default function Platform() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {
    // count1
    const animateFloatCount = (
      setFunction: React.Dispatch<React.SetStateAction<number>>,
      endValue: number,
      duration: number
    ) => {
      let start = 0;
      const interval = 50;
      const steps = duration / interval;
      const increment = endValue / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          clearInterval(timer);
          start = endValue;
        }
        setFunction(parseFloat(start.toFixed(1))); // 소수점 없이 정수 처리
      }, interval);
    };
    // count2
    const animateIntCount = (
      setFunction: React.Dispatch<React.SetStateAction<number>>,
      endValue: number,
      duration: number
    ) => {
      let start = 0;
      const interval = 50;
      const steps = duration / interval;
      const increment = endValue / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          clearInterval(timer);
          start = endValue;
        }
        setFunction(Math.round(start)); // 정수만 표시
      }, interval);
    };
    animateFloatCount(setCount, 1.1, 1000); // count는 1.1까지, 소수점 유지
    animateIntCount(setCount2, 41, 1500); // count2는 41까지, 정수만 증가
    animateIntCount(setCount3, 98, 1500); // count2는 41까지, 정수만 증가
    animateIntCount(setCount4, 8, 1000); // count2는 41까지, 정수만 증가
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto max-md:px-[20px]">
      <div className="flex flex-col justify-center items-center pt-[68px] px-[56px] pb-[120px] gap-[68px] max-sm:mt-[24px] max-sm:px-[32px] max-sm:pb-[68px] max-sm:gap-[24px]">
        <div className="flex justify-between items-center w-full max-sm:flex-col max-sm:items-start max-sm:gap-[24px]">
          <div className="flex flex-col gap-[16px] max-sm:gap-[6px]">
            <h1>
              <div className="flex gap-[6px]">
                <p className="font-bold text-[36px] text-[#1b1c1e] max-sm:text-[20px]">
                  대한민국
                </p>
                <p className="font-bold text-[36px] text-[#ff6948] max-sm:text-[20px]">
                  NO.1
                </p>
              </div>
              <p className="font-bold text-[36px] text-[#1b1c1e] max-sm:text-[20px]">
                IT 프리랜서와 기업의 매칭 플랫폼
              </p>
            </h1>
            <p className="font-normal text-[20px] text-[#58575e] max-sm:text-[14px]">
              이랜서는 26년 간의 축적된 노하우와 데이터 기반으로
              <br />
              기업과 프리랜서의 이상적 매칭을 지원하는 국내 최초 프리랜서 플랫폼
              입니다.
            </p>
          </div>
          <div className="flex flex-col rounded-[16px] p-[24px] gap-[16px] bg-[#fff] shadow-[0px_2px_8px_0px_#00000014] max-sm:p-[20px] max-sm:w-full">
            <div className="flex flex-col gap-[2px]">
              <div className="flex gap-[2px]">
                <h2 className="font-bold text-[20px] text-[#38383d] max-sm:text-[16px]">
                  이랜서 바로가기
                </h2>
                <img src="/images/icons/arrow-up-right.a415e5b4.svg" />
              </div>
              <h2 className="font-normal text-[16px] text-[#58575e] max-sm:text-[13px]">
                쉽고, 빠르게 이랜서가 제공하는 서비스를 살펴보세요!
              </h2>
            </div>
            <div className="flex flex-col gap-[6px]">
              <div className="flex gap-[6px]">
                <div className="min-w-[173px] h-[64px] rounded-[8px] py-[16px] px-[24px] cursor-pointer bg-[#fff] border border-[#dedfe7] flex items-center justify-center max-sm:min-w-0 max-sm:h-[52px] max-sm:py-[16px] max-sm:px-0 max-sm:w-full">
                  <div className="flex gap-[4px] justify-center items-center max-sm:gap-[2px]">
                    <img src="images/icons/main-user.0f0ad46a.svg" />
                    <h2 className="font-bold text-[16px] text-[#38383d] max-sm:text-[14px]">
                      회원가입
                    </h2>
                  </div>
                </div>
                <div className="min-w-[173px] h-[64px] rounded-[8px] py-[16px] px-[24px] cursor-pointer bg-[#fff] border border-[#dedfe7] flex items-center justify-center max-sm:min-w-0 max-sm:h-[52px] max-sm:py-[16px] max-sm:px-0 max-sm:w-full">
                  <div className="flex gap-[4px] justify-center items-center max-sm:gap-[2px]">
                    <img src="images/icons/main-info.a8e50644.svg" />
                    <h2 className="font-bold text-[16px] text-[#38383d] max-sm:text-[14px]">
                      이용안내
                    </h2>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center min-w-[173px] h-[64px] rounded-[8px] py-[16px] px-[24px] cursor-pointer bg-[#fff] border border-[#dedfe7] max-sm:min-w-0 max-sm:h-[52px] max-sm:py-[16px] max-sm:px-0 max-sm:w-full">
                <div className="flex gap-[4px] justify-center items-center max-sm:gap-[2px]">
                  <img src="images/icons/buildings.b674ff8e.svg" />
                  <h2 className="font-bold text-[16px] text-[#38383d] max-sm:text-[14px]">
                    기업고객 상담 문의
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex rounded-[24px] max-sm:grid max-sm:grid-cols-2 max-sm:gap-[32px] w-full">
          {/* 누적 거래 금액 */}
          <div className="flex flex-col justify-center items-center border-r border-[#dedfe7] max-w-[282px] max-sm:px-0 max-sm:border-0 max-sm:w-[131px] w-[25%]">
            <div className="flex gap-[2px] justify-center items-center max-sm:h-[64px]">
              <div className="flex gap-[2px] justify-center items-center">
                <h2 className="font-bold text-[68px] text-[#1b1c1e] max-sm:text-[40px]">
                  {count}
                </h2>
                <h2 className="text-[32px] font-bold text-[#1b1c1e] whitespace-nowrap max-sm:text-[18px]">
                  조 원
                </h2>
              </div>
              <h2 className="font-normal text-[32px] text-[#1b1c1e] max-sm:text-[18px] max-sm:font-bold">
                +
              </h2>
            </div>
            <h2 className="font-normal text-[20px] text-[#58575e] max-sm:text-[14px]">
              누적 거래 금액
            </h2>
          </div>
          {/* 보유 인력 풀 */}
          <div className="flex flex-col w-[25%] justify-center items-center border-r border-[#dedfe7] max-w-[282px] max-sm:px-0 max-sm:border-0 max-sm:w-[131px]">
            <div className="flex gap-[2px] justify-center items-center max-sm:h-[64px]">
              <div className="flex gap-[2px] justify-center items-center">
                <h2 className="font-bold text-[68px] text-[#1b1c1e] max-sm:text-[40px]">
                  {count2}
                </h2>
                <h2 className="text-[32px] text-[#1b1c1e] whitespace-nowrap font-bold max-sm:text-[18px]">
                  만 명
                </h2>
              </div>
              <h2 className="font-normal text-[32px] text-[#1b1c1e] max-sm:text-[18px] max-sm:font-bold">
                +
              </h2>
            </div>
            <h2 className="font-normal text-[20px] text-[#58575e] max-sm:text-[14px]">
              보유 인력 풀
            </h2>
          </div>
          {/* 프로젝트 재의뢰율 */}
          <div className="flex flex-col w-[25%] justify-center items-center border-r border-[#dedfe7] max-w-[282px] max-sm:px-0 max-sm:border-0 max-sm:w-[131px]">
            <div className="flex gap-[2px] justify-center items-center max-sm:h-[64px]">
              <div className="flex gap-[2px] justify-center items-center">
                <h2 className="font-bold text-[68px] text-[#1b1c1e] max-sm:text-[40px]">
                  {count3}
                </h2>
              </div>
              <h2 className="font-normal text-[32px] text-[#1b1c1e] max-sm:text-[18px] max-sm:font-bold">
                %
              </h2>
            </div>
            <h2 className="font-normal text-[20px] text-[#58575e] max-sm:text-[14px]">
              프로젝트 재의뢰율
            </h2>
          </div>
          {/* 프로젝트 수행완료 */}
          <div className="flex flex-col w-[25%] justify-center items-center border-r border-[#dedfe7] max-w-[282px] max-sm:px-0 max-sm:border-0 max-sm:w-[131px]">
            <div className="flex gap-[2px] justify-center items-center max-sm:h-[64px]">
              <div className="flex gap-[2px] justify-center items-center">
                <h2 className="font-bold text-[68px] text-[#1b1c1e] max-sm:text-[40px]">
                  {count4}
                </h2>
                <h2 className="text-[32px] text-[#1b1c1e] whitespace-nowrap font-bold max-sm:text-[18px]">
                  만건
                </h2>
              </div>
              <h2 className="font-normal text-[32px] text-[#1b1c1e] max-sm:text-[18px] max-sm:font-bold">
                +
              </h2>
            </div>
            <h2 className="font-normal text-[20px] text-[#58575e] max-sm:text-[14px]">
              프로젝트 수행완료
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
