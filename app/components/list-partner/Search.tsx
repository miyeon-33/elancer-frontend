'use client';

type SearchProps = {
  onSearch: (keyword: string) => void;
};

export default function Search({ onSearch }: SearchProps) {
  return (
    <div className="max-w-[1200px] mx-auto p-[16px]">
      {/* 검색창 */}
      <div className="w-full relative">
        <div className="absolute left-[16px] top-1/2 -translate-y-1/2 h-[20px]">
          <img src="/images/icons/inputSearch.svg" />
        </div>
        <input
          placeholder="프로젝트 키워드로 검색해 보세요."
          onChange={(e) => onSearch(e.target.value)}
          className="text-[16px] font-normal text-[#f3f4f6] pr-[40px] pl-[48px] py-[24px] border border-[#58575e] rounded-[6px] w-full h-[56px] flex hover:border-[#ff5400] max-sm:text-[14px]"
        />
      </div>
    </div>
  );
}
