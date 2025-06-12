import Link from 'next/link';

export default function SubIntroduce() {
  return (
    <div className="max-w-[1200px] mx-auto pt-[47px] max-md:px-[20px] max-sm:px-[20px] max-sm:pt-[20px]">
      <div className="bg-gradient-to-r from-[#ff6948] to-[#ff9148] flex flex-col justify-between max-w-[1200px] py-[40px] px-[56px] h-[244px] rounded-[16px] self-stretch max-sm:w-full max-sm:h-[168px] max-sm:p-[24px] max-sm:rounded-[12px] max-sm:opacity-95">
        <div className="flex items-start justify-between max-sm:w-full">
          <div className="flex flex-col items-start gap-[6px]">
            <h1 className="text-[#fff] text-[32px] font-bold -tracking-[0.5px] max-sm:text-[20px]">
              상주 프로젝트
            </h1>
            <p className="text-[#f3f4f6] text-[16px] font-normal -tracking-[0.5px] max-sm:text-[13px]">
              프리미엄 IT 아웃소싱 1등
              <br />
              이랜서에서 소개하는 다양한 프로젝트를 만나보세요.
            </p>
          </div>
          <Link
            href="/guide"
            className="inline-flex h-[32px] px-[8px] justify-center items-center rounded-[4px] shrink-0 border border-[#ffffff33] max-sm:h-[24px]"
          >
            <span className="text-[#f3f4f6] font-normal text-[12px] -tracking-[0.5px]">
              이용안내
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-end mt-[16px] gap-[10px]">
          <div className="text-[#f3f4f6] text-[14px] font-normal -tracking-[0.5px] max-sm:hidden">
            더 정확한 추천 받고싶다면?
          </div>
          <div className="flex items-center max-sm:gap-[2px] border-b border-[#ffffff66]">
            <Link
              href="/login"
              className="flex justify-center items-center shrink-0 h-[20px]"
            >
              <span className="text-[#fff] text-[16px] font-bold -tracking-[0.5px] max-sm:text-[13px] max-sm:leading-[20px] max-sm:mr-[2px]">
                프로젝트 등록하기
              </span>
              <img
                src="/images/icons/svgexport-16.svg"
                className="block max-sm:hidden"
              />
              <img
                src="/images/icons/svgexport-1.svg"
                className="hidden max-sm:block"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
