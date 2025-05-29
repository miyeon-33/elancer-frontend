import Link from 'next/link';

type ProductDetailsProp = {
  params: Promise<{ FAQId: string }>;
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

export async function generateMetadata({ params }: ProductDetailsProp) {
  const { FAQId } = await params;

  // FAQ 데이터 가져오기
  const response = await fetch(`http://localhost:9090/service/FAQ/${FAQId}`);

  if (!response.ok) {
    throw new Error(`HTTP 오류 발생: ${response.status}`);
  }
  const faqData = await response.json();

  return {
    title: `FAQ ${faqData.title}`,
    description: faqData.details,
  };
}

export default async function FAQDetails({ params }: ProductDetailsProp) {
  const { FAQId } = await params;
  const faqData = await fetch(
    `http://localhost:9090/service/FAQ/${FAQId}`
  ).then((res) => res.json());

  const categoryName = categories[faqData.menu] || '알수없음';

  return (
    <main className="">
      <div className="mb-[72px] max-md:hidden">
        <ul className="flex justify-start items-center">
          <li className="text-[14px] text-[#8b95a1] flex justify-start items-center">
            <Link
              href="/"
              className="after:inline-block after:w-[20px] after:h-[20px] after:content[''] after:bg-[url('/images/icons/layout.svg')] after:bg-no-repeat after:mx-[4px] flex items-center leading-none text-[#8b95a1] transition-all duration-200 hover:text-[#333d4b]"
            >
              홈
            </Link>
          </li>
          <li className="text-[14px] text-[#8b95a1] flex justify-start items-center">
            <p className="after:inline-block after:w-[20px] after:h-[20px] after:content[''] after:bg-[url('/images/icons/layout.svg')] after:bg-no-repeat after:mx-[4px] flex items-center leading-none text-[#8b95a1]">
              고객센터
            </p>
          </li>
          <li className="text-[14px] text-[#8b95a1] flex justify-start items-center">
            <Link
              href="/service/FAQ"
              className="after:inline-block after:w-[20px] after:h-[20px] after:content[''] after:bg-[url('/images/icons/layout.svg')] after:bg-no-repeat after:mx-[4px] flex items-center leading-none text-[#8b95a1] transition-all duration-200 hover:text-[#333d4b]"
            >
              자주 하는 질문
            </Link>
          </li>
          <li className="text-[14px] text-[#8b95a1] flex justify-start items-center">
            <Link
              href={`/service/FAQ?page=1&menu=${faqData.menu}`}
              className="after:inline-block leading-none text-[#8b95a1] transition-all duration-200 hover:text-[#333d4b]"
            >
              {categoryName}
            </Link>
          </li>
        </ul>
      </div>
      <div className="pb-[40px] border-b border-b-[#d1d6db] max-md:pb-[20px]">
        <em className="block text-[#4e5968] pb-[16px] max-md:pb-[12px] text-[15px]">
          {faqData.category}
        </em>
        <h2 className="text-[32px] text-gray-600 font-bold max-md:text-[20px]">
          {faqData.title}
        </h2>
      </div>
      <div className="py-[48px] max-md:py-[20px]">
        <p className="text-[15px] text-[#222]">{faqData.details}</p>
      </div>
    </main>
  );
}
