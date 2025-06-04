'use client';

import { useState } from 'react';

export default function Suggestion() {
  const [activeButton, setActiveButton] = useState('');
  const buttons = ['개발', '기획', '퍼블리싱', '디자인', '기타'];
  return (
    <div className="max-w-[1200px] border mx-auto max-md:px-[20px] max-sm:px-[20px]">
      <div className="flex pt-[56px] px-[56px] flex-col gap-[32px] rounded-[24px] bg-[#fff] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.06)]">
        <div className="flex justify-between items-start">
          <h2 className="text-[#2a2b2e] text-[32px] font-bold">
            프리랜서들이
            <br />
            <span className="text-[#f64a00]">현재 참여중인</span> 프로젝트
          </h2>
          <div className="flex justify-center items-start gap-[6px]">
            {buttons.map((btn) => (
              <button
                onClick={() => setActiveButton(btn)}
                key={btn}
                type="button"
                className={`rounded-[32px] text-center py-[8px] px-[20px] text-[16px] ${
                  activeButton === btn
                    ? 'bg-[#2a2b2e] text-[#fff]'
                    : 'border border-[#dedfe7] bg-[#fff]'
                }`}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-start gap-[24px] flex-wrap">
          <div className="grid grid-cols-2 items-start">
            <div className="flex flex-col rounded-[12px] py-[24px] px-[32px] gap-[12px] border border-[#dedfe7] bg-[#fff] w-full max-w-[532px] max-h-[242px]">
              <div className="flex items-center justify-between h-[24px]">
                <div className="flex items-center h-[22px] gap-[2px]">
                  <img src="/images/icons/adress-icon.27b99aa2.svg" />
                  <h2 className="text-[#38383d] text-[13px] font-semibold">
                    서울
                  </h2>
                </div>
                <div className="flex justify-end h-[24px] gap-[2px]">
                  <img src="/images/icons/heart-empty.5ce7692c.svg" />
                  <h2 className="text-[#1b1c1e] font-semibold text-[16px]">
                    0
                  </h2>
                </div>
              </div>
              <div className="h-[60px] text-[20px] font-bold text-ellipsis line-clamp-2 break-words text-[#000]">
                [고급/Java(Vue.js)/약6개월(이후 연단위 연장)/을지로] 신한은행
                슈퍼SOL 운영 PL(SM)
              </div>
              <div className="flex gap-[4px] items-start flex-wrap">
                <span className="h-[22px] text-[#ff6948] text-[13px] font-medium whitespace-nowrap">
                  개발
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
