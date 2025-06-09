'use client';

import { useState } from 'react';

export default function Manager() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { number: 1, title: '프로젝트 등록', step: 'STEP 1' },
    { number: 2, title: '견적 상담', step: 'STEP 2' },
    { number: 3, title: '안전 계약', step: 'STEP 3' },
    { number: 4, title: '진행 과정', step: 'STEP 4' },
    { number: 5, title: '프로젝트 완료', step: 'STEP 5' },
  ];

  return (
    <div className="max-md:px-[20px] max-sm:px-[20px] mx-auto max-w-[1200px]">
      <div className="flex flex-col items-start gap-[56px] max-sm:w-full max-sm:gap-[32px] max-sm:mb-[68px]">
        <div className="flex justify-between items-end self-stretch">
          <div className="flex w-[564px] flex-col items-start gap-[16px] max-sm:w-full max-sm:gap-[6px] max-sm:mr-[20px]">
            <h2 className="text-[rgb(27,28,30)] text-[32px] font-bold max-sm:text-[20px]">
              프로젝트 A to Z 모든 과정에서
              <br />
              1:1 전담 매니저가 고객님과 밀착 소통하는 법!
            </h2>
            <p className="text-[rgb(88,87,94)] text-[20px] font-normal max-sm:text-[14px]">
              이랜서의 프로젝트 진행 과정을 5단계로 살펴 보세요!
            </p>
          </div>
          <div className="flex items-center gap-[8px] max-sm:hidden">
            <button type="button">
              <img src="/images/icons/ico-mainServiceLeftArrow.e2080465.svg" />
            </button>
            <button type="button">
              <img src="/images/icons/ico-mainServiceRightArrow.c7ab1c48.svg" />
            </button>
          </div>
        </div>
        <div className="flex items-start gap-[32px] self-stretch max-sm:flex-col">
          {/* 왼쪽번호 */}
          <div className="w-[274px] flex flex-col items-start max-sm:w-full max-sm:overflow-hidden max-sm:flex-row max-sm:gap-[8px] max-sm:px-[20px] max-sm:max-w-full">
            {steps.map(({ number, title, step }) => (
              <div
                key={number}
                onClick={() => setActiveStep(number)}
                className="cursor-pointer w-full"
              >
                <h3 className="flex items-center gap-[8px] bg-none text-left max-sm:h-[96px] max-sm:flex-col max-sm:items-start">
                  <div className="flex justify-center items-center gap-[8px]">
                    <div className="w-[40px] h-[40px] flex gap-[8px]">
                      <div className="w-[38px] h-[38px] relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="38"
                          height="38"
                          viewBox="0 0 38 38"
                          fill="none"
                        >
                          <path
                            d="M1.61034 14.9879C5.13157 4.35091 13.4584 0.780486 17.0821 0.278119C38.0273 -2.62555 42.2214 17.9235 34.1906 28.5448C27.2655 37.7037 15.0694 39.4101 7.75023 37.0333C1.30355 34.9398 -2.27677 26.7303 1.61034 14.9879Z"
                            fill={activeStep === number ? '#FF6948' : '#ECECF1'}
                          ></path>
                        </svg>
                        <div
                          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-[32px] h-[32px] flex-col justify-center items-center gap-[8px] ${
                            activeStep === number
                              ? 'text-[rgb(243,244,246)] text-[14px] font-bold'
                              : 'text-[rgb(119,122,131)] text-[14px] font-bold'
                          }`}
                        >
                          {number}
                        </div>
                      </div>
                      {number !== 5 && (
                        <div className="flex justify-center items-center gap-[8px]">
                          <div className="w-[56px] h-[1px] bg-[rgb(222,223,231)] hidden max-sm:block"></div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex py-[6px] flex-col justify-center items-start gap-[1px]">
                    <p
                      className={`${
                        activeStep === number
                          ? 'text-[rgb(27,28,30)] text-[13px] font-normal max-sm:text-[12px]'
                          : 'text-[rgb(138,138,147)] text-[13px] font-normal max-sm:text-[12px]'
                      }`}
                    >
                      {step}
                    </p>
                    <p
                      className={`break-keep ${
                        activeStep === number
                          ? 'text-[rgb(27,28,30)] text-[24px] font-bold max-sm:text-[16px]'
                          : 'text-[rgb(138,138,147)] text-[24px] font-bold max-sm:text-[16px]'
                      }`}
                    >
                      {title}
                    </p>
                  </div>
                </h3>
                {number !== steps.length && (
                  <div className="flex w-[40px] justify-center items-center gap-[8px]">
                    <div className="w-[1px] h-[24px] bg-[rgb(222,223,231)] max-sm:hidden"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* 오른쪽 박스 */}
          <div className="w-[894px] flex pt-[56px] px-[40px] pb-[88px] items-start gap-[40px] rounded-[24px] bg-[rgb(255,255,255)] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.06)] max-sm:h-auto max-sm:gap-[20px] max-sm:py-[32px] max-sm:px-[20px] max-sm:items-center max-sm:flex-col max-sm:w-full">
            <div className="w-[500px] flex h-auto flex-col items-start gap-[32px] max-sm:w-full max-sm:gap-[20px]">
              <div className="flex flex-col items-start gap-[16px] self-stretch">
                <div className="flex py-[3px] pr-[12px] pl-[8px] justify-center items-center gap-[8px] rounded-[4px] bg-[rgb(255,227,221)] text-[14px] font-semibold text-[rgb(255,105,72)] max-sm:py-[2px] max-sm:pr-[8px] max-sm:pl-[6px] max-sm:text-[13px]">
                  1. 프로젝트 등록
                </div>
                <div className="min-h-[78px] w-full text-[rgb(27,28,30)] text-[26px] font-bold max-sm:min-h-[54px] max-sm:text-[18px]">
                  프로젝트 등록 시 이랜서의 최적화 시스템을 통해
                  <br />
                  간편하게 의뢰하고 상담할 수 있어요!
                </div>
              </div>
              <div className="flex flex-col items-start gap-[16px] self-stretch max-sm:gap-[8px]">
                <div className="flex items-start gap-[2px]">
                  <img src="/images/icons/ico-check-orange.e717a6fc.svg" />
                  <div className="text-[rgb(56,56,61)] text-[16px] font-normal max-sm:text-[14px]">
                    이랜서 전담 매니저와 상담을 통해 프리랜서가 이해할 수 있는
                    용어로
                    <br className="max-sm:hidden" />
                    프로젝트 내용을 수정해 드려요.
                  </div>
                </div>
                <div className="h-[1px] bg-[rgb(236,236,241)] self-stretch"></div>
                <div className="flex items-start gap-[2px]">
                  <img src="/images/icons/ico-check-orange.e717a6fc.svg" />
                  <div className="text-[rgb(56,56,61)] text-[16px] font-normal max-sm:text-[14px]">
                    프로젝트 상담 시 최대한 상세히 정보를 알려주시면 최적의
                    개발자를
                    <br className="max-sm:hidden" />
                    배정해 드려요.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[274px] h-[274px] justify-center items-center max-sm:w-[156px] max-sm:h-full max-sm:shrink-0">
              <img src="/images/icons/serviceImage1.263b1eac.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
