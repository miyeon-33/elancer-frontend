import Link from 'next/link';

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function FAQDetailsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { FAQId: string };
}) {
  return (
    <div className="min-h-[calc(100vh-310px)] pt-[80px] max-md:pt-[60px]">
      <div className="mx-auto max-w-[1120px] pt-[40px] pb-[80px] max-md:py-[40px] max-md:px-[20px]">
        <div className=" border-b border-b-[#d1d6db]">{children}</div>
        <div className="pt-[48px] flex justify-center items-center max-md:pt-[20px]">
          <Link href="/service/FAQ">
            <button className="h-[52px] text-[15px] rounded-[8px] px-[24px] flex justify-center items-center font-bold text-[#fff] bg-[#1a1a1a]">
              목록 보기
            </button>
          </Link>
        </div>
        <div className="mt-[80px] max-md:mt-[60px]">
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
      </div>
    </div>
  );
}
