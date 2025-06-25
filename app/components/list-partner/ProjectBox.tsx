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
  const [count, setCount] = useState(1); // 더보기 count
  const [projects, setProjects] = useState<Project[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const [filterKeyword, setFilterKeyword] = useState('');

  // 더보기
  const fetchProjects = async (count: number) => {
    setIsLoading(true);
    try {
      const res = await fetch(`http://localhost:3001/project?count=${count}`);
      if (!res.ok) throw new Error('데이터 요청 실패');
      const data = await res.json();
      setProjects((prev) => [...prev, ...data.projects]);
      setTotal(data.total);
      if (projects.length + data.projects.length >= data.total) {
        setIsShow(false);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects(count);
  }, [count]);

  // 전체 데이터 받기
  const { data, isPending, isError } = useQuery({
    queryKey: ['projects-all'],
    queryFn: async () => {
      const res = await fetch('http://localhost:3001/project/all');
      if (!res.ok) throw new Error('전체 프로젝트 요청 실패');
      return res.json();
    },
  });
  const [allProjects, setAllProjects] = useState<Project[]>([]); // 전체 데이터 보관용
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (data?.projects) {
      setAllProjects(data.projects);
      console.log(data);
    }
  }, [data]);
  const handleDetailFilter = (detail: string) => {
    setFilterKeyword(detail);
    setCount(1);
  };

  // 필터 적용된 데이터
  const filtered = allProjects.filter((project) =>
    project.title.includes(filterKeyword)
  );

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
          <SmartFilter onSelectDetail={handleDetailFilter} />
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
