'use client';

import { useEffect, useState } from 'react';

type Technology = {
  technology_id: number;
  technology_name: string;
  detail_name: string[];
};

type Category = {
  category_id: number;
  category_name: string;
};

type Project = {
  project_id: number;
  title: string;
  proficiency: string;
  project_duration: string;
  location: string;
  recruitment_status: string;
  deadline: string;
  likes: number;
  monthly_price: string;
  current_members: number;
  technology_name: string;
  category_name: string;
};

export default function Project({ data }: { data: Promise<Project[]> }) {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [clickedMenu, setClickedMenu] = useState<number | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen3, setIsOpen3] = useState(true);
  const [isOpen4, setIsOpen4] = useState(true);
  const [isOpen5, setIsOpen5] = useState(true);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  const [isChecked7, setIsChecked7] = useState(false);
  const [isChecked8, setIsChecked8] = useState(false);
  const [isChecked9, setIsChecked9] = useState(false);
  const [isChecked10, setIsChecked10] = useState(false);
  const [selectedSort, setSelectedSort] = useState('latest');
  const [isActive, setIsActive] = useState(false);
  const [visibleCount, setVisibleCount] = useState(10);

  const handleReset = () => {
    setClickedMenu(null);
    setIsOpen(true);
    setIsOpen3(true);
    setIsOpen4(true);
    setIsChecked3(false);
    setIsChecked4(false);
    setIsChecked5(false);
    setIsChecked6(false);
    setIsChecked7(false);
    setIsChecked8(false);
    setIsChecked9(false);
    setIsChecked10(false);
  };

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3001/technology');
        const data = await res.json();

        const formattedData = data.map((tech: any) => ({
          ...tech,
          detail_name:
            typeof tech.detail_name === 'string'
              ? tech.detail_name.split(',')
              : [],
        }));
        setTechnologies(formattedData);
      } catch (error) {
        console.error('데이터 불러오기 실패:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3001/project');
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error('데이터 불러오기 실패:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('http://localhost:3001/category');
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error('카테고리 불러오기 실패:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto max-md:px-[20px] max-sm:p-0 pb-[40px]">
      <div className="p-[24px] bg-[rgb(42,43,46)] rounded-[16px] max-sm:p-[16px] max-sm:rounded-none">
        {/* 검색창 */}
        <div className="w-full relative">
          <div className="absolute left-[16px] top-1/2 -translate-y-1/2 h-[20px]">
            <img src="/images/icons/inputSearch.svg" />
          </div>
          <input
            placeholder="프로젝트 키워드로 검색해 보세요."
            className="text-[16px] font-normal text-[#f3f4f6] pr-[40px] pl-[48px] py-[24px] border border-[#58575e] rounded-[6px] w-full h-[56px] flex hover:border-[#ff5400] max-sm:text-[14px]"
          />
        </div>
        <div className="flex gap-[80px] my-[56px]">
          {/* 스마트 필터 */}
          <div className="w-[280px]">
            <div className="flex items-center justify-between">
              <p className="text-[#f3f4f6] text-[20px] font-bold -tracking-[0.5px]">
                스마트 필터
              </p>
              <button
                type="button"
                className="flex justify-end items-center gap-[1px] text-[#b5b4bb] text-[12px] font-normal"
                onClick={handleReset}
              >
                <img src="/images/icons/reset.svg" />
                <span className="text-[#f3f4f6] text-[12px] font-medium">
                  초기화
                </span>
              </button>
            </div>
            <div className="mt-[24px] rounded-[16px] bg-[#fff] border-[#f3f4f6]">
              {/* 관련기술 */}
              <div className="border-b border-[rgb(229,231,235)]">
                <h3 className="flex">
                  <button
                    type="button"
                    className="py-[20px] px-[16px] flex items-center justify-between font-medium w-full"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <div className="flex items-center gap-[4px]">
                      <img src="images/icons/section-icon.svg" />
                      <p className="text-[15px] font-bold text-[#38383d]">
                        관련기술
                      </p>
                    </div>
                    <img
                      src="/images/icons/drop.svg"
                      className={`transition-all duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                {/* 관련기술목록 */}
                {isOpen && (
                  <div className="text-[14px] px-[24px] overflow-hidden">
                    <div className="pb-[32px]">
                      <div className="flex h-[158px]">
                        <div className="flex flex-col min-w-[90px] mr-[8px] gap-[12px]">
                          {technologies.map((tech) => (
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
                              .filter(
                                (tech) => tech.technology_id === clickedMenu
                              )
                              .map((tech) =>
                                tech.detail_name.map(
                                  (detail: string, index: number) => (
                                    <li
                                      key={`${tech.technology_id}-${detail}-${index}`}
                                    >
                                      <label
                                        className="bg-[#fff] border border-[#ececf1]
                                      flex h-[32px] px-[8px] justify-center items-center rounded-[16px]"
                                      >
                                        <span className="text-[#38383d] text-center text-[13px] font-normal">
                                          {detail}
                                        </span>
                                      </label>
                                    </li>
                                  )
                                )
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
                    onClick={() => setIsOpen3(!isOpen3)}
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
                        isOpen3 ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                {isOpen3 && (
                  <div className="px-[24px] overflow-hidden text-[14px]">
                    <div className="pb-[32px] gap-[6px] flex flex-col">
                      <label className="flex items-center gap-[6px]">
                        <button
                          type="button"
                          onClick={() => setIsChecked3(!isChecked3)}
                          className={`border rounded-[4px] w-[20px] h-[20px] ${
                            isChecked3
                              ? 'bg-[rgb(0,0,0)]'
                              : 'border-[rgb(181,180,187)]'
                          }`}
                        >
                          {isChecked3 && (
                            <img src="images/icons/checked2.svg" />
                          )}
                        </button>
                        <button className="text-[14px] font-normal">
                          초급
                        </button>
                      </label>
                      <label className="flex items-center gap-[6px]">
                        <button
                          type="button"
                          onClick={() => setIsChecked4(!isChecked4)}
                          className={`border rounded-[4px] w-[20px] h-[20px] ${
                            isChecked4
                              ? 'bg-[rgb(0,0,0)]'
                              : 'border-[rgb(181,180,187)] '
                          }`}
                        >
                          {isChecked4 && (
                            <img src="images/icons/checked2.svg" />
                          )}
                        </button>
                        <button className="text-[14px] font-normal">
                          중급
                        </button>
                      </label>
                      <label className="flex items-center gap-[6px]">
                        <button
                          type="button"
                          onClick={() => setIsChecked5(!isChecked5)}
                          className={`border rounded-[4px] w-[20px] h-[20px] ${
                            isChecked5
                              ? 'bg-[rgb(0,0,0)]'
                              : 'border-[rgb(181,180,187)] '
                          }`}
                        >
                          {isChecked5 && (
                            <img src="images/icons/checked2.svg" />
                          )}
                        </button>
                        <button className="text-[14px] font-normal">
                          고급
                        </button>
                      </label>
                      <label className="flex items-center gap-[6px]">
                        <button
                          type="button"
                          onClick={() => setIsChecked6(!isChecked6)}
                          className={`border rounded-[4px] w-[20px] h-[20px] ${
                            isChecked6
                              ? 'bg-[rgb(0,0,0)]'
                              : 'border-[rgb(181,180,187)] '
                          }`}
                        >
                          {isChecked6 && (
                            <img src="images/icons/checked2.svg" />
                          )}
                        </button>
                        <button className="text-[14px] font-normal">
                          무관
                        </button>
                      </label>
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
                    onClick={() => setIsOpen4(!isOpen4)}
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
                        isOpen4 ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                {isOpen4 && (
                  <div className="px-[24px] overflow-hidden text-[14px]">
                    <div className="pb-[32px] gap-[6px] flex flex-col">
                      <label className="flex items-center gap-[6px]">
                        <button
                          type="button"
                          onClick={() => setIsChecked7(!isChecked7)}
                          className={`border rounded-[4px] w-[20px] h-[20px] ${
                            isChecked7
                              ? 'bg-[rgb(0,0,0)]'
                              : 'border-[rgb(181,180,187)]'
                          }`}
                        >
                          {isChecked7 && (
                            <img src="images/icons/checked2.svg" />
                          )}
                        </button>
                        <button className="text-[14px] font-normal">
                          1달 이하
                        </button>
                      </label>
                      <label className="flex items-center gap-[6px]">
                        <button
                          type="button"
                          onClick={() => setIsChecked8(!isChecked8)}
                          className={`border rounded-[4px] w-[20px] h-[20px] ${
                            isChecked8
                              ? 'bg-[rgb(0,0,0)]'
                              : 'border-[rgb(181,180,187)] '
                          }`}
                        >
                          {isChecked8 && (
                            <img src="images/icons/checked2.svg" />
                          )}
                        </button>
                        <button className="text-[14px] font-normal">
                          3개월 이상
                        </button>
                      </label>
                      <label className="flex items-center gap-[6px]">
                        <button
                          type="button"
                          onClick={() => setIsChecked9(!isChecked9)}
                          className={`border rounded-[4px] w-[20px] h-[20px] ${
                            isChecked9
                              ? 'bg-[rgb(0,0,0)]'
                              : 'border-[rgb(181,180,187)] '
                          }`}
                        >
                          {isChecked9 && (
                            <img src="images/icons/checked2.svg" />
                          )}
                        </button>
                        <button className="text-[14px] font-normal">
                          6개월 이상
                        </button>
                      </label>
                      <label className="flex items-center gap-[6px]">
                        <button
                          type="button"
                          onClick={() => setIsChecked10(!isChecked10)}
                          className={`border rounded-[4px] w-[20px] h-[20px] ${
                            isChecked10
                              ? 'bg-[rgb(0,0,0)]'
                              : 'border-[rgb(181,180,187)] '
                          }`}
                        >
                          {isChecked10 && (
                            <img src="images/icons/checked2.svg" />
                          )}
                        </button>
                        <button className="text-[14px] font-normal">
                          1년 이상
                        </button>
                      </label>
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
                    onClick={() => setIsOpen5(!isOpen5)}
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
                        isOpen5 ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
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
                                onClick={() => setSelectedLocation(loc)}
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
              </div>
            </div>
          </div>
          {/* 모든 프로젝트 */}
          <div className="flex flex-1 flex-col items-start gap-[16px]">
            <div className="flex w-full flex-col items-start gap-[24px]">
              <h2 className="flex items-start">
                <span className="text-[18px] font-bold text-[#ff6948]">
                  {projects.length}
                </span>
                <span className="text-[18px] font-bold text-[#fff]">
                  개의 프로젝트
                </span>
              </h2>
              <div className="flex w-full justify-between">
                <div className="border border-[#38383d] bg-[#2a2b2e] flex p-[4px] items-center rounded-[6px] gap-[4px]">
                  <button
                    type="button"
                    onClick={() => setSelectedSort('latest')}
                    className={`flex h-[32px] px-[12px] justify-center items-center gap-[1px] rounded-[4px] ${
                      selectedSort === 'latest' ? 'bg-[#38383d] ' : ''
                    }`}
                  >
                    <p
                      className={`text-[13px] ${
                        selectedSort === 'latest'
                          ? 'text-[#fff]'
                          : 'text-[#c9c8cd]'
                      }`}
                    >
                      최신 등록 순
                    </p>
                  </button>
                  <div className="bg-[#38383d] w-[1px] h-[30px]"></div>
                  <button
                    type="button"
                    onClick={() => setSelectedSort('startDate')}
                    className={`flex h-[32px] px-[12px] justify-center items-center gap-[1px] rounded-[4px] ${
                      selectedSort === 'startDate' ? 'bg-[#38383d]' : ''
                    }`}
                  >
                    <p
                      className={`text-[13px] ${
                        selectedSort === 'startDate'
                          ? 'text-[#fff]'
                          : 'text-[#c9c8cd]'
                      }`}
                    >
                      시작 예정일 순
                    </p>
                  </button>
                  <div className="bg-[#38383d] w-[1px] h-[30px]"></div>
                  <button
                    type="button"
                    onClick={() => setSelectedSort('deadline')}
                    className={`flex h-[32px] px-[12px] justify-center items-center gap-[1px] rounded-[4px] ${
                      selectedSort === 'deadline' ? 'bg-[#38383d]' : ''
                    }`}
                  >
                    <p
                      className={`text-[13px] ${
                        selectedSort === 'deadline'
                          ? 'text-[#fff]'
                          : 'text-[#c9c8cd]'
                      }`}
                    >
                      마감 임박 순
                    </p>
                  </button>
                </div>
                <div
                  className="flex items-center py-[6px] px-[12px] gap-[6px] cursor-pointer"
                  onClick={() => setIsActive(!isActive)}
                >
                  <img
                    src={
                      isActive
                        ? '/images/icons/check-broken-active.88547d26.svg'
                        : 'images/icons/check-broken.7cfea161.svg'
                    }
                  />
                  <p
                    className={`text-[13px] font-medium ${
                      isActive ? 'text-[#ff6948]' : 'text-[#c9c8cd]'
                    }`}
                  >
                    모집중인 프로젝트만 보기
                  </p>
                </div>
              </div>
            </div>
            {/* 데이터 렌더링 */}
            <div className="flex flex-col items-center w-full">
              {projects.slice(0, visibleCount).map((project) => (
                <div
                  key={project.project_id}
                  className="flex flex-col items-center gap-[16px] self-stretch mb-[34px]"
                >
                  <div className="flex bg-[#fff] rounded-[12px] p-[24px] gap-[40px] border-2 border-[#ececf1] w-full hover:border-[#ff9148]">
                    <div className="flex flex-col gap-[16px] w-full">
                      <div className="flex items-center h-[22px] gap-[8px]">
                        <div className="flex items-center gap-[2px]">
                          <img src="images/icons/adress-icon.27b99aa2(1).svg" />
                          <p className="text-[#38383d] text-[13px] font-semibold">
                            {project.location}
                          </p>
                        </div>
                        <div className="w-[1px] h-[16px] bg-[#ececf1]"></div>
                        <div className="flex items-center">
                          <p className="text-[#007cfb] text-[14px] font-bold">
                            {project.current_members}
                          </p>
                          <p className="text-[#777a83] text-[13px] font-normal">
                            명 참여중
                          </p>
                        </div>
                      </div>
                      <div className="h-auto text-[22px] font-bold overflow-hidden text-ellipsis line-clamp-2 break-words text-[#000] -tracking-[0.75px]">
                        {project.title}
                      </div>
                      <div className="flex gap-[8px]">
                        <p className="h-[22px] text-[#ff6948] font-semibold text-[14px] whitespace-nowrap">
                          {project.category_name}
                        </p>
                        <div className="flex gap-[2px] max-h-[46px] flex-wrap">
                          <span className="h-[22px] rounded-[16px] py-[2px] px-[8px] bg-[#fbf3f1] text-[#ff6948] text-[12px] font-medium">
                            JAVA
                          </span>
                          <span className="h-[22px] rounded-[16px] py-[2px] px-[8px] bg-[#fbf3f1] text-[#ff6948] text-[12px] font-medium">
                            API
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[16px] min-w-[147px]">
                      <div className="flex justify-end h-[24px] gap-[2px]">
                        <img src="/images/icons/heart-empty.5ce7692c(1).svg" />
                        <p className="text-[#1b1c1e] text-[16px] font-semibold">
                          {project.likes}
                        </p>
                      </div>
                      <div className="flex flex-col gap-[2px]">
                        <div>
                          <div className="flex justify-between">
                            <p className="text-[13px] font-normal">숙련도</p>
                            <p className="text-[13px] font-normal text-[#1b1c1e]">
                              {project.proficiency}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <p className="text-[13px] font-normal">예상기간</p>
                            <p className="text-[13px] font-normal text-[#1b1c1e]">
                              {project.project_duration}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <p className="text-[13px] font-normal">월 단가</p>
                          <p className="text-[13px] font-normal text-[#1b1c1e]">
                            {project.monthly_price}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end h-[28px] gap-[2px]">
                        <div className="rounded-[2px] border border-[#ececf1] py-[4px] px-[12px] bg-[#f3f4f6] text-[#1b1c1e] text-[13px] font-semibold whitespace-nowrap">
                          {project.recruitment_status}
                        </div>
                        <div className="rounded-[2px] py-[4px] px-[12px] bg-[#f44343] text-[#fff] text-[13px] font-semibold whitespace-nowrap">
                          {project.deadline}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {visibleCount < projects.length && (
                <button
                  onClick={() => setVisibleCount((prev) => prev + 10)}
                  className="flex items-center gap-[2px] text-[#f3f4f6] text-[16px] font-medium"
                >
                  더보기
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
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
