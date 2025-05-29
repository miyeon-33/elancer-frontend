import Link from 'next/link';

export default function Shortcut() {
  return (
    <div className="mt-[28px] overflow-hidden relative w-full h-full bg-[url('/images/bgnews.png')] bg-cover bg-[50%_50%] max-md:bg-[url('/images/bgnewsmb.png')]">
      <div className="mx-auto max-w-[1120px] pt-[106px] px-[20px] pb-[94px] max-md:w-full max-md:py-[100px]">
        <ul className="flex justify-between items-start gap-[20px] max-md:flex-col max-md:items-start max-md:justify-start">
          <li className="basis-[360px] max-md:basis-full max-md:w-full">
            <Link
              href="https://blog.naver.com/estpublic"
              className="flex items-center justify-start gap-[28px] h-[140px] bg-[#fff] rounded-[16px] pr-[40px] pl-[52px] transition-all duration-200 hover:shadow-[0_0_2px_rgba(0,0,0,.08),4px_12px_36px_rgba(0,0,0,.09)]
              max-md:gap-[24px] max-md:py-0 max-md:px-[24px] max-md:h-[100px] max-md:hover:shadow-none"
            >
              <img
                src="/images/blog.png"
                alt="블로그"
                className="w-[40px] h-[40px]"
              />
              <p className="whitespace-nowrap">
                <span className="text-[16px] text-[#4e5968]">
                  더 많은 알툴즈 꿀팁은
                </span>
                <strong className="text-gray-600 font-semibold mt-[10px] after:content-[''] after:bg-[url('/images/icons/gonews.svg')]  after:w-[16px] after:h-[16px] flex items-center after:ml-[2px] max-md:mt-[6px]">
                  알툴즈 블로그 바로가기
                </strong>
              </p>
            </Link>
          </li>
          <li className="basis-[360px] max-md:basis-full max-md:w-full">
            <Link
              href="https://estsoft.ai/"
              className="flex items-center justify-start gap-[28px] h-[140px] bg-[#fff] rounded-[16px] pr-[40px] pl-[52px] transition-all duration-200 hover:shadow-[0_0_2px_rgba(0,0,0,.08),4px_12px_36px_rgba(0,0,0,.09)] max-md:h-[100px] max-md:gap-[24px] max-md:py-0 max-md:px-[24px] max-md:hover:shadow-none"
            >
              <img
                src="/images/estsoft.png"
                alt="이스트소프"
                className="w-[40px] h-[40px]"
              />
              <p className="whitespace-nowrap">
                <span className="text-[16px] text-[#4e5968]">
                  가장 빠른 인공지능 소식은
                </span>
                <strong className="text-gray-600 font-semibold mt-[10px] after:content-[''] after:bg-[url('/images/icons/gonews.svg')] after:w-[16px] after:h-[16px] flex items-center after:ml-[2px] max-md:mt-[6px]">
                  이스트소프트 바로가기
                </strong>
              </p>
            </Link>
          </li>
          <li className="basis-[360px] max-md:basis-full max-md:w-full">
            <Link
              href="https://www.estsecurity.com/"
              className="flex items-center justify-start gap-[28px] h-[140px] bg-[#fff] rounded-[16px] pr-[40px] pl-[52px] transition-all duration-200 hover:shadow-[0_0_2px_rgba(0,0,0,.08),4px_12px_36px_rgba(0,0,0,.09)] max-md:h-[100px] max-md:gap-[24px] max-md:py-0 max-md:px-[24px] max-md:hover:shadow-none"
            >
              <img
                src="/images/estsecurity.png"
                alt="이스트시큐리티"
                className="w-[40px] h-[40px]"
              />
              <p className="whitespace-nowrap">
                <span className="text-[16px] text-[#4e5968]">
                  최신 보안 소식은
                </span>
                <strong className="text-gray-600 font-semibold mt-[10px] after:content-[''] after:bg-[url('/images/icons/gonews.svg')]  after:w-[16px] after:h-[16px] flex items-center after:ml-[2px] max-md:mt-[6px]">
                  이스트시큐리티 바로가기
                </strong>
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
