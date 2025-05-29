'use client';

import Pagination from '@/app/components/Pagination';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { use, useEffect, useRef, useState } from 'react';

type FAQ = {
  id: number;
  category: string;
  title: string;
  menu: number;
};

const categories = [
  '전체',
  '알툴즈 제품문의',
  '홈페이지 문의',
  '회원정보 문의',
  '결제 문의',
  '제휴 문의',
  '기타 문의',
];

function BoldText({ text, keyword }: { text: string; keyword: string }) {
  if (!keyword) return <span>{text}</span>;

  const parts = text.split(new RegExp(`(${keyword})`, 'gi'));

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === keyword.toLowerCase() ? (
          <b key={index} className="text-[#08f]">
            {part}
          </b>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
}

export default function FAQ({
  searchParams,
}: {
  searchParams: Promise<{ menu: string; page: string }>;
}) {
  const paramsObj = use(searchParams);
  const [params] = useState(new URLSearchParams(paramsObj));

  const [page, setPage] = useState(Number(paramsObj.page) || 1);
  const [menu, setMenu] = useState(Number(paramsObj.menu) || -1);
  const [totalPage, setTotalPage] = useState(0);
  const [keyword, setKeyword] = useState('');

  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  // active
  const [activeTab, setActiveTab] = useState(paramsObj.menu || '0');
  const { isPending, data, isError, error } = useQuery<{
    result: FAQ[];
    total: number;
  }>({
    queryKey: ['faq', page, menu, keyword],
    queryFn: () =>
      fetch(
        `http://localhost:9090/service/FAQ?page=${page}&menu=${menu}&keyword=${keyword}`
      ).then((res) => res.json()),
  });

  // 총 페이지 수 계산
  useEffect(() => {
    if (data?.total) {
      setTotalPage(Math.ceil(data.total / 10));
    }
  }, [data]);

  // 검색 결과 개수
  const searchResultCount = data?.result.length || 0;

  // 페이지 변경 핸들러
  useEffect(() => {
    params.set('page', page.toString());
    router.push(`?${params.toString()}`);
  }, [page]);

  useEffect(() => {
    setMenu(Number(paramsObj.menu) || -1);
  }, [paramsObj.menu]);

  // 메뉴변경 핸들러
  function handleMenu(e: React.MouseEvent<HTMLButtonElement>, index: number) {
    setMenu(index > 0 ? index : -1);
    setActiveTab(index.toString());
    setPage(1);
    if (index > 0) {
      params.set('menu', index.toString());
    } else {
      params.delete('menu');
    }
    params.set('page', '1');
    router.push(`?${params.toString()}`);
  }

  // 검색 핸들러
  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const searchValue = inputRef?.current?.value || '';
    setKeyword(searchValue);
    if (searchValue) {
      params.set('keyword', searchValue);
    } else {
      params.delete('keyword');
    }

    params.set('page', '1');
    router.push(`?${params.toString()}`);
  }

  return (
    <main className="min-h-[calc(100vh-310px)] max-md:pt-[60px] px-[40px] max-md:px-0 pt-[80px]">
      <div className="mx-auto max-w-[1120px]  pb-[120px] pt-[80px] max-md:py-[40px]">
        <div className="mb-[48px] max-md:px-[20px] max-md:mb-[16px]">
          <h2 className="text-[36px] font-bold break-keep mb-[44px] text-gray-600 max-md:text-[24px] max-md:mb-[20px]">
            자주 하는 질문
          </h2>
          <div className="relative">
            <form onSubmit={handleSearch}>
              <input
                ref={inputRef}
                type="search"
                placeholder="궁금한 점을 검색해 보세요."
                className="w-full h-[72px] text-[28px] bg-[#f5f6f7] rounded-[8px] pr-[72px] pl-[20px] border-0 text-gray-600"
              />
              <button
                type="submit"
                className="absolute top-0 right-0 w-[72px] h-[72px] bg-[url('/images/icons/search.svg')] bg-[50%_50%] bg-no-repeat"
              ></button>
            </form>
            {isPending && <p>Loading...</p>}
            {isError && <p>{error.message}</p>}
          </div>
        </div>
        <div className="mb-[40px] max-md:mb-[24px]">
          <div className="flex gap-[32px] justify-start items-center border-b border-[#d1d6db] max-md:overflow-x-auto max-md:flex-nowrap max-md:pr-[20px] max-md:ml-[20px] ">
            {categories.map((category, index) => (
              <button
                onClick={(e) => handleMenu(e, index)}
                type="button"
                key={category}
                className={`flex-none p-[4px] text-center leading-[59px] text-[16px] font-bold whitespace-nowrap cursor-pointer relative ${
                  activeTab === index.toString()
                    ? 'text-[#1a1a1a]'
                    : 'text-[#8b95a1] transition-all hover:text-[#1a1a1a] duration-200'
                }
            `}
              >
                {category}
                {activeTab === index.toString() && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#1a1a1a] border"></span>
                )}
              </button>
            ))}
          </div>
        </div>
        <p className="text-[18px] font-bold py-[14px] px-[20px] text-gray-600">
          {keyword && (
            <>
              <span className="text-[#08f]">{keyword}</span>에 대해 총{' '}
              {searchResultCount}건이 검색되었습니다.
            </>
          )}
        </p>
        <div className="mb-[60px] max-md:px-[20px] max-md:mb-[40px]">
          {searchResultCount > 0 ? (
            data?.result?.map((item) => (
              <Link href={`/service/FAQ/${item.id}`} key={item.id}>
                <div
                  key={item.id}
                  className="flex justify-start items-center gap-[34px] text-[#4e5968] break-keep rounded-[8px] pt-[28px] pr-[34px] pb-[28px] pl-[20px] hover:bg-[rgba(139,149,161,0.1)] transition-all duration-200 max-md:py-[14px] max-md:pr-0 max-md:pl-0 max-md:flex-col max-md:items-start max-md:gap-y-[6px]"
                >
                  <div className="min-w-[180px] basis-[180px] text-[15px] max-md:max-w-full max-md:basis-0 max-md:text-[13px] max-md:order-2 max-md:pl-[26px] ">
                    {item.category}
                  </div>
                  <div
                    className="flex-1 text-[18px] font-semibold pl-[26px] relative
          after:bg-[url('/images/icons/subgo.svg')] after:w-[16px] after:h-[16px] after:bg-no-repeat after:content[''] after:block flex items-center justify-between max-md:after:hidden"
                  >
                    <div className="absolute top-0 left-0 text-[#8b95a1]">
                      Q.
                    </div>
                    <span className="text-gray-600">
                      <BoldText text={item.title} keyword={keyword} />
                    </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="flex flex-col justify-center items-center h-[240px] text-center text-[15px] text-[#8b95a1] before:content[''] before:w-[32px] before:h-[32px] before:block before:bg-[url('/images/icons/nosearch.svg')] before:bg-[100%_auto] before:bg-no-repeat before:mx-auto before:mb-[8px]">
              검색결과가 없습니다.
            </p>
          )}
        </div>
        {data && data?.result?.length > 0 && (
          <Pagination page={page} setPage={setPage} totalPage={totalPage} />
        )}
        <div className="mt-[80px] max-md:px-[20px] max-md:mt-[60px]">
          <div className="rounded-[20px] py-[40px] px-[60px] bg-[93%_100%] bg-[url('/images/faq.png')] bg-[250px_auto] bg-no-repeat bg-[#eff6f3] max-md:bg-[100%_100%] max-md:bg-[158px_auto] max-md:rounded-[16px] max-md:py-[28px] max-md:px-[24px]">
            <h3
              className="text-[24px] font-bold break-keep pb-[28px] text-gray-600
            max-md:text-[18px] max-md:pb-[26px]"
            >
              궁금증 해결에 도움이 필요하시다면, 알툴즈 고객센터로 연락주세요.
            </h3>
            <ul className="flex justify-start items-center gap-[7.41%] max-md:flex-col max-md:justify-start max-md:items-start max-md:gap-y-[16px]">
              <li>
                <strong className="block text-[13px] font-normal text-[#4e5968] pb-[4px] max-md:pb-[2px]">
                  일반 고객센터
                </strong>
                <Link
                  href="tel:1544-8209"
                  className="block text-[18px] font-semibold text-gray-600"
                >
                  1544-8209
                </Link>
              </li>
              <li>
                <strong className="block text-[13px] font-normal text-[#4e5968] pb-[4px] max-md:pb-[2px]">
                  비즈니스 고객센터
                </strong>
                <Link
                  href="tel:02-3470-2970"
                  className="block text-[18px] font-semibold text-gray-600"
                >
                  02-3470-2970
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
