'use client';

import { useState } from 'react';

export default function Category() {
  const [selected, setSelected] = useState('개발');

  const categories = ['개발', '기획', '퍼블리싱', '디자인', '기타'];

  return (
    <div className="flex max-w-[1200px] pt-[24px] px-[24px] items-start gap-[32px] mx-auto max-sm:sticky max-sm:top-0 max-sm:left-0 max-sm:z-10 max-sm:pt-[16px] max-sm:pl-[20px] max-sm:px-0 max-sm:gap-[16px]">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelected(category)}
          type="button"
          className={`flex py-[16px] flex-col items-center ${
            selected === category ? 'border-b-2 border-[#f3f4f6]' : 'border-0'
          }`}
        >
          <h2
            className={`text-center text-[18px] font-bold max-sm:text-[16px] ${
              selected === category ? 'text-[#f3f4f6]' : 'text-[#a6a6ac]'
            }`}
          >
            {category}
          </h2>
        </button>
      ))}
    </div>
  );
}
