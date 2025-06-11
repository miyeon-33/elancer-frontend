export default function Section2() {
  return (
    <div className="bg-[rgb(245,245,247)] h-[620px] bg-[50%_50%] bg-cover bg-no-repeat max-sm:h-auto max-sm:pt-[80px] max-sm:px-[20px] max-sm:pb-[100px]">
      <div className="mx-auto max-w-[1120px] flex justify-between items-center h-full max-sm:flex-col max-sm:gap-y-[60px] max-sm:h-auto">
        <div className="basis-[41%] text-left order-2 pb-[32px] pl-[20px] max-sm:order-1">
          <h3 className="text-[36px] font-bold break-keep text-gray-600 max-sm:text-[24px] max-sm:text-center">
            PC세팅에 최적화 된
            <br />
            알툴즈 라인업
          </h3>
          <p className="text-[18px] text-[rgba(26,26,26,0.8)] break-keep pt-[32px] max-sm:text-[15px] max-sm:pt-[20px] max-sm:text-center">
            공개용 : 알집, 알씨, 알약, 알PDF, 알캡처, 알송, 알드라이브
          </p>
        </div>
        <div className="order-1 basis-[55%] leading-none max-sm:order-2 max-sm:max-w-[620px]">
          <img
            src="/images/feature2.png"
            className="max-w-[540px] w-full h-auto mx-auto block"
          />
        </div>
      </div>
    </div>
  );
}
