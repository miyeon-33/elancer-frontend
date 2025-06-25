'use client';

import Project from '@/app/components/list-partner/Project';
import Search from '@/app/components/list-partner/Search';
import SmartFilter from '@/app/components/list-partner/SmartFilter';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

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

export default function ProjectBox() {
  const [count, setCount] = useState(1); // 더보기 클릭 횟수
  const [allProjects, setAllProjects] = useState<Project[]>([]); // 전체 데이터(필터전용)
  const [selectedDetails, setSelectedDetails] = useState<string[]>([]);
  const [selectedProficiencies, setSelectedProficiencies] = useState<string[]>(
    []
  );

  const handleToggleProficiency = (label: string) => {
    setSelectedProficiencies((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  // 전체 데이터 받기
  const { data, isPending, isError } = useQuery({
    queryKey: ['projects-all'],
    queryFn: async () => {
      const res = await fetch('http://localhost:3001/project/all');
      if (!res.ok) throw new Error('전체 프로젝트 요청 실패');
      return res.json();
    },
  });

  useEffect(() => {
    if (data?.projects) {
      setAllProjects(data.projects);
    }
  }, [data]);

  const handleDetailFilter = (details: string[]) => {
    setSelectedDetails(details); // 필터 키워드 설정
    setCount(1); // 필터 바뀌면 페이지를 초기화
  };

  // 필터 적용된 데이터
  // const filtered = allProjects
  //   .filter((project) =>
  //     selectedDetails.length === 0
  //       ? true
  //       : selectedDetails.some(
  //           (detail) =>
  //             (project.title ?? '').includes(detail) ||
  //             (project.technology_name ?? '').includes(detail) ||
  //             (project.category_name ?? '').includes(detail)
  //         )
  //   )
  //   .sort((a, b) => {
  //     const aIndex = selectedDetails.findIndex(
  //       (detail) =>
  //         (a.title ?? '').includes(detail) ||
  //         (a.technology_name ?? '').includes(detail) ||
  //         (a.category_name ?? '').includes(detail)
  //     );
  //     const bIndex = selectedDetails.findIndex(
  //       (detail) =>
  //         (b.title ?? '').includes(detail) ||
  //         (b.technology_name ?? '').includes(detail) ||
  //         (b.category_name ?? '').includes(detail)
  //     );
  //     return aIndex - bIndex;
  //   });

  const filtered = allProjects
    .filter((project) => {
      const matchDetail =
        selectedDetails.length === 0 ||
        selectedDetails.some(
          (detail) =>
            (project.title ?? '').includes(detail) ||
            (project.technology_name ?? '').includes(detail) ||
            (project.category_name ?? '').includes(detail)
        );

      const matchProficiency =
        selectedProficiencies.length === 0 ||
        selectedProficiencies.some(
          (prof) =>
            (project.title ?? '').includes(prof) ||
            (project.technology_name ?? '').includes(prof) ||
            (project.category_name ?? '').includes(prof)
        );

      return matchDetail && matchProficiency;
    })
    .sort((a, b) => {
      const getIndex = (project: Project) => {
        const keywordList = [...selectedDetails, ...selectedProficiencies];
        return keywordList.findIndex(
          (keyword) =>
            (project.title ?? '').includes(keyword) ||
            (project.technology_name ?? '').includes(keyword) ||
            (project.category_name ?? '').includes(keyword)
        );
      };

      return getIndex(a) - getIndex(b);
    });

  const totalCount = filtered.length; // 전체 필터링 된 개수
  // 화면에 보여줄 데이터 (10개씩 슬라이스)
  const visibleProjects = filtered.slice(0, count * 10);
  // 더보기 버튼 노출 여부
  const hasMore = visibleProjects.length < filtered.length;

  // 더보기 버튼 클릭 핸들러
  const handleLoadMore = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="max-w-[1200px] mx-auto max-md:px-[20px] max-sm:p-0 pb-[40px]">
      <div className="p-[24px] bg-[rgb(42,43,46)] rounded-[16px] max-sm:p-[16px] max-sm:rounded-none">
        <Search />
        <div className="flex gap-[80px] my-[56px]">
          <SmartFilter
            onSelectDetail={handleDetailFilter}
            selectedProficiencies={selectedProficiencies}
            onToggleProficiency={handleToggleProficiency}
          />
          <Project
            projects={visibleProjects}
            isLoading={isPending}
            onLoadMore={handleLoadMore}
            isShowMore={hasMore}
            totalCount={totalCount}
          />
        </div>
      </div>
    </div>
  );
}
