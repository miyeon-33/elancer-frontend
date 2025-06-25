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

  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const toggleDuration = (label: string) => {
    setSelectedDurations((prev) =>
      prev.includes(label) ? prev.filter((d) => d !== label) : [...prev, label]
    );
  };

  const durationFilters = [
    { label: '1달 이하', test: (v: number) => v <= 1 },
    { label: '3개월 이상', test: (v: number) => v >= 3 },
    { label: '6개월 이상', test: (v: number) => v >= 6 },
    { label: '1년 이상', test: (v: number) => v >= 12 },
  ];

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

  const filtered = allProjects.filter((project) => {
    const matchDetail =
      selectedDetails.length === 0 ||
      selectedDetails.some(
        (keyword) =>
          (project.title ?? '').includes(keyword) ||
          (project.technology_name ?? '').includes(keyword) ||
          (project.category_name ?? '').includes(keyword)
      );

    const matchProficiency =
      selectedProficiencies.length === 0 ||
      selectedProficiencies.some(
        (keyword) =>
          (project.title ?? '').includes(keyword) ||
          (project.technology_name ?? '').includes(keyword) ||
          (project.category_name ?? '').includes(keyword)
      );

    const matchDuration =
      selectedDurations.length === 0 ||
      selectedDurations.some((label) => {
        const rule = durationFilters.find((d) => d.label === label);
        const months = Number(
          (project.project_duration ?? '').replace(/[^0-9]/g, '')
        );
        return rule?.test?.(months);
      });

    return matchDetail && matchProficiency && matchDuration;
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
            selectedDurations={selectedDurations}
            onToggleDuration={toggleDuration}
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
