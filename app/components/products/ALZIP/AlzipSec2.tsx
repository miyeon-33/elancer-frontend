export default function AlzipSec2() {
  return (
    <div className="bg-[rgb(241,239,235)] h-[620px] bg-[50%_50%] bg-cover bg-no-repeat max-sm:h-auto max-sm:pt-[80px] max-sm:px-[20px] max-sm:pb-[100px]">
      <div className="mx-auto max-w-[1120px] flex justify-between items-center h-full max-sm:flex-col max-sm:gap-y-[60px] max-sm:h-auto">
        <div className="basis-[41%] text-left order-2 pb-[32px] pl-[20px] max-sm:order-1">
          <h3 className="text-[36px] font-bold break-keep text-gray-600 max-sm:text-[24px] max-sm:text-center">
            다양한 포맷 지원
          </h3>
          <p className="text-[18px] text-[rgba(26,26,26,0.8)] break-keep pt-[32px] max-sm:text-[15px] max-sm:pt-[20px] max-sm:text-center">
            자체 포맷 EGG, ALZ를 포함한
            <br />
            40여 개의 다양한 포맷을 지원합니다.
          </p>
          <div className="mt-[32px]">
            <h4 className="text-[13px] font-normal">압축 가능 포맷</h4>
            <p className="text-[13px] text-[rgba(26,26,26,0.5)] pt-[2px]">
              EGG, ALZ, ZIP, TAR, TBZ, TGZ, LZH, JAR
            </p>
            <h4 className="text-[13px] font-normal pt-[12px]">
              해제 가능 포맷
            </h4>
            <p className="text-[13px] text-[rgba(26,26,26,0.5)] pt-[2px]">
              EGG, ALZ, ARC, ARJ, B64, BH, BHX, BIN, BZ, BZ2, CAB, EAR, ENC, GZ,
              HA, HQX, ICE, IMG, ISO, JAR, LCD, LHA, LZH, MIM, NRG, PAK, RAR,
              TAR, TBZ, TBZ2, TGZ, UUE, UU, WAR, XXE, Z, ZIP, ZOO, 7Z
            </p>
          </div>
        </div>
        <div className="order-1 basis-[55%] leading-none max-sm:order-2 max-sm:max-w-[620px]">
          <img
            src="/images/img_feature_alzip_2.png"
            className="max-w-[540px] w-full h-auto mx-auto block"
          />
        </div>
      </div>
    </div>
  );
}
