export default function AlzipSec3() {
  return (
    <div className="bg-[rgb(249,249,249)] h-[620px] max-sm:h-auto max-sm:pt-[80px] max-sm:px-[20px] max-sm:pb-[100px]">
      <div className="mx-auto max-w-[1120px] flex justify-between items-center h-full max-sm:flex-col max-sm:gap-y-[60px] max-sm:h-auto">
        <div className="basis-[41%] text-left order-1 pb-[32px] pl-[20px] max-sm:text-center max-sm:p-0">
          <h3 className="text-gray-600 text-[36px] font-bold break-keep max-sm:text-[24px]">
            의심 파일은 안전 폴더에
          </h3>
          <p className="text-[rgba(26,26,26,0.8)] text-[18px] break-keep pt-[32px] max-sm:text-[15px] max-sm:pt-[20px]">
            악성코드 의심 파일이 포함된 압축 파일 해제 및
            <br />
            실행 시 경고창 표출, 안전 폴더에 압축 풀기 지원합니다.
          </p>
        </div>
        <div className="order-2 basis-[55%] leading-none max-sm:max-w-[620px]">
          <img
            src="/images/img_feature_alzip_3.png"
            className="max-w-[500px] w-full h-auto mx-auto block"
          />
        </div>
      </div>
    </div>
  );
}
