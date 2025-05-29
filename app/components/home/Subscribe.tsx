import Link from 'next/link';

export default function Subscribe() {
  return (
    <div
      className="max-w-[2560px] mx-auto w-[calc(100%-80px)] h-[600px] rounded-[28px]
    max-md:w-[calc(100%-40px)] overflow-hidden flex items-center justify-center relative
    max-md:h-[400px] max-md:rounded-[16px]"
    >
      <img
        src="/images/bg_adzero.png"
        alt="구독"
        className="w-full h-full object-cover absolute"
      />
      <div className="max-w-[1120px] text-center mx-auto z-10">
        <h3
          className="text-[40px] leading-[1.4] font-bold break-keep text-gray-600
        max-md:text-[24px] max-md:leading-[1.5]"
        >
          광고 없이 쾌적하게
          <br />
          알툴즈의 구독서비스를 확인해 보세요.
        </h3>
        <div className="flex justify-center mt-[40px]">
          <Link
            href="/adzero/intro"
            className="h-[66px] rounded-[10px] px-[36px] flex items-center
            bg-[#1a1a1a] max-sm:h-[52px] max-sm:px-[24px]"
          >
            <div className="flex items-center font-bold">
              <p className="text-[18px] text-[#fff] max-md:text-[15px]">
                알툴즈 AD-ZERO
              </p>
              <img
                src="/images/icons/svgexport-9.svg"
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
