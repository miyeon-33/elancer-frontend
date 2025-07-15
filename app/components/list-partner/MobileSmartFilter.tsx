'use client';

import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

type Technology = {
  technology_id: number;
  technology_name: string;
  detail_name: string | string[];
  category_id: number;
};

type MobileSmartFilterProps = {
  selectedDetails: string[];
  onSelectDetail: (details: string[]) => void;
  onToggleProficiency: (label: string) => void;
  selectedProficiencies: string[];
  selectedDurations: string[];
  onToggleDuration: (label: string) => void;
  selectedLocation: string | null;
  onSelectedLocation: (location: string) => void;
  onApplyFilters: () => void;
};

export default function MobileSmartFilter({
  selectedDetails,
  onSelectDetail,
  onToggleProficiency,
  selectedProficiencies,
  onToggleDuration,
  selectedDurations,
  selectedLocation,
  onSelectedLocation,
  onApplyFilters,
}: MobileSmartFilterProps) {
  const [isUp, setIsUp] = useState(false);
  const [isToggle, setIsToggle] = useState(true);
  const [isToggle2, setIsToggle2] = useState(true);
  const [isToggle3, setIsToggle3] = useState(true);
  const [isToggle4, setIsToggle4] = useState(true);
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [clickedMenu, setClickedMenu] = useState<number | null>(null);

  const proficiencyLevels = ['초급', '중급', '고급', '무관'];

  const durationFilters = [
    { label: '1달 이하', test: (v: number) => v <= 1 },
    { label: '3개월 이상', test: (v: number) => v >= 3 },
    { label: '6개월 이상', test: (v: number) => v >= 6 },
    { label: '1년 이상', test: (v: number) => v >= 12 },
  ];

  const locations = [
    '서울',
    '부산',
    '대구',
    '인천',
    '광주',
    '대전',
    '울산',
    '세종',
    '강원',
    '경기',
    '경남',
    '경북',
    '전남',
    '전북',
    '충남',
    '충북',
    '제주',
  ];

  const isFilterActive =
    selectedDetails.length > 0 ||
    selectedProficiencies.length > 0 ||
    selectedDurations.length > 0 ||
    selectedLocation !== null;

  // 스크롤 막고 화면 최상단으로 이동
  useEffect(() => {
    if (isUp) {
      document.body.style.overflow = 'hidden';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isUp]);

  const { data: techData } = useQuery<Technology[]>({
    queryKey: ['technologies'],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/technology?category_id=1`
      );
      if (!res.ok) throw new Error('기술 데이터 요청 실패');
      const raw = await res.json();
      return raw;
    },
  });
  useEffect(() => {
    if (techData) {
      const parsed = techData
        .filter((tech) => tech.category_id === 1)
        .map((tech) => {
          let details: string[] = [];

          if (typeof tech.detail_name === 'string') {
            details = tech.detail_name.split(',').map((d) => d.trim());
          } else if (Array.isArray(tech.detail_name)) {
            details = tech.detail_name;
          }

          return {
            ...tech,
            detail_name: details,
          };
        });
      setTechnologies(parsed);
    }
  }, [techData]);

  return (
    <>
      <div className="inline-flex fixed bottom-0 left-1/2 -translate-x-1/2 z-40 justify-center h-[64px] w-full bg-gradient-to-b from-white/0 to-white/60">
        <button
          className="inline-flex h-[48px] items-center gap-[2px] rounded-[24px] bg-[#fff] px-[24px] shadow-md shadow-black/10 border-[#f3f4f6]"
          onClick={() => setIsUp(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-[4px]"
          >
            <path d="M3 6h18"></path>
            <path d="M7 12h10"></path>
            <path d="M10 18h4"></path>
          </svg>
          <span className="text-center text-[14px] font-bold text-[#1b1c1e] -tracking-[0.5px]">
            스마트 필터
          </span>
        </button>
      </div>
      {/* Dim 배경 */}
      {isUp && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsUp(false)}
        />
      )}
      <div
        className={`fixed bottom-0 left-0 w-full h-[80vh] bg-white z-50 transition-transform duration-300 rounded-tl-[16px] rounded-tr-[16px] flex flex-col overflow-y-auto ${
          isUp ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="w-full max-w-full flex flex-col items-stretch p-0 overflow-y-auto">
          <div className="sticky top-0 flex h-[56px] py-[16px] px-[20px] justify-between items-center shrink-0 self-stretch rounded-tl-[16px] rounded-tr-[16px] border-b border-[#ececf1] bg-[#fff] shadow-[0px_2px_8px_rgba(0,0,0,0.4)]">
            <p className="text-[16px] font-bold -tracking-[0.5px] text-[#1b1c1e]">
              스마트 필터
            </p>
            <button onClick={() => setIsUp(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
          <div className="overflow-y-auto">
            {/* 관련기술 */}
            <div className="border-b border-[rgb(229,231,235)]">
              <h3 className="flex">
                <button
                  type="button"
                  className="py-[20px] px-[16px] flex items-center justify-between font-medium w-full"
                  onClick={() => setIsToggle(!isToggle)}
                >
                  <div className="flex items-center gap-[4px]">
                    <img src="images/icons/section-icon.svg" />
                    <p className="text-[14px] font-bold text-[#38383d]">
                      관련기술
                    </p>
                  </div>
                  <img
                    src="/images/icons/drop.svg"
                    className={`transition-all duration-300 ${
                      isToggle ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </h3>
              {isToggle && (
                <div className="text-[14px] px-[24px] overflow-hidden">
                  <div className="pb-[32px]">
                    <div className="flex h-[158px]">
                      <div className="flex flex-col min-w-[90px] mr-[8px] gap-[12px]">
                        {technologies?.map((tech) => (
                          <button
                            key={tech.technology_id}
                            onClick={() =>
                              setClickedMenu(
                                clickedMenu === tech.technology_id
                                  ? null
                                  : tech.technology_id
                              )
                            }
                            className={`text-[14px] font-bold text-left w-full flex items-center gap-[4px] ${
                              clickedMenu === tech.technology_id
                                ? 'text-[#000]'
                                : 'text-[#8a8a93]'
                            }`}
                          >
                            {tech.technology_name}
                            {clickedMenu === tech.technology_id && (
                              <img src="/images/icons/checked.svg" />
                            )}
                          </button>
                        ))}
                      </div>
                      <div className="w-[1px] self-stretch bg-[#ececf1]"></div>
                      {/* 관련기술디테일 목록 */}
                      <div className="pl-[8px] h-[158px] overflow-auto">
                        <ul className="flex items-start gap-[4px] flex-wrap">
                          {technologies
                            ?.filter(
                              (tech) => tech.technology_id === clickedMenu
                            )
                            .flatMap((tech) =>
                              Array.isArray(tech.detail_name)
                                ? tech.detail_name.map((detail, index) => {
                                    const isSelected =
                                      selectedDetails.includes(detail);
                                    const updated = isSelected
                                      ? selectedDetails.filter(
                                          (d) => d !== detail
                                        )
                                      : [...selectedDetails, detail];

                                    return (
                                      <li
                                        key={`${tech.technology_id}-${index}`}
                                      >
                                        <button
                                          onClick={() => {
                                            onSelectDetail(updated);
                                          }}
                                          className={`flex h-[32px] px-[8px] justify-center items-center rounded-[16px]
                                              ${
                                                isSelected
                                                  ? 'bg-[#ff6948] border-[#ff6948]'
                                                  : 'bg-[#fff] border border-[#ececf1]'
                                              }`}
                                        >
                                          <span
                                            className={`text-center text-[13px] font-normal ${
                                              isSelected
                                                ? 'text-[#fff]'
                                                : 'text-[#38383d]'
                                            }`}
                                          >
                                            {detail}
                                          </span>
                                        </button>
                                      </li>
                                    );
                                  })
                                : []
                            )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* 숙련도 */}
            <div className="border-b border-[rgb(229,231,235)]">
              <h3 className="flex">
                <button
                  type="button"
                  className="py-[20px] px-[16px] flex items-center justify-between font-medium w-full"
                  onClick={() => setIsToggle2(!isToggle2)}
                >
                  <div className="flex items-center gap-[4px]">
                    <img src="images/icons/ico-proficiency.7abff07a.svg" />
                    <p className="text-[15px] font-bold text-[#38383d]">
                      숙련도
                    </p>
                  </div>
                  <img
                    src="/images/icons/drop.svg"
                    className={`transition-all duration-300 ${
                      isToggle2 ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </h3>
              {isToggle2 && (
                <div className="px-[24px] overflow-hidden text-[14px]">
                  <div className="pb-[32px] gap-[6px] flex flex-col">
                    {proficiencyLevels.map((label) => (
                      <label
                        key={label}
                        className="flex items-center gap-[6px]"
                      >
                        <div
                          onClick={() => onToggleProficiency(label)}
                          className={`border rounded-[4px] w-[20px] h-[20px] cursor-pointer ${
                            selectedProficiencies.includes(label)
                              ? 'bg-black'
                              : 'border-[rgb(181,180,187)]'
                          }`}
                        >
                          {selectedProficiencies.includes(label) && (
                            <img src="images/icons/checked2.svg" alt="선택됨" />
                          )}
                        </div>
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* 프로젝트 참여 기간 */}
            <div className="border-b border-[rgb(229,231,235)]">
              <h3 className="flex">
                <button
                  type="button"
                  className="py-[20px] px-[16px] flex items-center justify-between font-medium w-full"
                  onClick={() => setIsToggle3(!isToggle3)}
                >
                  <div className="flex items-center gap-[4px]">
                    <img src="images/icons/ico-project-period.da449e54.svg" />
                    <p className="text-[15px] font-bold text-[#38383d]">
                      프로젝트 참여 기간
                    </p>
                  </div>
                  <img
                    src="/images/icons/drop.svg"
                    className={`transition-all duration-300 ${
                      isToggle3 ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </h3>
              {isToggle3 && (
                <div className="px-[24px] overflow-hidden text-[14px]">
                  <div className="pb-[32px] gap-[6px] flex flex-col">
                    {durationFilters.map(({ label }) => (
                      <label
                        key={label}
                        className="flex items-center gap-[6px]"
                      >
                        <div
                          onClick={() => onToggleDuration(label)}
                          className={`border rounded-[4px] w-[20px] h-[20px] cursor-pointer ${
                            selectedDurations.includes(label)
                              ? 'bg-[rgb(0,0,0)]'
                              : 'border-[rgb(181,180,187)]'
                          }`}
                        >
                          {selectedDurations.includes(label) && (
                            <img src="images/icons/checked2.svg" />
                          )}
                        </div>
                        <span className="text-[14px] font-normal">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* 희망 근무 지역 */}
            <div>
              <h3 className="flex">
                <button
                  type="button"
                  className="py-[20px] px-[16px] flex items-center justify-between font-medium w-full"
                  onClick={() => setIsToggle4(!isToggle4)}
                >
                  <div className="flex items-center gap-[4px]">
                    <img src="images/icons/ico-work-area.2de46534.svg" />
                    <p className="text-[15px] font-bold text-[#38383d]">
                      희망 근무 지역
                    </p>
                  </div>
                  <img
                    src="/images/icons/drop.svg"
                    className={`transition-all duration-300 ${
                      isToggle4 ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </h3>
              {isToggle4 && (
                <div className="text-[14px] px-[24px] overflow-hidden">
                  <div className="pb-[32px]">
                    <div className="flex flex-col justify-center gap-[12px]">
                      <div className="h-[212px] w-[107px] overflow-y-auto ">
                        <div className="flex flex-col gap-[16px]">
                          {locations.map((loc) => {
                            const isSelected = selectedLocation === loc;
                            return (
                              <button
                                key={loc}
                                type="button"
                                onClick={() => onSelectedLocation(loc)}
                                className={`text-[14px] font-bold text-left flex items-center gap-[4px] ${
                                  isSelected
                                    ? 'text-[#000]'
                                    : 'text-[rgb(138,138,147)]'
                                }`}
                              >
                                {loc}
                                {isSelected && (
                                  <img src="images/icons/checked.svg" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="sticky bottom-0 border-t border-[#f3f4f6] mt-[16px] flex w-full py-[16px] px-[20px] flex-col items-center gap-[12px] rounded-tl-[24px] rounded-tr-[24px] bg-[#fff] shadow-[0px_-4px_8px_0px_rgba(0,0,0,0.6)]">
          <div className="flex justify-center items-start gap-[6px] self-stretch">
            <button
              className="flex w-[165px] h-[44px] py-[16px] px-[24px] justify-center items-center gap-[6px] rounded-[6px] border-[#ececf1] bg-[#f3f4f6] text-center font-bold text-[16px] text-[#a6a6ac]"
              onClick={() => setIsUp(false)}
            >
              취소
            </button>
            <button
              onClick={() => {
                onApplyFilters();
              }}
              className={`flex w-[165px] h-[44px] py-[16px] px-[24px] justify-center items-center gap-[6px] rounded-[6px] border-[#ececf1]  text-center font-bold text-[16px] text-[#fff] ${
                isFilterActive ? 'bg-[#fa751e]' : 'bg-[#c9c8cd]'
              }`}
            >
              필터 적용
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
