'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './PickSlider.module.css';
import Link from 'next/link';
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

const projectImages = [
  '/images/icons/logo-815984.927499af.svg',
  '/images/icons/logo-815984.927499af.svg',
  '/images/icons/logo-815984.927499af.svg',
  '/images/company-logo_75.png',
  '/images/icons/logo-815984.927499af.svg',
  '/images/company-logo_65.png',
];

export default function Pick() {
  const [javaProjects, setJavaProjects] = useState<Project[]>([]);
  // 서버 데이터 요청
  const { data } = useQuery({
    queryKey: ['projects-java'],
    queryFn: async () => {
      const res = await fetch('http://localhost:3001/project/java');

      if (!res.ok) throw new Error('전체 프로젝트 요청 실패');

      return res.json();
    },
  });

  useEffect(() => {
    if (data?.projects) {
      setJavaProjects(data.projects);
    }
  }, [data]);

  return (
    <div className="max-w-[1200px] max-md:px-[20px] max-sm:px-[20px] max-sm:max-w-[768px] max-sm:min-w-[375px] mx-auto">
      <div className="flex flex-col items-start gap-[32px] rounded-[24px] bg-[#fff] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.06)] mb-[80px] pt-[56px] px-[56px] max-sm:pt-[32px] max-sm:px-[20px] max-sm:pb-[20px]">
        <div className="flex items-start gap-[32px] w-full max-w-[1200px] overflow-hidden relative max-sm:flex-col">
          <div className="flex w-[312px] flex-col items-start self-stretch justify-between max-sm:w-full">
            <div className="gap-[16px] flex flex-col max-sm:gap-[6px] max-sm:items-start">
              <h2 className="self-stretch text-[#1b1c1e] text-[32px] font-bold inline-block max-sm:text-[20px]">
                이랜서&nbsp;
                <span className="text-[#ff6948]">PICK</span>
                <br />
                추천 프로젝트 입니다!
              </h2>
              <p className="text-[#58575e] text-[20px] font-normal inline-block max-sm:text-[14px]">
                로그인 후 회원정보를 업데이트 하시면
                <br />더 많은 추천 정보를 얻으실 수 있습니다.
              </p>
            </div>
          </div>
          <div className="w-[744px] overflow-hidden">
            <Swiper
              slidesPerView={2}
              navigation
              modules={[Navigation]}
              className={styles.pickslider}
              spaceBetween={24}
              breakpoints={{
                768: {
                  spaceBetween: 12,
                },
              }}
            >
              {javaProjects.slice(0, 6).map((project, index) => (
                <SwiperSlide className="w-[312px]" key={project.project_id}>
                  <div className="h-[435px] flex flex-col items-center bg-[#fff] rounded-[12px] p-[24px] gap-[12px] border border-[#dedfe7] hover:border-[#ff9148] transition-all duration-300 max-sm:w-[264px] max-sm:h-[384px] max-sm:p-[16px]">
                    <div className="flex justify-between items-start w-full">
                      <div className="flex justify-center items-center rounded-[2px] py-[4px] px-[8px] bg-[#f44343] font-normal text-[#fff] text-[13px] whitespace-nowrap">
                        {project.deadline}
                      </div>
                      <div className="flex justify-end h-[24px] gap-[2px]">
                        <img src="/images/icons/heart-empty.5ce7692c.svg" />
                        <h2 className="text-[#1b1c1e] text-[16px] font-semibold">
                          {project.likes}
                        </h2>
                      </div>
                    </div>
                    <div className="w-[264px] h-[149px] rounded-[8px] border border-[#ececf1] bg-[#fdfdfd] flex items-center justify-center max-sm:h-[131px] max-sm:w-full">
                      <img src={projectImages[index]} />
                    </div>
                    <div className="text-[#1b1c1e] text-[18px] font-bold max-h-[50px] text-ellipsis break-keep whitespace-normal line-clamp-2 max-sm:text-[16px] max-sm:max-h-[44px]">
                      {project.title}
                    </div>
                    <div className="flex gap-[4px] items-center flex-wrap h-[52px] overflow-hidden">
                      <h2 className="h-[22px] text-[#ff6948] text-[13px] font-medium whitespace-nowrap leading-[24px]">
                        개발
                      </h2>
                      <span className="rounded-[16px] py-[2px] px-[8px] bg-[#fdf6f4] text-[#ff6948] h-[22px] text-[13px] font-normal whitespace-nowrap">
                        JAVA
                      </span>
                      <span className="rounded-[16px] py-[2px] px-[8px] bg-[#fdf6f4] text-[#ff6948] h-[22px] text-[13px] font-normal whitespace-nowrap">
                        JavaScript
                      </span>
                      <span className="rounded-[16px] py-[2px] px-[8px] bg-[#fdf6f4] text-[#ff6948] h-[22px] text-[13px] font-normal whitespace-nowrap">
                        JSP
                      </span>
                      <span className="rounded-[16px] py-[2px] px-[8px] bg-[#fdf6f4] text-[#ff6948] h-[22px] text-[13px] font-normal whitespace-nowrap">
                        Spring
                      </span>
                      <div className="flex items-center gap-[4px] text-[#777a83] h-[22px] text-[13px]">
                        외 +1개
                      </div>
                    </div>
                    <div className="w-full flex flex-col gap-[8px]">
                      <div className="flex items-center flex-wrap gap-[4px] w-full">
                        <div className="flex items-center gap-[2px]">
                          <img src="/images/icons/adress-icon.27b99aa2.svg" />
                          <h2 className="text-[13px] text-[#38383d] font-semibold">
                            {project.location}
                          </h2>
                        </div>
                        <div className="w-[1px] h-[12px] mx-[1px] bg-[#ececf1]"></div>
                        <div className="flex items-center gap-[2px]">
                          <span className="text-[#777a83] font-normal text-[13px]">
                            숙련도
                          </span>
                          <span className="text-[#1b1c1e] text-[14px] font-semibold">
                            {project.proficiency}
                          </span>
                        </div>
                        <div className="w-[1px] h-[12px] mx-[1px] bg-[#ececf1]"></div>
                        <div className="flex items-center gap-[2px]">
                          <span className="text-[#777a83] font-normal text-[13px]">
                            예상기간
                          </span>
                          <span className="text-[#1b1c1e] text-[14px] font-semibold">
                            {project.project_duration}
                          </span>
                        </div>
                        <div className="w-[1px] h-[12px] mx-[1px] bg-[#ececf1]"></div>
                        <div className="flex items-center gap-[2px]">
                          <span className="text-[#777a83] font-normal text-[13px]">
                            월 단가
                          </span>
                          <span className="text-[#1b1c1e] text-[14px] font-semibold">
                            {project.monthly_price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <Link href="/list-partner" className="w-full">
          <div className="flex py-[24px] justify-center items-center gap-[8px] border-t border-[#ececf1] max-sm:py-[12px] max-sm:gap-[4px]">
            <h2 className="text-[#58575e] text-[16px] font-bold max-sm:text-[14px]">
              더보기
            </h2>
            <img src="/images/icons/more-btn.cb9074fb.svg" />
          </div>
        </Link>
      </div>
    </div>
  );
}
