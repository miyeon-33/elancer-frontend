'use client';

import Project from '@/app/components/list-partner/Project';
import Search from '@/app/components/list-partner/Search';
import SmartFilter from '@/app/components/list-partner/SmartFilter';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

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

type SortOption = 'latest' | 'deadline' | 'startDate';

export default function ProjectBox() {
  const [count, setCount] = useState(1); // 더보기 클릭 횟수
  const [selectedDetails, setSelectedDetails] = useState<string[]>([]); // 상세기술 키워드
  const [selectedProficiencies, setSelectedProficiencies] = useState<string[]>(
    []
  ); // 숙련도 선택
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]); // 참여 기간 선택
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null); // 지역

  const [searchKeyword, setSearchKeyword] = useState(''); // 검색어 상태
  const [sortBy, setSortBy] = useState<SortOption>('latest');

  const handleDetailFilter = (details: string[]) => {
    setSelectedDetails(details); // 필터 키워드 설정
    setCount(1); // 필터 바뀌면 페이지를 초기화
  };

  const handleToggleProficiency = (label: string) => {
    setSelectedProficiencies((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  const toggleDuration = (label: string) => {
    setSelectedDurations((prev) =>
      prev.includes(label) ? prev.filter((d) => d !== label) : [...prev, label]
    );
  };

  // 초기화 버튼
  const handleResetFilters = () => {
    setSelectedDetails([]);
    setSelectedProficiencies([]);
    setSelectedDurations([]);
    setSelectedLocation(null);
  };

  // 백에서 필터링된 데이터 요청
  const { data, isPending } = useQuery({
    queryKey: [
      'projects',
      selectedDetails,
      selectedProficiencies,
      selectedDurations,
      selectedLocation,
    ],
    queryFn: async () => {
      const hasFilter =
        selectedDetails.length > 0 ||
        selectedProficiencies.length > 0 ||
        selectedDurations.length > 0 ||
        !!selectedLocation;

      const endpoint = hasFilter
        ? 'http://localhost:3001/project/by-keyword'
        : 'http://localhost:3001/project/all';

      const options = hasFilter
        ? {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              keywords: selectedDetails,
              proficiencies: selectedProficiencies,
              durations: selectedDurations,
              locations: selectedLocation ? [selectedLocation] : [],
            }),
          }
        : undefined;

      const res = await fetch(endpoint, options);

      if (!res.ok) throw new Error('프로젝트 데이터 요청 실패');
      return res.json();
    },
  });

  const allProjects = data?.projects || [];
  const filteredProjects = allProjects.filter((project: Project) =>
    project.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    const extractDays = (str: string): number => {
      const match = str.match(/\d+/);
      return match ? parseInt(match[0], 10) : Number.MAX_SAFE_INTEGER;
    };

    if (sortBy === 'deadline') {
      return extractDays(a.deadline) - extractDays(b.deadline);
    } else if (sortBy === 'startDate') {
      return (
        new Date(a.project_duration).getTime() -
        new Date(b.project_duration).getTime()
      );
    } else {
      return a.project_id - b.project_id; // ✅ 오래된 순 (project_id 낮은 게 먼저)
    }
  });
  const visibleProjects = sortedProjects.slice(0, count * 10);
  const totalCount = sortedProjects.length;
  const hasMore = visibleProjects.length < totalCount;

  const handleLoadMore = () => setCount((prev) => prev + 1);

  return (
    <div className="max-w-[1200px] mx-auto max-md:px-[20px] max-sm:p-0 pb-[40px]">
      <div className="p-[24px] bg-[rgb(42,43,46)] rounded-[16px] max-sm:p-[16px] max-sm:rounded-none">
        <Search onSearch={(keyword) => setSearchKeyword(keyword)} />
        <div className="flex gap-[80px] my-[56px]">
          <SmartFilter
            onSelectDetail={handleDetailFilter}
            selectedProficiencies={selectedProficiencies}
            onToggleProficiency={handleToggleProficiency}
            selectedDurations={selectedDurations}
            onToggleDuration={toggleDuration}
            onResetFilters={handleResetFilters}
            selectedLocation={selectedLocation}
            onSelectedLocation={setSelectedLocation}
          />
          <Project
            projects={visibleProjects}
            isLoading={isPending}
            onLoadMore={handleLoadMore}
            isShowMore={hasMore}
            totalCount={totalCount}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        </div>
      </div>
    </div>
  );
}
