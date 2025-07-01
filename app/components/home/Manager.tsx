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

  type StepContent = {
    label: string;
    description: string;
    items: string[];
    image: string;
  };

  const stepContents: Record<number, StepContent> = {
    1: {
      label: '1. 프로젝트 등록',
      description:
        '프로젝트 등록 시 이랜서의 최적화 시스템을 통해\n간편하게 의뢰하고 상담할 수 있어요!',
      items: [
        '이랜서 전담 매니저와 상담을 통해 프리랜서가 이해할 수 있는 용어로 프로젝트 내용을 수정해 드려요.',
        '프로젝트 상담 시 최대한 상세히 정보를 알려주시면 최적의 개발자를 배정해 드려요.',
      ],
      image: '/images/icons/serviceImage1.263b1eac.svg',
    },
    2: {
      label: '2. 견적 상담',
      description:
        '꼼꼼하고 친절한 이랜서 담당 매니저와 함께\n프로젝트 상담 및 견적을 진행해 보세요!',
      items: [
        '진행하고자 하는 프로젝트와 관련된 전반적인 분석을 통해 제안 및 견적을 받아보실 수 있어요.',
        '유사한 경험이 있는 전문가를 매칭해 드려요.',
      ],
      image: '/images/icons/serviceImage2.1e3d979e.svg',
    },
    3: {
      label: '3. 안전 계약',
      description:
        '안전 계약 시스템을 통해 아웃소싱에 최적화된\n계약을 진행해 드려요',
      items: [
        '현재 프로젝트에 적절한 예산범위를 공정하고 합리적인 금액으로 안내해 드립니다.',
        '계약조건, 업무 범위, 일정 등을 사전에 협의한 후 공정한 계약을 도와드립니다.',
      ],
      image: '/images/icons/serviceImage3.0f1ddfe8.svg',
    },
    4: {
      label: '4. 진행 과정',
      description:
        '신뢰할 수 있는 프로젝트 관리 체계로\n차질없는 진행을 약속드려요!',
      items: [
        '프로젝트 진행 과정에 있어 밀착 소통하여 문제가 발생할 경우 즉각적으로 도움을 드려요.',
        '진행중인 프로젝트에 집중하실 수 있게 전반적인 서포트 역할을 약속드려요.',
      ],
      image: '/images/icons/serviceImage4.810cd896.svg',
    },
    5: {
      label: '5. 프로젝트 완료',
      description:
        '검증된 프리랜서 플랫폼 이랜서는 성공적인 프로젝트완료까지 100% 보장합니다.',
      items: [
        '98% 이상의 프로젝트 재의뢰율을 자랑하는 이랜서에서 완료 시점까지 책임지고 보장해 드려요',
      ],
      image: '/images/icons/serviceImage5.796635ae.svg',
    },
  };

  const content = stepContents[activeStep];

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
            <button
              type="button"
              onClick={() =>
                setActiveStep((prev) => (prev === 1 ? 5 : prev - 1))
              }
            >
              <img src="/images/icons/ico-mainServiceLeftArrow.e2080465.svg" />
            </button>
            <button
              type="button"
              onClick={() =>
                setActiveStep((prev) => (prev === 5 ? 1 : prev + 1))
              }
            >
              <img src="/images/icons/ico-mainServiceRightArrow.c7ab1c48.svg" />
            </button>
          </div>
        </div>
        <div className="flex items-start gap-[32px] self-stretch max-sm:flex-col">
          {/* 왼쪽번호 */}
          <div className="w-[274px] flex flex-col items-start max-sm:w-full max-sm:overflow-hidden max-sm:flex-row max-sm:gap-[8px] max-sm:px-[20px] max-sm:max-w-full max-md:w-[274px]">
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
                      className={`break-keep font-bold text-[24px] whitespace-nowrap overflow-hidden text-ellipsis ${
                        activeStep === number
                          ? 'text-[rgb(27,28,30)] max-sm:text-[16px]'
                          : 'text-[rgb(138,138,147)] max-sm:text-[16px]'
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
                  {content.label}
                </div>
                <div className="min-h-[78px] w-full text-[rgb(27,28,30)] text-[26px] font-bold max-sm:min-h-[54px] max-sm:text-[18px]">
                  {content.description.split('\n').map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-start self-stretch max-sm:gap-[8px]">
                {content.items.map((item, index) => (
                  <div key={index} className="w-full flex flex-col gap-[16px]">
                    <div className="flex items-start gap-[2px]">
                      <img src="/images/icons/ico-check-orange.e717a6fc.svg" />
                      <div className="text-[#38383d] text-[16px] font-normal max-sm:text-[14px]">
                        {item}
                      </div>
                    </div>
                    {index !== content.items.length - 1 && activeStep !== 5 && (
                      <div className="h-[1px] bg-[rgb(236,236,241)] self-stretch mb-[16px]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex w-[274px] h-[274px] justify-center items-center max-sm:w-[156px] max-sm:h-full max-sm:shrink-0">
              <img src={content.image} alt={content.label} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
