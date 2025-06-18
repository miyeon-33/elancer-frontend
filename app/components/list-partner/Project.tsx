'use client';

import { useEffect, useState } from 'react';

type Technology = {
  technology_id: number;
  technology_name: string;
  detail_name: string;
};

type Project = {
  project_id: number;
  commenttitle: string;
  proficiency: string;
  technology_id: number;
  work_type: string;
  project_duration: string;
  location: string;
  recruitment_status: string;
  deadline: string;
  likes: number;
  monthly_price: string;
  current_members: number;
  registration_date: string;
  expected_start_date: string;
};

export default function Project({ data }: { data: Promise<Project[]> }) {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [clickedMenu, setClickedMenu] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen3, setIsOpen3] = useState(true);
  const [isOpen4, setIsOpen4] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  const [isChecked7, setIsChecked7] = useState(false);
  const [isChecked8, setIsChecked8] = useState(false);
  const [isChecked9, setIsChecked9] = useState(false);
  const [isChecked10, setIsChecked10] = useState(false);

  const handleReset = () => {
    setClickedMenu(null);
    setIsOpen(true);
    setIsOpen2(true);
    setIsOpen3(true);
    setIsOpen4(true);
    setIsChecked(false);
    setIsChecked2(false);
    setIsChecked3(false);
    setIsChecked4(false);
    setIsChecked5(false);
    setIsChecked6(false);
    setIsChecked7(false);
    setIsChecked8(false);
    setIsChecked9(false);
    setIsChecked10(false);
  };

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

  return (
    <div className="max-w-[1200px] mx-auto max-md:px-[20px] max-sm:p-0">
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
                                    <li key={index}>
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
              {/* 근무 형태 */}
              <div className="border-b border-[rgb(229,231,235)]">
                <h3 className="flex">
                  <button
                    type="button"
                    className="py-[20px] px-[16px] flex items-center justify-between font-medium w-full"
                    onClick={() => setIsOpen2(!isOpen2)}
                  >
                    <div className="flex items-center gap-[4px]">
                      <img src="images/icons/ico-work-type.fba95376.svg" />
                      <p className="text-[15px] font-bold text-[#38383d]">
                        근무 형태
                      </p>
                    </div>
                    <img
                      src="/images/icons/drop.svg"
                      className={`transition-all duration-300 ${
                        isOpen2 ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                {isOpen2 && (
                  <div className="px-[24px] overflow-hidden text-[14px]">
                    <div className="pb-[32px] gap-[6px] flex flex-col">
                      <label className="flex items-center gap-[6px]">
                        <button
                          type="button"
                          onClick={() => setIsChecked(!isChecked)}
                          className={`border rounded-[4px] w-[20px] h-[20px] ${
                            isChecked
                              ? 'bg-[rgb(0,0,0)]'
                              : 'border-[rgb(181,180,187)]'
                          }`}
                        >
                          {isChecked && <img src="images/icons/checked2.svg" />}
                        </button>
                        <button className="text-[14px] font-normal">
                          상주
                        </button>
                      </label>
                      <label className="flex items-center gap-[6px]">
                        <button
                          type="button"
                          onClick={() => setIsChecked2(!isChecked2)}
                          className={`border rounded-[4px] w-[20px] h-[20px] ${
                            isChecked2
                              ? 'bg-[rgb(0,0,0)]'
                              : 'border-[rgb(181,180,187)] '
                          }`}
                        >
                          {isChecked2 && (
                            <img src="images/icons/checked2.svg" />
                          )}
                        </button>
                        <button className="text-[14px] font-normal">
                          반상주
                        </button>
                      </label>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
