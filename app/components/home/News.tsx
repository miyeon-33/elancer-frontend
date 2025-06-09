'use client';

import Link from 'next/link';
import { act, useState } from 'react';

export default function News() {
  const [activeButton, setActiveButton] = useState<number>(1);

  const buttons = [
    { id: 1, label: '블로그' },
    { id: 2, label: '커뮤니티' },
    { id: 3, label: '이랜서 TV' },
  ];

  return (
    <div className="flex max-w-[1200px] mt-[136px] items-start gap-[56px] max-md:px-[20px] max-sm:px-[20px] max-sm:flex-col max-sm:gap-[24px] max-sm:w-full max-sm:mt-[68px] max-sm:mb-[68px]">
      <div className="flex w-[440px] flex-col items-start gap-[32px] max-sm:gap-[24px]  max-sm:w-full">
        <div className="flex w-[440px] flex-col items-start gap-[16px] max-sm:w-full max-sm:gap-[4px]">
          <h2 className="text-[#1b1c1e] text-[32px] font-bold max-sm:text-[20px]">
            이랜서에서 들려주는
            <br />
            다양한 소식을 만나보세요!
          </h2>
          <p className="text-[#58575e] text-[20px] font-normal max-sm:text-[14px]">
            매일 업데이트 되는 IT 컨텐츠를 소개하고,
            <br />
            이랜서 소식을 공유하는 공간입니다.
          </p>
        </div>
        <div className="flex flex-col items-start w-full max-sm:flex-row">
          {buttons.map((btn) => (
            <button
              key={btn.id}
              type="button"
              className="flex flex-col items-start w-auto relative max-sm:w-full"
              onClick={() => setActiveButton(btn.id)}
            >
              <div className="flex w-full pt-[24px] px-[32px] pb-[32px] flex-col items-start max-sm:p-[8px]">
                <p
                  className={`text-[20px] font-bold max-sm:text-[14px] ${
                    activeButton === btn.id
                      ? 'text-[#ff6948]'
                      : 'text-[#9c9ca1]'
                  }`}
                >
                  {btn.id.toString().padStart(2, '0')}
                </p>
                <p
                  className={`text-[28px] font-bold whitespace-nowrap overflow-hidden text-ellipsis max-sm:text-[18px] ${
                    activeButton === btn.id
                      ? 'text-[#1b1c1e]'
                      : 'text-[#8a8a93]'
                  }`}
                >
                  {btn.label}
                </p>
              </div>
              <div
                className={`absolute bottom-0 left-0 w-[4px] h-full max-sm:static max-sm:w-full max-sm:h-[2px] ${
                  activeButton === btn.id ? 'bg-[#38383d]' : 'bg-[#ececf1]'
                } ]`}
              ></div>
            </button>
          ))}
        </div>
        <Link
          href="/blog"
          className="flex items-center gap-[8px] max-sm:hidden"
        >
          <p className="text-[#58575e] text-[16px] font-bold">더보기</p>
          <img src="/images/icons/more-btn.cb9074fb.svg" />
        </Link>
      </div>
      <div className="w-[704px] h-auto max-sm:w-full max-sm:h-[309px]">
        <div className="grid grid-cols-2 gap-[16px] max-sm:flex max-sm:overflow-x-auto max-sm:gap-[12px]">
          <Link href="/blog/details/:id">
            <div className="flex w-[340px] h-auto flex-col items-start rounded-[12px] border border-[rgba(222,223,231)] bg-[rgb(255,255,255)] overflow-hidden max-sm:w-[280px] max-sm:h-[309px] transition-all duration-300 hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
              <img
                src="/images/863_mo_1.jpg"
                className="w-full h-[199px] object-cover hover:scale-110 transition-all duration-300"
              />
              <div className="flex pt-[24px] px-[24px] pb-[32px] flex-col items-start gap-[12px] bg-[rgb(255,255,255)] max-sm:pt-[16px] max-sm:px-[16px] max-sm:pb-[24px]">
                <p className="h-[60px] overflow-hidden text-[rgb(42,43,46)] line-clamp-2 text-ellipsis text-[20px] font-bold max-sm:h-[48px] max-sm:text-[16px]">
                  [스탠포드 황승진 교수님 칼럼] AI의 문제, 실리콘밸리는 어떤
                  아려움을 겪고 있을까
                </p>
                <p className="h-[49px] text-[rgb(119,122,131)] line-clamp-2 text-ellipsis text-[14px] font-normal leading-[22px] max-sm:h-[40px] max-sm:text-[13px]">
                  AI의 학습 속도는 인간의 통제를 뛰어넘고 있습니다. 뛰어난 학습
                  능력을 바탕으로 한 악용 사례도 꾸준히 발생하고 있는데요.인류는
                  오래전부터 영화와 소설을 통해 AI가 인간을 위협하는 모습을
                  그려오며, 그 위험성을 경고해왔습니다.이러한 상상은 단순한
                  일자리 대체를 넘어, 훨씬 더 심각하고 복잡한 문제로 다뤄지고
                  있는데요.그렇다면 AI가 초래하는 위험들은 어떤 모습으로
                  그려지고 있을까요?한국인 최초 스탠포드 종신 교수이자
                  현재스탠포드 경영 대학원 명예교수인황승진 교수님의 칼럼을
                  통해실리콘밸리에서 발생하는 AI 악용 사례와 AI의 어두
                </p>
              </div>
            </div>
          </Link>
          <Link href="/blog/details/:id">
            <div className="flex w-[340px] h-auto flex-col items-start rounded-[12px] border border-[rgba(222,223,231)] bg-[rgb(255,255,255)] overflow-hidden max-sm:w-[280px] max-sm:h-[309px] transition-all duration-300 hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
              <img
                src="/images/860_mo_1.jpg"
                className="w-full h-[199px] object-cover hover:scale-110 transition-all duration-300"
              />
              <div className="flex pt-[24px] px-[24px] pb-[32px] flex-col items-start gap-[12px] bg-[rgb(255,255,255)] max-sm:pt-[16px] max-sm:px-[16px] max-sm:pb-[24px]">
                <p className="h-[60px] overflow-hidden text-[rgb(42,43,46)] line-clamp-2 text-ellipsis text-[20px] font-bold max-sm:h-[48px] max-sm:text-[16px]">
                  [스탠포드 황승진 교수님 칼럼] 멀티 에이전트 LLM이 만드는
                  글로벌 물류의 변화
                </p>
                <p className="h-[49px] text-[rgb(119,122,131)] line-clamp-2 text-ellipsis text-[14px] font-normal leading-[22px] max-sm:h-[40px] max-sm:text-[13px]">
                  수천억 개에 달하는 파라미터를 바탕으로 비즈니스 판도를 바꾼
                  LLM.이제 LLM을 어떻게 활용하느냐에 따라 기업의 업무 효율이
                  크게 달라지고 있습니다.실리콘밸리 기업들은 단일 LLM 모델을
                  넘어서여러 개의 LLM 모델을 함께 사용하며, 혁신적인 멀티
                  에이전트 LLM 시대를 열어가고 있는데요.복잡한 문제일수록멀티
                  에이전트 LLM을 활용해 글로벌 물류의 새로운 지평을 넓혀가는
                  실리콘밸리의 모습을,한국인 최초 스탠포드 종신 교수이자
                  현재스탠포드 경영 대학원 명예교수인황승진 교수님의 칼럼을 통해
                  소개해 드립니다.글로벌 물류와 멀티 에이전트
                </p>
              </div>
            </div>
          </Link>
          <Link href="/blog/details/:id">
            <div className="flex w-[340px] h-auto flex-col items-start rounded-[12px] border border-[rgba(222,223,231)] bg-[rgb(255,255,255)] overflow-hidden max-sm:w-[280px] max-sm:h-[309px] transition-all duration-300 hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
              <img
                src="/images/858_mo_1.jpg"
                className="w-full h-[199px] object-cover hover:scale-110 transition-all duration-300s"
              />
              <div className="flex pt-[24px] px-[24px] pb-[32px] flex-col items-start gap-[12px] bg-[rgb(255,255,255)] max-sm:pt-[16px] max-sm:px-[16px] max-sm:pb-[24px]">
                <p className="h-[60px] overflow-hidden text-[rgb(42,43,46)] line-clamp-2 text-ellipsis text-[20px] font-bold max-sm:h-[48px] max-sm:text-[16px]">
                  [스탠포드 황승진 교수님 칼럼] AI는 어떻게 한국의 60배에 달하는
                  아마존 산림을 보호할까
                </p>
                <p className="h-[49px] text-[rgb(119,122,131)] line-clamp-2 text-ellipsis text-[14px] font-normal leading-[22px] max-sm:h-[40px] max-sm:text-[13px]">
                  지속가능성이 중요한 사회적 화두로 자리
                  잡으면서,ESG(환경·사회·지배구조) 경영의 중요성도 점점 커지고
                  있습니다.그중에서도‘환경보호’는 더 이상 미룰 수 없는 과제로
                  주목받고 있죠.많은 선진 기업들이 환경 보호에 앞장서며, 경영
                  전반에 ESG 원칙을 적극 반영하고 있습니다. 이 과정에서AI의
                  역할도 점점 더 커지고 있는데요.데이터를 스스로 분석하고 해답을
                  도출하는AI 기술이 환경 보호에 어떻게 활용되고 있을까요?한국인
                  최초의스탠퍼드 종신 교수이자, 현재스탠퍼드 경영 대학원
                  명예교수로 활동 중인황승진 교수님의 칼럼을 통해, AI가
                </p>
              </div>
            </div>
          </Link>
          <Link href="/blog/details/:id">
            <div className="flex w-[340px] h-auto flex-col items-start rounded-[12px] border border-[rgba(222,223,231)] bg-[rgb(255,255,255)] overflow-hidden max-sm:w-[280px] max-sm:h-[309px] transition-all duration-300 hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
              <img
                src="/images/857_mo_1.jpg"
                className="w-full h-[199px] object-cover hover:scale-110 transition-all duration-300"
              />
              <div className="flex pt-[24px] px-[24px] pb-[32px] flex-col items-start gap-[12px] bg-[rgb(255,255,255)] max-sm:pt-[16px] max-sm:px-[16px] max-sm:pb-[24px]">
                <p className="h-[60px] overflow-hidden text-[rgb(42,43,46)] line-clamp-2 text-ellipsis text-[20px] font-bold max-sm:h-[48px] max-sm:text-[16px]">
                  마블 영화에 숨은 SF 소설의 스토리들
                </p>
                <p className="h-[49px] text-[rgb(119,122,131)] line-clamp-2 text-ellipsis text-[14px] font-normal leading-[22px] max-sm:h-[40px] max-sm:text-[13px]">
                  슈퍼히어로가 과학소설에서 빌려온 아이디어들마블 시네마틱
                  유니버스(MCU)는 전 세계적으로 큰 인기를 끌고 있는 프랜차이즈
                  영화다. 얼마나 좋아했던지 여러 번 보았다. 그래도 전혀 물리지
                  않은 이유는 그 안에 있는 철학이 수많은 소설가들이 밤을 새우며
                  완성한 것들이기 때문이다.즉 이 시리즈가 단지 액션과 히어로물에
                  그치는 것이 아니다. 많은 작품들 속에는 20세기 소설 SF 소설에서
                  다뤘던 주제와 아이디어가 자연스럽게 녹아들어 있다. 이 글에서는
                  마블 영화 속 장면들을 중심으로, 어떤 SF 소설들의 철학과 설정이
                  차용되었는지를 살펴본
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="hidden max-sm:block w-full">
        <Link
          href="/blog"
          className="flex items-center gap-[8px] justify-center py-[12px] border-t border-[#dedfe7] mr-[20px]"
        >
          <p className="text-[#58575e] text-[14px] font-bold leading-[22px]">
            더보기
          </p>
          <img src="/images/icons/ico-see-more.2012c002.svg" />
        </Link>
      </div>
    </div>
  );
}
