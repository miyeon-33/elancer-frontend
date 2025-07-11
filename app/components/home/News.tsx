'use client';

import Link from 'next/link';
import { useState } from 'react';

type Card = {
  id: number;
  image: string;
  title: string;
  summary?: string;
};

export default function News() {
  const [activeButton, setActiveButton] = useState<number>(1);

  const buttons = [
    { id: 1, label: '블로그' },
    { id: 2, label: '커뮤니티' },
    { id: 3, label: '이랜서 TV' },
  ];

  const cardData: Record<number, Card[]> = {
    1: [
      {
        id: 101,
        image: '/images/870_mo_1.jpg',
        title: '현실이 된 SF 소설: 뉴로맨서',
        summary:
          '사이버스페이스의 대부인 윌리엄 깁슨이 그린 미래1984년 윌리엄 깁슨이 발표한『뉴로맨서』는 근미래 디스토피아를 배경으로 하는 사이버펑크 소설의 걸작이다.뉴로맨서라는 단어는 뉴로와 맨서, 즉신경 + 예언자(마법사)라는 단어로 조합하여 만든 신조어이다.주인공은 컴퓨터 해커 케이스(Henry Case)로, 이전 회사를 배신하여 신경독소에 의해 사이버스페이스에 접속할 수 있는 능력을 잃었다.밑바닥 인생을 전전하던 케이스를아미티지(Armitage)라는 의문의 인물이 접근하여 사이버스페이스에 접근할 수 있게 해주는 조건으로사이보그 암살자 몰리',
      },
      {
        id: 102,
        image: '/images/867_mo_1.jpg',
        title:
          'AI 시대의 IT 프리랜서를 활용하는 6가지 전략: 기업혁신의 새로운 기회',
        summary:
          'AI가 일상과 비즈니스 전반에 스며들면서 기업들의 인력 운용 방식도 급속히 변화하고 있다.특히 IT 분야에서는 AI 도구의 등장으로 개발 속도가 빨라지고 업무 효율성이 크게 향상되면서, 프리랜서 활용에 대한 새로운 패러다임이 형성되고 있다.AI 시대에 IT 프리랜서를 전략적으로 활용하는 방법을 살펴보자.1. AI 네이티브 프리랜서의 활용AI 도구에 능숙한 프리랜서들은 기존 개발자보다 월등한 생산성을 보여준다.GitHub Copilot, ChatGPT,Claude와 같은 AI 도구를 능숙하게 다루는 프리랜서는 코드 작성 속도가 2-3',
      },
      {
        id: 103,
        image: '/images/866_mo_1.jpg',
        title:
          '[스탠포드 황승진 교수님 칼럼]  AI 시대, ‘이런 기업’이 살아남는다',
        summary:
          'AI는 이제 새로운 세상을 만들어가고 있습니다. 마치 인터넷이 전 세계 네트워크를 연결하며 세상을 바꿨듯,AI 역시 이전에 없던 서비스를 탄생시키며 산업의 판도를 바꾸고 있죠.그렇다면AI가 만들어가는 세상에서 살아남기 위해 우리는 어떻게 준비해야 할까요?지금의 변화 속에서 어떤 기업들이 살아남았는지를 돌아보며, 한국인 최초 스탠포드 종신 교수이자 현재 스탠포드 경영 대학원 명예교수로 활동 중인황승진 교수님의 칼럼을 통해 그 해답의 실마리를 함께 찾아봅니다.AI와 경쟁력 – 별의 순간경영의 역사를 보면, 신기술에 관한 어느 한 순간의',
      },
      {
        id: 104,
        image: '/images/863_mo_1.jpg',
        title:
          '[스탠포드 황승진 교수님 칼럼] AI의 문제, 실리콘밸리는 어떤 아려움을 겪고 있을까',
        summary:
          'AI의 학습 속도는 인간의 통제를 뛰어넘고 있습니다. 뛰어난 학습 능력을 바탕으로 한 악용 사례도 꾸준히 발생하고 있는데요.인류는 오래전부터 영화와 소설을 통해 AI가 인간을 위협하는 모습을 그려오며, 그 위험성을 경고해왔습니다.이러한 상상은 단순한 일자리 대체를 넘어, 훨씬 더 심각하고 복잡한 문제로 다뤄지고 있는데요.그렇다면 AI가 초래하는 위험들은 어떤 모습으로 그려지고 있을까요?한국인 최초 스탠포드 종신 교수이자 현재스탠포드 경영 대학원 명예교수인황승진 교수님의 칼럼을 통해실리콘밸리에서 발생하는 AI 악용 사례와 AI의 어두',
      },
    ],
    2: [
      {
        id: 201,
        image: '/images/819_mo_7.png',
        title:
          '일본 현지에서 진행되는 IT 프로젝트에 참여 가능한 회원님들의 수요조사를 진행합니다!',
      },
      {
        id: 202,
        image: '/images/800_mo_6.png',
        title:
          '달리고 싶은 IT 인들 모여라! 이랜서 런클럽 ERC 4기 최종 발표 안내',
      },
      {
        id: 203,
        image: '/images/795_mo_1.png',
        title: '2024 올해의 이랜서 어워즈 수상자 발표 🏆',
      },
      {
        id: 204,
        image: '/images/792_mo_7.png',
        title: '[마감] 달리고 싶은 IT 인들 모여라! 이랜서 런클럽 ERC 4기 모집',
      },
    ],
    3: [
      {
        id: 301,
        image: '/images/hq720.jpg',
        title:
          '[초보 러너를 위한 러닝 QnA] 완주를 위한 러닝 페이스 설정법 🕒 #ERC #이랜서런클럽 #박유진코치',
      },
      {
        id: 302,
        image: '/images/hq729.jpg',
        title:
          '노트북 하나로 일하고 여행한다 💻 | 일하며 떠도는 디지털 노마드 리얼 라이프',
      },
      {
        id: 303,
        image: '/images/hq730.jpg',
        title:
          '러닝 크루의 루프탑 PARTY 🎉 (여기에 눈물 한 방울이 첨가된 😭) #이랜서런클럽 #ERC #아너스파티',
      },
      {
        id: 304,
        image: '/images/hq731.jpg',
        title: '초보 러너라면 무조건 바로 시청하세요. 안 보면 오래 못 뜁니다!',
      },
    ],
  };

  return (
    <div className="flex max-w-[1200px] my-[136px]  items-start gap-[56px] max-md:px-[20px] max-sm:px-[20px] max-sm:flex-col max-sm:gap-[24px] max-sm:w-full max-sm:mt-[68px] max-sm:mb-[68px] mx-auto">
      <div className="flex flex-col items-start gap-[32px] max-sm:gap-[24px]  max-sm:w-full">
        <div className="flex flex-col items-start gap-[16px] max-sm:w-full max-sm:gap-[4px]">
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
        <Link href="#" className="flex items-center gap-[8px] max-sm:hidden">
          <p className="text-[#58575e] text-[16px] font-bold">더보기</p>
          <img src="/images/icons/more-btn.cb9074fb.svg" />
        </Link>
      </div>
      <div className="w-[704px] h-auto max-sm:w-full max-sm:h-[309px]">
        <div className="grid grid-cols-2 gap-[16px] max-sm:flex max-sm:overflow-x-auto max-sm:gap-[12px]">
          {cardData[activeButton].map((card) => (
            <Link href="#" key={card.id}>
              <div className="flex h-auto flex-col items-start rounded-[12px] border border-[rgba(222,223,231)] overflow-hidden max-sm:w-[280px] max-sm:h-[309px] transition-all duration-300 hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
                <img
                  src={card.image}
                  className="w-full h-[199px] object-cover hover:scale-110 transition-all duration-300"
                />
                <div
                  className={`flex pt-[24px] px-[24px] pb-[32px] flex-col items-start gap-[12px] max-sm:pt-[16px] max-sm:px-[16px] max-sm:pb-[24px]
                    ${
                      activeButton === 3
                        ? 'bg-[#1b1c1e]'
                        : 'bg-[rgb(255,255,255)]'
                    }`}
                >
                  <p
                    className={`h-[60px] overflow-hidden line-clamp-2 text-ellipsis text-[20px] font-bold max-sm:h-[48px] max-sm:text-[16px]
                    ${
                      activeButton === 3
                        ? 'text-[#f3f4f6]'
                        : 'text-[rgb(42,43,46)]'
                    }`}
                  >
                    {card.title}
                  </p>
                  {card.summary && (
                    <p className="h-[49px] text-[rgb(119,122,131)] line-clamp-2 text-ellipsis text-[14px] font-normal leading-[22px] max-sm:h-[40px] max-sm:text-[13px]">
                      {card.summary}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="hidden max-sm:block w-full">
        <Link
          href="#"
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
