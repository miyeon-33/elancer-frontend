export default function AlzipSec1() {
  return (
    <div className="bg-[rgb(132,225,255)] h-[620px] max-sm:h-auto max-sm:pt-[80px] max-sm:px-[20px] max-sm:pb-[100px]">
      <div className="mx-auto max-w-[1120px] flex justify-between items-center h-full max-sm:flex-col max-sm:gap-y-[60px] max-sm:h-auto">
        <div className="basis-[41%] text-left order-1 pb-[32px] pl-[20px] max-sm:text-center max-sm:p-0">
          <h3 className="text-gray-600 text-[36px] font-bold break-keep max-sm:text-[24px]">
            더 빨라진 압축 해제
          </h3>
          <p className="text-[rgba(26,26,26,0.8)] text-[18px] break-keep pt-[32px] max-sm:text-[15px] max-sm:pt-[20px]">
            알집만의 고유 기술로
            <br />
            최대 700% 해제 속도가 증가하여 2초 만에
            <br />
            350MB 파일을 해제할 수 있습니다.
          </p>
          <div className="mt-[32px] max-sm:hidden">
            <p className="text-[13px] pt-[2px] text-[rgba(26,26,26,0.5)]">
              해제 속도는 포맷, PC 스펙, 사용 환경에 따라 결과가 상이할 수
              있습니다.
            </p>
          </div>
        </div>
        <div className="order-2 basis-[55%] leading-none max-sm:max-w-[620px]">
          <img
            src="/images/img_feature_alzip_1.png"
            className="max-w-[540px] w-full h-auto mx-auto block"
          />
        </div>
      </div>
    </div>
  );
}
