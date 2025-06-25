import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

type Technology = {
  technology_id: number;
  technology_name: string;
  detail_name: string[];
};

type SmartFilterProps = {
  onSelectDetail: (detail: string[]) => void;
};

export default function SmartFilter({ onSelectDetail }: SmartFilterProps) {
  const [clickedMenu, setClickedMenu] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen3, setIsOpen3] = useState(true);
  const [isOpen4, setIsOpen4] = useState(true);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  const [isChecked7, setIsChecked7] = useState(false);
  const [isChecked8, setIsChecked8] = useState(false);
  const [isChecked9, setIsChecked9] = useState(false);
  const [isChecked10, setIsChecked10] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [isOpen2, setIsOpen2] = useState(true);
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedDetails, setSelectedDetails] = useState<string[]>([]);

  const handleDetailClick = (detail: string) => {
    const updated = selectedDetails.includes(detail)
      ? selectedDetails.filter((d) => d !== detail) // 이미 있으면 제거
      : [...selectedDetails, detail]; // 없으면 추가

    setSelectedDetails(updated);
    onSelectDetail(updated); // ✅ 배열 전체를 부모로 전달
  };

  // 지역
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

  // 초기화버튼
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
    setSelectedLocation(null);
  };

  // 숙련도 추출
  const selectedProficiencies: string[] = [];
  if (isChecked3) selectedProficiencies.push('초급');
  if (isChecked4) selectedProficiencies.push('중급');
  if (isChecked5) selectedProficiencies.push('고급');
  if (isChecked6) selectedProficiencies.push('무관');

  // 기술데이터 가져오기
  const {
    data: techData,
    isLoading: isTechLoading,
    isError: isTechError,
  } = useQuery<Technology[]>({
    queryKey: ['technologies'],
    queryFn: async () => {
      const res = await fetch('http://localhost:3001/technology');
      if (!res.ok) throw new Error('기술 데이터 요청 실패');
      const raw = await res.json();
      return raw;
    },
  });

  useEffect(() => {
    if (techData) {
      const parsed = techData.map((tech: any) => ({
        ...tech,
        detail_name:
          typeof tech.detail_name === 'string'
            ? tech.detail_name.split(',')
            : [],
      }));
      setTechnologies(parsed);
    }
  }, [techData]);

  return (
    <div>
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
                      {techData?.map((tech) => (
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
                          ?.filter((tech) => tech.technology_id === clickedMenu)
                          .flatMap((tech) =>
                            tech.detail_name.map((detail, index) => (
                              <li
                                key={`${tech.technology_id}-${index}`}
                                onClick={() => handleDetailClick(detail)}
                              >
                                <button
                                  className={`flex h-[32px] px-[8px] justify-center items-center rounded-[16px]
                                ${
                                  selectedDetails.includes(detail)
                                    ? 'bg-[#ff6948] border-[#ff6948]'
                                    : 'bg-[#fff] border-[#ececf1] border'
                                }`}
                                >
                                  <span
                                    className={`text-center text-[13px] font-normal ${
                                      selectedDetails.includes(detail)
                                        ? 'text-[#fff]'
                                        : 'text-[#38383d]'
                                    }`}
                                  >
                                    {detail}
                                  </span>
                                </button>
                              </li>
                            ))
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
                  <p className="text-[15px] font-bold text-[#38383d]">숙련도</p>
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
                        isChecked3 ? 'bg-black' : 'border-[rgb(181,180,187)]'
                      }`}
                    >
                      {isChecked3 && (
                        <img src="images/icons/checked2.svg" alt="선택됨" />
                      )}
                    </button>
                    <button className="text-[14px] font-normal">초급</button>
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
                      {isChecked4 && <img src="images/icons/checked2.svg" />}
                    </button>
                    <button className="text-[14px] font-normal">중급</button>
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
                      {isChecked5 && <img src="images/icons/checked2.svg" />}
                    </button>
                    <button className="text-[14px] font-normal">고급</button>
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
                      {isChecked6 && <img src="images/icons/checked2.svg" />}
                    </button>
                    <button className="text-[14px] font-normal">무관</button>
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
                      {isChecked7 && <img src="images/icons/checked2.svg" />}
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
                      {isChecked8 && <img src="images/icons/checked2.svg" />}
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
                      {isChecked9 && <img src="images/icons/checked2.svg" />}
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
                      {isChecked10 && <img src="images/icons/checked2.svg" />}
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
                onClick={() => setIsOpen2(!isOpen2)}
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
                    isOpen2 ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </h3>
            {isOpen2 && (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
