'use client';

import { useEffect, useState } from 'react';

type Category = {
  category_id: number;
  category_name: string;
};

type SortOption = 'latest' | 'startDate' | 'deadline';

type ProjectProps = {
  projects: Project[];
  isLoading: boolean;
  onLoadMore: () => void;
  isShowMore: boolean;
  totalCount: number;
  sortBy: SortOption;
  onSortChange: (value: SortOption) => void;
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

export default function Project({
  projects,
  isLoading,
  onLoadMore,
  isShowMore,
  totalCount,
  sortBy,
  onSortChange,
}: ProjectProps) {
  const [, setCategories] = useState<Category[]>([]);

  const [, setSelectedSort] = useState('latest');
  const [isActive, setIsActive] = useState(false);

  // 카테고리 데이터 가져오기
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`);
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error('카테고리 불러오기 실패:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex flex-1 flex-col items-start gap-[16px]">
      {/* 모든 프로젝트 */}
      <div className="flex w-full flex-col items-start gap-[24px] max-sm:py-[16px] max-sm:px-[20px] max-sm:gap-[16px]">
        <h2 className="flex items-start">
          <span className="text-[18px] font-bold text-[#ff6948]">
            {totalCount}
          </span>
          <span className="text-[18px] font-bold text-[#fff]">
            개의 프로젝트
          </span>
        </h2>
        <div className="flex w-full justify-between">
          <div className="border border-[#38383d] bg-[#2a2b2e] flex p-[4px] items-center rounded-[6px] gap-[4px] max-sm:p-[3px] max-sm:gap-[4px]">
            <button
              type="button"
              onClick={() => onSortChange('latest')}
              className={`flex h-[32px] px-[12px] justify-center items-center gap-[1px] rounded-[4px] max-sm:px-[8px] ${
                sortBy === 'latest' ? 'bg-[#38383d] ' : ''
              }`}
            >
              <p
                className={`text-[13px] ${
                  sortBy === 'latest' ? 'text-[#fff]' : 'text-[#c9c8cd]'
                }`}
              >
                최신 등록 순
              </p>
            </button>
            <div className="bg-[#38383d] w-[1px] h-[30px]"></div>
            <button
              type="button"
              onClick={() => setSelectedSort('startDate')}
              className={`flex h-[32px] px-[12px] justify-center items-center gap-[1px] rounded-[4px] max-sm:px-[8px] ${
                sortBy === 'startDate' ? 'bg-[#38383d]' : ''
              }`}
            >
              <p
                className={`text-[13px] ${
                  sortBy === 'startDate' ? 'text-[#fff]' : 'text-[#c9c8cd]'
                }`}
              >
                시작 예정일 순
              </p>
            </button>
            <div className="bg-[#38383d] w-[1px] h-[30px]"></div>
            <button
              type="button"
              onClick={() => {
                onSortChange('deadline');
              }}
              className={`flex h-[32px] px-[12px] justify-center items-center gap-[1px] rounded-[4px] max-sm:px-[8px] ${
                sortBy === 'deadline' ? 'bg-[#38383d]' : ''
              }`}
            >
              <p
                className={`text-[13px] ${
                  sortBy === 'deadline' ? 'text-[#fff]' : 'text-[#c9c8cd]'
                }`}
              >
                마감 임박 순
              </p>
            </button>
          </div>
          <div
            className="flex items-center py-[6px] px-[12px] gap-[6px] cursor-pointer max-sm:hidden"
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
      <div className="flex flex-col items-center w-full max-md:px-[20px]">
        {projects.length === 0 ? (
          <p>조건에 맞는 프로젝트가 없습니다.</p>
        ) : (
          projects.map((project) => (
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
          ))
        )}
        {isShowMore && !isLoading && (
          <button
            className="flex items-center gap-[2px] text-[#f3f4f6] text-[16px] font-medium"
            onClick={onLoadMore}
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
  );
}
