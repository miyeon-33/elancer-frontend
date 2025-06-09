export default function Customer() {
  return (
    <div className="max-md:px-[20px] max-sm:px-[20px] py-[160px] max-w-[1920px] mx-auto ">
      <div className="flex flex-col gap-[32px] justify-center items-center w-full relative">
        <h2 className="flex text-center justify-center items-center font-bold text-[32px] text-[#1b1c1e]">
          이랜서는 다양한 고객사와
          <br />
          성공적으로 프로젝트를 진행하고 있습니다
        </h2>
        <div className="w-full overflow-hidden relative border h-[500px]">
          {/* <div className="absolute left-0 top-0 w-[30%] h-full z-10 bg-gradient-to-r from-[#f6f7f9] via-[#f6f7f9] to-[rgba(246,247,249,0)]"></div> */}
          <div className="flex justify-start items-center w-[4480px]">
            <div className="flex justify-center items-center w-[280px] h-[136px]">
              <img src="/images/icons/logo-samsung.6b679ce2.svg" />
            </div>
            <div className="flex justify-center items-center w-[280px] h-[136px]">
              <img src="/images/icons/logo-mobis.f8e56373.svg" />
            </div>
            <div className="flex justify-center items-center w-[280px] h-[136px]">
              <img src="/images/icons/logo-livart.17cb4d44.svg" />
            </div>
            <div className="flex justify-center items-center w-[280px] h-[136px]">
              <img src="/images/icons/logo-lotte-store.18ef68f9.svg" />
            </div>
            <div className="flex justify-center items-center w-[280px] h-[136px]">
              <img src="/images/icons/logo-gmarket.af827ae7.svg" />
            </div>
            <div className="flex justify-center items-center w-[280px] h-[136px]">
              <img src="/images/icons/logo-shinhanlife.a3380bba.svg" />
            </div>
            <div className="flex justify-center items-center w-[280px] h-[136px]">
              <img src="/images/icons/logo-sktelecom.28e9ffab.svg" />
            </div>
          </div>
          {/* <div className="absolute right-0 top-0 w-[30%] h-full z-10 bg-gradient-to-l from-[#f6f7f9] via-[#f6f7f9] to-[rgba(246,247,249,0)]"></div> */}
        </div>
      </div>
    </div>
  );
}
