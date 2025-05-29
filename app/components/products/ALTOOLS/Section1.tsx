export default function Section1() {
  return (
    <div className="bg-gradient-to-r from-[#ff7557] to-[#ff5995] bg-opacity-50 h-[620px] max-sm:h-auto max-sm:pt-[80px] max-sm:px-[20px] max-sm:pb-[100px]">
      <div className="mx-auto max-w-[1120px] flex justify-between items-center h-full max-sm:flex-col max-sm:gap-y-[60px] max-sm:h-auto">
        <div className="basis-[41%] text-left order-1 pb-[32px] pl-[20px] max-sm:text-center max-sm:p-0">
          <h3 className="text-[#fff] text-[36px] font-bold break-keep max-sm:text-[24px]">
            알툴즈 모든 제품을
            <br />한 번에.
          </h3>
          <p className="text-white/80 text-[18px] break-keep pt-[32px] max-sm:text-[15px] max-sm:pt-[20px]">
            알툴즈 통합팩 한 번의 설치로
            <br />내 PC에 필요한 모든 것이 준비됩니다.
          </p>
        </div>
        <div className="order-2 basis-[55%] leading-none max-sm:max-w-[620px]">
          <img
            src="/images/feature.png"
            className="max-w-[540px] w-full h-auto mx-auto block"
          />
        </div>
      </div>
    </div>
  );
}
