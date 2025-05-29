'use client';

import Pagination from '@/app/components/Pagination';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';

type Notice = {
  id: number;
  title: string;
  details: string;
  date: string;
};

export default function notice({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const paramsObj = use(searchParams);
  const [params] = useState(new URLSearchParams(paramsObj));
  const [page, setPage] = useState(Number(paramsObj.page) || 1);
  const router = useRouter();
  const [totalPage, setTotalPage] = useState(0);

  const { isPending, data, isError, error } = useQuery<{
    result: Notice[];
    total: number;
  }>({
    queryKey: ['notices', page],
    queryFn: () =>
      fetch(`http://localhost:9090/notice?page=${page}`).then((res) =>
        res.json()
      ),
  });

  useEffect(() => {
    if (data?.total) {
      setTotalPage(Math.ceil(data.total / 10));
    }
  }, [data]);

  useEffect(() => {
    params.set('page', page.toString());
    router.push(`?${params.toString()}`);
  }, [page]);

  return (
    <div className="min-h-[(100vh-310px)] pt-[80px] max-sm:pt-[60px]">
      <div className="mx-auto max-w-[1120px] pt-[80px] pb-[120px] max-md:px-[40px] max-sm:py-[40px] max-sm:px-[20px]">
        <div className="mb-[60px] flex max-sm:mb-[20px]">
          <h2 className="text-[36px] font-bold break-keep text-gray-600 max-sm:text-[24px] leading-[42px]">
            공지사항
          </h2>
          <img
            src="/images/megaphone.png"
            className=" w-[50px] h-[50px] ml-[4px] max-sm:w-[42px] max-sm:h-[42px] max-sm:ml-[2px]"
          />
        </div>
        <div>
          <table className="border-t-2 border-[#1a1a1a] mb-[60px] max-sm:mb-[40px]">
            <tbody>
              {data?.result?.map((notice) => (
                <tr
                  key={notice.id}
                  className="border-b border-[#e5e8eb] transition-all duration-200 hover:bg-[#f2f4f6] max-sm:flex max-sm:flex-col max-sm:hover:bg-transparent"
                >
                  <td className="py-[28px] px-[20px] text-gray-600 max-sm:py-0 max-sm:px-0 max-sm:pt-[14px] max-sm:mb-[6px]">
                    <Link
                      href={`/service/notice/${notice.id}`}
                      className="text-[18px] font-semibold text-gray-600"
                    >
                      {notice.title}
                    </Link>
                  </td>
                  <td className="text-right pr-[20px] max-sm:pr-0 max-sm:text-left max-sm:pb-[14px] text-[15px] max-sm:text-[13px]">
                    {notice.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {data && data?.result?.length > 0 && (
            <Pagination page={page} setPage={setPage} totalPage={totalPage} />
          )}
        </div>
      </div>
    </div>
  );
}
