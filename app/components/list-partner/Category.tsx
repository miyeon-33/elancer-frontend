'use client';

type CategoryProps = {
  onSelectCategory: (id: number | null) => void;
  selectedCategoryId: number | null;
};

export default function Category({
  onSelectCategory,
  selectedCategoryId,
}: CategoryProps) {
  const categories = [
    { id: 1, name: '개발' },
    { id: 2, name: '기획' },
    { id: 3, name: '퍼블리싱' },
    { id: 4, name: '디자인' },
    { id: 5, name: '기타' },
  ];

  return (
    <div className="flex max-w-[1200px] pt-[24px] px-[24px] items-start gap-[32px] mx-auto max-sm:sticky max-sm:top-0 max-sm:left-0 max-sm:z-10 max-sm:pt-[16px] max-sm:pl-[20px] max-sm:px-0 max-sm:gap-[16px]">
      {categories.map((cat) => (
        <button
          key={cat.id ?? 'all'}
          onClick={() => onSelectCategory(cat.id)}
          type="button"
          className={`flex py-[16px] flex-col items-center ${
            selectedCategoryId === cat.id
              ? 'border-b-2 border-[#f3f4f6]'
              : 'border-0'
          }`}
        >
          <h2
            className={`text-center text-[18px] font-bold max-sm:text-[16px] ${
              selectedCategoryId === cat.id
                ? 'text-[#f3f4f6]'
                : 'text-[#a6a6ac]'
            }`}
          >
            {cat.name}
          </h2>
        </button>
      ))}
    </div>
  );
}
