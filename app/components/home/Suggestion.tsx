'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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

export default function Suggestion() {
  const [activeButton, setActiveButton] = useState('개발');
  const [category, setCategory] = useState<Category[]>([]);

  // 카테고리 데이터 가져오
  const { data } = useQuery({
    queryKey: ['category'],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`);

      if (!res.ok) throw new Error('전체 프로젝트 요청 실패');

      return res.json();
    },
  });

  useEffect(() => {
    if (data) {
      setCategory(data);
    }
  }, [data]);

  // 전체데이터 가져오기
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const { data: allData } = useQuery({
    queryKey: ['projects-all'],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/all`);

      if (!res.ok) throw new Error('전체 프로젝트 요청 실패');

      return res.json();
    },
  });

  useEffect(() => {
    if (allData?.projects) {
      setAllProjects(allData.projects);
    }
  }, [allData]);

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
            {category.map((cat) => (
              <button
                onClick={() => setActiveButton(cat.category_name)}
                key={cat.category_id}
                type="button"
                className={`rounded-[32px] text-center py-[8px] px-[20px] text-[16px] max-sm:py-[6px] max-sm:px-[12px] max-sm:text-[14px] ${
                  activeButton === cat.category_name
                    ? 'bg-[#2a2b2e] text-[#fff]'
                    : 'border border-[#dedfe7] bg-[#fff]'
                }`}
              >
                {cat.category_name}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-start flex-wrap overflow-x-auto">
          <div className="grid grid-cols-2 gap-[24px] items-start max-sm:gap-[12px] max-sm:min-w-[612px]">
            {allProjects?.slice(0, 4)?.map((project) => (
              <Link href="/project_datail/:id" key={project.project_id}>
                <div className="flex flex-col rounded-[12px] py-[24px] px-[32px] gap-[12px] border border-[#dedfe7] bg-[#fff] hover:border-[#ff3148] max-sm:p-[16px] max-sm:min-w-[300px]">
                  <div className="flex items-center justify-between h-[24px]">
                    <div className="flex items-center h-[22px] gap-[2px]">
                      <img src="/images/icons/adress-icon.27b99aa2.svg" />
                      <h2 className="text-[#38383d] text-[13px] font-semibold">
                        {project.location}
                      </h2>
                    </div>
                    <div className="flex justify-end h-[24px] gap-[2px]">
                      <img src="/images/icons/heart-empty.5ce7692c.svg" />
                      <h2 className="text-[#1b1c1e] font-semibold text-[16px]">
                        {project.likes}
                      </h2>
                    </div>
                  </div>
                  <div className="h-[60px] text-[20px] font-bold text-ellipsis line-clamp-2 break-words text-[#000] max-sm:text-[#1b1c1e] max-sm:text-[16px] max-sm:h-[48px]">
                    {project.title}
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
                          {project.proficiency}
                        </h2>
                      </div>
                      <div className="w-[1px] h-[12px] bg-[#ececf1]"></div>
                      <div className="flex items-center gap-[2px]">
                        <h2 className="text-[#777a83] text-[13px] font-normal break-keep">
                          예상기간
                        </h2>
                        <h2 className="text-[#1b1c1e] text-[14px] font-semibold break-keep">
                          {project.project_duration}
                        </h2>
                      </div>
                      <div className="w-[1px] h-[12px] bg-[#ececf1]"></div>
                      <div className="flex items-center gap-[2px]">
                        <h2 className="text-[#777a83] text-[13px] font-normal break-keep">
                          월 단가
                        </h2>
                        <h2 className="text-[#1b1c1e] text-[14px] font-semibold break-keep">
                          {project.monthly_price}
                        </h2>
                      </div>
                    </div>
                    <div className="text-[#fff] text-[13px] whitespace-nowrap rounded-[2px] bg-[#f44343] font-normal py-[4px] px-[8px]">
                      {project.deadline}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
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
