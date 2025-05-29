import Link from 'next/link';

export default function License() {
  return (
    <div
      className="max-w-[2560px] mt-[28px] mx-auto w-[calc(100%-80px)] h-[600px] rounded-[28px]
    max-md:w-[calc(100%-40px)] overflow-hidden flex items-center justify-center relative
    max-md:h-[400px] max-md:rounded-[16px]"
    >
      <img
        src="/images/bg_business.png"
        alt="구독"
        className="w-full h-full object-cover absolute"
      />
      <div className="max-w-[1120px] text-center mx-auto z-10">
        <h3
          className="text-[40px] leading-[1.4] font-bold break-keep text-[#fff]
        max-md:text-[24px] max-md:leading-[1.5]"
        >
          알툴즈 기업용, 알약 기업용 제품의
          <br />
          라이선스를 확인하세요.
        </h3>
        <div className="flex justify-center mt-[40px]">
          <Link
            href="/business"
            className="h-[66px] rounded-[10px] px-[36px] flex items-center
            bg-[#fff] max-sm:h-[52px] max-sm:px-[24px]"
          >
            <div className="flex items-center font-bold">
              <p className="text-[18px] text-gray-600 max-md:text-[15px]">
                비즈니스 구매 자세히보기
              </p>
              <img
                src="/images/icons/svgexport-13.svg"
                alt="구독"
                className="-mr-[8px] ml-[8px]"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
