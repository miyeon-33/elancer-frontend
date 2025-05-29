'use client';

import { generatePagination } from '@/app/_lib/utils';
import { useEffect, useState } from 'react';

export default function Pagination({
  page,
  setPage,
  totalPage,
}: {
  page: number;
  setPage: (num: number) => void;
  totalPage: number;
}) {
  const [pageArr, setPageArr] = useState<(number | string)[]>([]);

  useEffect(() => {
    const arr = generatePagination(page, totalPage);
    setPageArr(arr);
  }, [page, totalPage]);

  return (
    <div className="flex gap-x-[2px] justify-center items-center mx-auto">
      <button
        type="button"
        className={`btn bg-[url('/images/pagination.png')] bg-[152px_auto] bg-no-repeat h-[38px] w-[38px]  rounded-[100%] border-0 ${
          page === 1
            ? 'bg-[0px_-38px] cursor-default'
            : 'bg-[0px_0px] hover:bg-[#e5e8eb]'
        }`}
        onClick={() => setPage(1)}
        disabled={page === 1}
      ></button>
      <button
        type="button"
        className={`btn bg-[url('/images/pagination.png')] bg-[152px_auto] bg-no-repeat h-[38px] w-[38px]  rounded-[100%] border-0 ${
          page === 1
            ? 'bg-[-38px_-38px] cursor-default'
            : 'bg-[-38px_0px] hover:bg-[#e5e8eb]'
        }`}
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      ></button>
      {pageArr.map((item, i) => {
        if (item === '...') {
          return <span key={i}>...</span>;
        } else {
          return (
            <button
              type="button"
              key={i}
              onClick={() => setPage(item as number)}
              className={`${
                page === item ? 'bg-[#e5e8eb]' : ''
              } btn text-[#4e5968] leading-[38px] px-[10px] text-[13px] rounded-[100%] w-[38px] h-[38px] overflow-hidden border-0 font-bold hover:bg-[#e5e8eb]`}
            >
              {item}
            </button>
          );
        }
      })}
      <button
        type="button"
        className={`btn bg-[url('/images/pagination.png')] bg-[152px_auto] bg-no-repeat h-[38px] w-[38px] border-0 rounded-[100%] ${
          page === totalPage
            ? 'bg-[-76px_-38px] cursor-default'
            : 'bg-[-76px_0px] hover:bg-[#e5e8eb]'
        } `}
        onClick={() => setPage(page + 1)}
        disabled={page === totalPage}
      ></button>
      <button
        type="button"
        className={`btn bg-[url('/images/pagination.png')] bg-[152px_auto] bg-no-repeat h-[38px] w-[38px] border-0 rounded-[100%] ${
          page === totalPage
            ? 'bg-[-114px_-38px] cursor-default'
            : 'bg-[-114px_0px] hover:bg-[#e5e8eb]'
        }`}
        onClick={() => setPage(totalPage)}
        disabled={page === totalPage}
      ></button>
    </div>
  );
}
