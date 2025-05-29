'use client';

import { useState } from 'react';

export default function History() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-md:px-[40px] max-sm:hidden">
      <div className="mx-auto max-w-[1120px]">
        <h3 className="text-[28px] text-gray-600 font-bold break-keep mb-[26px]">
          버전 히스토리
        </h3>
        <ul className="border-t-2 border-b-2 border-[#1a1a1a]">
          <li>
            <div
              className={`relative text-[20px] text-gray-600 font-bold cursor-pointer py-[20px] pr-[25px] pl-[8px] after:absolute after:top-[25px] after:right-[25px] after:w-[16px] after:h-[16px] after:block after:bg-[url('/images/icons/history.svg')] 
                ${
                  isOpen
                    ? 'after:rotate-180 after:transition-all after:duration-150 after:ease-in-out'
                    : 'after:rotate-0'
                }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              알집 v12.29 출시!
            </div>
            {isOpen && (
              <div className="block">
                <div className="break-keep pr-[72px] pb-[20px] pl-[8px]">
                  <p className="text-[13px] text-[#8b95a1] pb-[8px]">
                    2025-03-20
                  </p>
                  <div className="text-[15px] text-gray-600">
                    1. Windows 10 미만 업데이트 지원 종료
                    <br />- Microsoft의 보안 기술 지원이 종료된 Windows 7, 8,
                    8.1 버전 업데이트 지원이 종료되었습니다.
                    <br />
                    <br />
                    2. 제품 인터페이스 개선
                    <br />- 상단 메뉴 등 메인 UI 일부를 수정하였습니다.
                    <br />- 창 모드의 크기 조절 로직을 개선하였습니다.
                    <br />
                    <br />
                    3. 버그 수정 및 안정성 강화
                    <br />- 제품 내 일부 아이콘이 어색하게 보이는 현상을
                    수정하였습니다.
                    <br />- 내부 모듈 업데이트를 통해 안정성을 강화하였습니다.
                    <br />- 기타 마이너 버그를 수정하였습니다.
                  </div>
                </div>
              </div>
            )}
          </li>
          <li>
            <div
              className={`relative text-[20px] text-gray-600 font-bold cursor-pointer py-[20px] pr-[25px] pl-[8px] after:absolute after:top-[25px] after:right-[25px] after:w-[16px] after:h-[16px] after:block after:bg-[url('/images/icons/history.svg')] 
                ${
                  isOpen
                    ? 'after:rotate-180 after:transition-all after:duration-150 after:ease-in-out'
                    : 'after:rotate-0'
                }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              알집 v12.29 출시!
            </div>
            {isOpen && (
              <div className="block">
                <div className="break-keep pr-[72px] pb-[20px] pl-[8px]">
                  <p className="text-[13px] text-[#8b95a1] pb-[8px]">
                    2025-03-20
                  </p>
                  <div className="text-[15px] text-gray-600">
                    1. Windows 10 미만 업데이트 지원 종료
                    <br />- Microsoft의 보안 기술 지원이 종료된 Windows 7, 8,
                    8.1 버전 업데이트 지원이 종료되었습니다.
                    <br />
                    <br />
                    2. 제품 인터페이스 개선
                    <br />- 상단 메뉴 등 메인 UI 일부를 수정하였습니다.
                    <br />- 창 모드의 크기 조절 로직을 개선하였습니다.
                    <br />
                    <br />
                    3. 버그 수정 및 안정성 강화
                    <br />- 제품 내 일부 아이콘이 어색하게 보이는 현상을
                    수정하였습니다.
                    <br />- 내부 모듈 업데이트를 통해 안정성을 강화하였습니다.
                    <br />- 기타 마이너 버그를 수정하였습니다.
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
