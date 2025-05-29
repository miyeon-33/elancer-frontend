'use client';

import Link from 'next/link';

const productsData = [
  {
    id: 1,
    title: '알툴즈 통합팩',
    image: '/images/icon_120_altools.png',
    introduce: `내 PC사용을
    간편하고 편리하게`,
    link: 'ALTOOLS',
  },
  {
    id: 2,
    title: '알집',
    image: '/images/icon_alzip.png',
    introduce: `전국민 압축
    프로그램`,
    link: 'ALZIP',
  },
  {
    id: 3,
    title: '알약',
    image: '/images/icon_alyac.png',
    introduce: `전국민
    백신 프로그램`,
    link: 'ALYAC',
  },
  {
    id: 4,
    title: '알씨',
    image: '/images/icon_alsee.png',
    introduce: `이미지 뷰어,
    사진 편집`,
    link: 'ALSEE',
  },
  {
    id: 5,
    title: '알캡처',
    image: '/images/icon_alcapture.png',
    introduce: `쉽고 빠른
    화면 캡처`,
    link: 'ALCAPTURE',
  },
  {
    id: 6,
    title: '알PDF',
    image: '/images/icon_alpdf.png',
    introduce: `PDF 뷰어/리더,
    PDF 변환/편집`,
    link: 'ALPDF',
  },
  {
    id: 7,
    title: '알송',
    image: '/images/icon_alsong.png',
    introduce: `온라인 음악가사
    플레이어`,
    link: 'ALSONG',
  },
  {
    id: 8,
    title: '알드라이브',
    image: '/images/icon_aldrive.png',
    introduce: `쉽고 편리한
    파일전송`,
    link: 'ALDRIVE',
  },
];

export default function ProductList() {
  return (
    <main
      className="max-w-[2560px] mx-auto w-[calc(100%-80px)] max-md:w-[calc(100%-40px)]
    max-sm:overflow-auto"
    >
      <h2
        className="text-[15px] text-gray-600 font-semibold pt-[32px] -mb-[10px]
        hidden max-md:block"
      >
        알툴즈 제품 목록
      </h2>
      <div
        className="flex justify-between items-center gap-[12px] py-[36px] 
        max-md:py-0 max-md:pt-[20px] max-md:pb-[36px] "
      >
        {productsData.map((product) => (
          <Link
            href={`/products/${product.link}`}
            className="flex justify-center items-center pt-[26px] pb-[28px] gap-x-[6.4%]
              rounded-[16px] max-md:rounded-[12px] max-md:flex-col max-md:py-[20px] max-md:gap-y-[10px] shadow-[0_0_2px_rgba(0,0,0,0.08),4px_12px_36px_rgba(0,0,0,0.09)]
              w-full transition-all duration-200 hover:-translate-y-[7px] max-sm:hover:translate-y-0 min-w-[90px]"
            key={product.id}
          >
            <img
              src={product.image}
              alt="목록"
              className="w-[44px] h-[44px] rounded-[8px]"
            />
            <div className="flex flex-col">
              <div className="flex items-center">
                <p className="text-[14px] break-keep leading-[1.2] max-md:text-[12px] text-gray-600 font-semibold text-center">
                  {product.title}
                </p>
                <img
                  src="/images/icons/list.svg"
                  alt="이동"
                  className="w-[10px] h-[10px]"
                />
              </div>
              <p
                className="text-[11px] leading-[1.3] whitespace-pre-line pt-[4px]
                  text-[#1a1a1a80] block max-md:hidden break-keep"
              >
                {product.introduce}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
