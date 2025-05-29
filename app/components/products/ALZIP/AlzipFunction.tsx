export default function AlzipFunction() {
  return (
    <div className="pt-[160px] pb-[160px] max-md:px-[40px] max-sm:pt-[60px] max-sm:px-[20px] max-sm:pb-0">
      <div className="mx-auto max-w-[1120px]">
        <h3 className="text-[36px] font-bold break-keep text-center mb-[84px] text-gray-600 max-sm:text-[24px] max-sm:mb-[40px] max-sm:text-left">
          알집의 주요 기능을 소개합니다.
        </h3>
        <ul className="grid grid-cols-3 gap-x-[50px] gap-y-[76px] max-sm:grid-cols-2 max-sm:gap-y-[20px] max-sm:gap-x-[28px]">
          <li>
            <div className="overflow-hidden rounded-[12px] max-sm:h-auto">
              <img src="/images/alzip_banner01.png" className="w-full h-auto" />
            </div>
            <div className="pt-[16px] max-sm:pt-[8px]">
              <strong className="block text-[18px] text-gray-600 font-bold max-sm:text-[15px] max-sm:font-normal">
                원클릭 압축 해제
              </strong>
              <p className="text-[14px] pt-[8px] text-gray-600 max-sm:hidden">
                한번의 클릭으로 바탕화면, 다운로드, 압축파일 원본 경로에 압축
                풀기가 가능합니다.
              </p>
            </div>
          </li>
          <li>
            <div className="overflow-hidden rounded-[12px] max-sm:h-auto">
              <img src="/images/alzip_banner02.png" className="w-full h-auto" />
            </div>
            <div className="pt-[16px] max-sm:pt-[8px]">
              <strong className="block text-[18px] text-gray-600 font-bold max-sm:text-[15px] max-sm:font-normal">
                간편한 이미지 파일 확인
              </strong>
              <p className="text-[14px] pt-[8px] text-gray-600 max-sm:hidden">
                압축을 풀지 않아도 [아이콘] 보기 모드에서 썸네일을 통해 이미지를
                미리 확인할 수 있습니다. (알씨 설치 시 연동 기능을 통해 더
                편리하게 이미지 파일을 확인할 수 있습니다.)
              </p>
            </div>
          </li>
          <li>
            <div className="overflow-hidden rounded-[12px] max-sm:h-auto">
              <img src="/images/alzip_banner03.png" className="w-full h-auto" />
            </div>
            <div className="pt-[16px] max-sm:pt-[8px]">
              <strong className="block text-[18px] text-gray-600 font-bold max-sm:text-[15px] max-sm:font-normal">
                멀티코어 압축, 솔리드 압축, 분할압축
              </strong>
              <p className="text-[14px] pt-[8px] text-gray-600 max-sm:hidden">
                멀티코어를 사용한 더 빠른 압축을 지원하며, 솔리드 압축을 통해
                압축률을 높이거나, 압축 파일을 분할하여 관리할 수 있습니다.
                (멀티코어=ZIP 한정, 솔리드/분할=EGG 한정)
              </p>
            </div>
          </li>
          <li>
            <div className="overflow-hidden rounded-[12px] max-sm:h-auto">
              <img src="/images/alzip_banner04.png" className="w-full h-auto" />
            </div>
            <div className="pt-[16px] max-sm:pt-[8px]">
              <strong className="block text-[18px] text-gray-600 font-bold max-sm:text-[15px] max-sm:font-normal">
                언어 자동인식 및 유니코드 압축 지원
              </strong>
              <p className="text-[14px] pt-[8px] text-gray-600 max-sm:hidden">
                인코딩 언어 자동인식 기능으로 기본 유니코드부터 맥 유니코드,
                코드페이지까지 자동 인식되며, 어떠한 언어의 OS에서도 원본을
                유지하는 UTF-8 유니코드 압축을 지원합니다.
              </p>
            </div>
          </li>
          <li>
            <div className="overflow-hidden rounded-[12px] max-sm:h-auto">
              <img src="/images/alzip_banner05.png" className="w-full h-auto" />
            </div>
            <div className="pt-[16px] max-sm:pt-[8px]">
              <strong className="block text-[18px] text-gray-600 font-bold max-sm:text-[15px] max-sm:font-normal">
                알약 연동 바이러스 검사
              </strong>
              <p className="text-[14px] pt-[8px] text-gray-600 max-sm:hidden">
                바이러스 검사 기능을 통해 알약으로 압축 파일의 위험요소를
                검사하여 사전에 PC 손상을 대응할 수 있습니다.
              </p>
            </div>
          </li>
          <li>
            <div className="overflow-hidden rounded-[12px]">
              <img src="/images/alzip_banner06.png" className="w-full h-auto" />
            </div>
            <div className="pt-[16px] max-sm:pt-[8px]">
              <strong className="block text-[18px] text-gray-600 font-bold max-sm:text-[15px] max-sm:font-normal">
                리눅스에서도 알집
              </strong>
              <p className="text-[14px] pt-[8px] text-gray-600 max-sm:hidden">
                리눅스에서도 윈도우 알집과 유사한 기능, 화면으로 쉽고 빠른 압축
                및 해제가 가능합니다.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
