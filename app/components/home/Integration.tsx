import Link from 'next/link';

export default function Integration() {
  return (
    <div className="max-w-[2560px] w-[calc(100%-80px)] rounded-[28px] mx-auto mt-[28px] max-md:w-[calc(100%-40px)]">
      <div className="mx-auto max-w-[1120px] py-[120px] max-md:py-[60px]">
        <h3
          className="text-[36px] leading-[1.4] font-bold break-keep text-center text-gray-600
        max-md:text-[24px] max-md:leading-[1.5]"
        >
          빠르고 간편한 전국민 PC 필수품, 알툴즈
        </h3>
        <ul
          className="flex justify-start items-start flex-wrap gap-y-[60px] gap-x-[20px] mt-[80px]
        max-md:mt-[60px] max-md:justify-between max-md:gap-y-[40px] max-sm:mt-[40px]
        max-sm:gap-x-0 max-sm:gap-y-[16px]"
        >
          {/* 통합팩 */}
          <li className="w-[calc(25%-15px)] max-md:w-[calc(50%-10px)] max-sm:w-full transition-all duration-200 hover:-translate-y-[10px] max-md:hover:translate-y-0">
            <Link
              href="/products/ALTOOLS"
              className="rounded-[16px] overflow-hidden block shadow-[0_0_2px_rgba(0,0,0,0.08),4px_12px_36px_rgba(0,0,0,0.09)]"
            >
              <img
                src="/images/img_product_altools.png"
                alt="통합팩"
                className="object-cover w-full h-[100px]"
              />
              <div className="min-h-[240px] pt-[20px] px-[20px] pb-[24px] relative max-sm:min-h-0">
                <h4
                  className="flex justify-start items-center text-[20px] leading-[1.4]
                font-bold break-keep gap-[10px] min-h-[44px] text-gray-600"
                >
                  알툴즈 통합팩
                </h4>
                <p className="text-[13px] pt-[20px] text-gray-600 max-md:text-[14px] max-md:pt-[12px]">
                  내 PC사용을 좀 더 간편하고 편리하게! <br />
                  알툴즈 통합팩 한번의 설치로 내 PC에 필요한 모든 것이
                  준비됩니다.
                </p>
                <em
                  className="absolute right-[20px] bottom-[24px] text-[#08f] flex items-center
                text-[13px] max-sm:static max-sm:pt-[12px] max-sm:mt-[12px] max-sm:justify-end"
                >
                  <p>자세히보기</p>
                  <img
                    src="/images/icons/blue.svg"
                    alt="자세히보기"
                    className="w-[12px] h-[12px] ml-[2px]"
                  />
                </em>
              </div>
            </Link>
          </li>
          {/* 알집 */}
          <li className="w-[calc(25%-15px)] max-md:w-[calc(50%-10px)] max-sm:w-full transition-all duration-200 hover:-translate-y-[10px] max-md:hover:translate-y-0">
            <Link
              href="/products/ALZIP"
              className="rounded-[16px] overflow-hidden block shadow-[0_0_2px_rgba(0,0,0,0.08),4px_12px_36px_rgba(0,0,0,0.09)]"
            >
              <img
                src="/images/img_product_alzip.png"
                alt="통합팩"
                className="object-cover w-full h-[100px]"
              />
              <div className="min-h-[240px] pt-[20px] px-[20px] pb-[24px] relative max-sm:min-h-0">
                <div className="flex justify-start items-center gap-[10px] min-h-[44px]">
                  <img
                    src="/images/icon_alzip.png"
                    alt="알집"
                    className="w-[44px] h-[44px] rounded-[8px]"
                  />
                  <p className="text-[20px] leading-[1.4] font-bold break-keep text-gray-600">
                    알집
                  </p>
                </div>
                <p className="text-[13px] pt-[20px] text-gray-600 max-md:text-[14px] max-md:pt-[12px]">
                  다양한 압축파일 포맷 지원으로 파일 압축하기와 압축풀기에
                  뛰어난 무료 압축프로그램입니다.
                </p>
                <em
                  className="absolute right-[20px] bottom-[24px] flex items-center text-[13px]
                text-[#08f] max-sm:static max-sm:pt-[12px] max-sm:mt-[12px] max-sm:justify-end"
                >
                  <p>자세히보기</p>
                  <img
                    src="/images/icons/blue.svg"
                    alt="자세히보기"
                    className="w-[12px] h-[12px] ml-[2px]"
                  />
                </em>
              </div>
            </Link>
          </li>
          {/* 알약 */}
          <li className="w-[calc(25%-15px)] max-md:w-[calc(50%-10px)] max-sm:w-full transition-all duration-200 hover:-translate-y-[10px] max-md:hover:translate-y-0">
            <Link
              href="/products/ALYAC"
              className="rounded-[16px] overflow-hidden block shadow-[0_0_2px_rgba(0,0,0,0.08),4px_12px_36px_rgba(0,0,0,0.09)]"
            >
              <img
                src="/images/img_product_alyac.png"
                alt="알약"
                className="object-cover w-full h-[100px]"
              />
              <div className="min-h-[240px] pt-[20px] px-[20px] pb-[24px] relative max-sm:min-h-0">
                <div className="flex justify-start items-center gap-[10px] min-h-[44px]">
                  <img
                    src="/images/icon_alyac.png"
                    alt="알약"
                    className="w-[44px] h-[44px] rounded-[8px]"
                  />
                  <p className="text-[20px] leading-[1.4] font-bold break-keep text-gray-600">
                    알약
                  </p>
                </div>
                <p className="text-[13px] pt-[20px] text-gray-600 max-md:text-[14px] max-md:pt-[12px]">
                  전국민 백신 프로그램 알약!
                  <br />
                  똑똑한 백신 프로그램 알약으로 바이러스, 악성코드를 검사하고
                  제거해보세요.
                </p>
                <em
                  className="absolute right-[20px] bottom-[24px] flex items-center text-[13px]
                text-[#08f] max-sm:static max-sm:pt-[12px] max-sm:mt-[12px] max-sm:justify-end"
                >
                  <p>자세히보기</p>
                  <img
                    src="/images/icons/blue.svg"
                    alt="자세히보기"
                    className="w-[12px] h-[12px] ml-[2px]"
                  />
                </em>
              </div>
            </Link>
          </li>
          {/* 알씨 */}
          <li className="w-[calc(25%-15px)] max-md:w-[calc(50%-10px)] max-sm:w-full transition-all duration-200 hover:-translate-y-[10px] max-md:hover:translate-y-0">
            <Link
              href="/products/ALSEE"
              className="rounded-[16px] overflow-hidden block shadow-[0_0_2px_rgba(0,0,0,0.08),4px_12px_36px_rgba(0,0,0,0.09)]"
            >
              <img
                src="/images/img_product_alsee.png"
                alt="알씨"
                className="object-cover w-full h-[100px]"
              />
              <div className="min-h-[240px] pt-[20px] px-[20px] pb-[24px] relative max-sm:min-h-0">
                <div className="flex justify-start items-center gap-[10px] min-h-[44px]">
                  <img
                    src="/images/icon_alsee.png"
                    alt="알씨"
                    className="w-[44px] h-[44px] rounded-[8px]"
                  />
                  <p className="text-[20px] leading-[1.4] font-bold break-keep text-gray-600">
                    알씨
                  </p>
                </div>
                <p className="text-[13px] pt-[20px] text-gray-600 max-md:text-[14px] max-md:pt-[12px]">
                  알씨는 사진 편집부터 동영상 만들기, 사진 포맷 변환, 자동회전,
                  일괄편집, 사진 꾸미기 등 편리한 기능을 제공하는 이미지 뷰어
                  프로그램입니다.
                </p>
                <em
                  className="absolute right-[20px] bottom-[24px] flex items-center text-[13px]
                text-[#08f] max-sm:static max-sm:pt-[12px] max-sm:mt-[12px] max-sm:justify-end"
                >
                  <p>자세히보기</p>
                  <img
                    src="/images/icons/blue.svg"
                    alt="자세히보기"
                    className="w-[12px] h-[12px] ml-[2px]"
                  />
                </em>
              </div>
            </Link>
          </li>
          {/* 알캡처 */}
          <li className="w-[calc(25%-15px)] max-md:w-[calc(50%-10px)] max-sm:w-full transition-all duration-200 hover:-translate-y-[10px] max-md:hover:translate-y-0">
            <Link
              href="/products/ALCAPTURE"
              className="rounded-[16px] overflow-hidden block shadow-[0_0_2px_rgba(0,0,0,0.08),4px_12px_36px_rgba(0,0,0,0.09)]"
            >
              <img
                src="/images/img_product_alcapture.png"
                alt="알캡처"
                className="object-cover w-full h-[100px]"
              />
              <div className="min-h-[240px] pt-[20px] px-[20px] pb-[24px] relative max-sm:min-h-0">
                <div className="flex justify-start items-center gap-[10px] min-h-[44px]">
                  <img
                    src="/images/icon_120_alcapture.png"
                    alt="알캡처"
                    className="w-[44px] h-[44px] rounded-[8px]"
                  />
                  <p className="text-[20px] leading-[1.4] font-bold break-keep text-gray-600">
                    알캡처
                  </p>
                </div>
                <p className="text-[13px] pt-[20px] text-gray-600 max-md:text-[14px] max-md:pt-[12px]">
                  모니터 화면 안의 무엇이든 원하는 순간에 보이는 그대로
                  캡처해주는 화면 캡쳐 프로그램 입니다.
                </p>
                <em
                  className="absolute right-[20px] bottom-[24px] flex items-center text-[13px]
                text-[#08f] max-sm:static max-sm:pt-[12px] max-sm:mt-[12px] max-sm:justify-end"
                >
                  <p>자세히보기</p>
                  <img
                    src="/images/icons/blue.svg"
                    alt="자세히보기"
                    className="w-[12px] h-[12px] ml-[2px]"
                  />
                </em>
              </div>
            </Link>
          </li>
          {/* 알PDF */}
          <li className="w-[calc(25%-15px)] max-md:w-[calc(50%-10px)] max-sm:w-full transition-all duration-200 hover:-translate-y-[10px] max-md:hover:translate-y-0">
            <Link
              href="/products/ALPDF"
              className="rounded-[16px] overflow-hidden block shadow-[0_0_2px_rgba(0,0,0,0.08),4px_12px_36px_rgba(0,0,0,0.09)]"
            >
              <img
                src="/images/img_product_alpdf.png"
                alt="알PDF"
                className="object-cover w-full h-[100px]"
              />
              <div className="min-h-[240px] pt-[20px] px-[20px] pb-[24px] relative max-sm:min-h-0">
                <div className="flex justify-start items-center gap-[10px] min-h-[44px]">
                  <img
                    src="/images/icon_120_alpdf.png"
                    alt="알PDF"
                    className="w-[44px] h-[44px] rounded-[8px]"
                  />
                  <p className="text-[20px] leading-[1.4] font-bold break-keep text-gray-600">
                    알PDF
                  </p>
                </div>
                <p className="text-[13px] pt-[20px] text-gray-600 max-md:text-[14px] max-md:pt-[12px]">
                  알PDF 뷰어는 PDF를 다양한 포맷으로 변환할 수 있고, PDF 합치기,
                  PDF 용량 줄이기, 수정 등 PDF를 자유롭게 편집할 수 있는 PDF
                  변환/편집 프로그램입니다.
                </p>
                <em
                  className="absolute right-[20px] bottom-[24px] flex items-center text-[13px]
                text-[#08f] max-sm:static max-sm:pt-[12px] max-sm:mt-[12px] max-sm:justify-end"
                >
                  <p>자세히보기</p>
                  <img
                    src="/images/icons/blue.svg"
                    alt="자세히보기"
                    className="w-[12px] h-[12px] ml-[2px]"
                  />
                </em>
              </div>
            </Link>
          </li>
          {/* 알송 */}
          <li className="w-[calc(25%-15px)] max-md:w-[calc(50%-10px)] max-sm:w-full transition-all duration-200 hover:-translate-y-[10px] max-md:hover:translate-y-0">
            <Link
              href="/products/ALSONG"
              className="rounded-[16px] overflow-hidden block shadow-[0_0_2px_rgba(0,0,0,0.08),4px_12px_36px_rgba(0,0,0,0.09)]"
            >
              <img
                src="/images/img_product_alsong.png"
                alt="알송"
                className="object-cover w-full h-[100px]"
              />
              <div className="min-h-[240px] pt-[20px] px-[20px] pb-[24px] relative max-sm:min-h-0">
                <div className="flex justify-start items-center gap-[10px] min-h-[44px]">
                  <img
                    src="/images/icon_120_alsong.png"
                    alt="알송"
                    className="w-[44px] h-[44px] rounded-[8px]"
                  />
                  <p className="text-[20px] leading-[1.4] font-bold break-keep text-gray-600">
                    알송
                  </p>
                </div>
                <p className="text-[13px] pt-[20px] text-gray-600 max-md:text-[14px] max-md:pt-[12px]">
                  음악과 가사를 동시에 즐길 수 있는 알송은 실시간 싱크가사,
                  어학기능을 제공하는 음악플레이어입니다.
                </p>
                <em
                  className="absolute right-[20px] bottom-[24px] flex items-center text-[13px]
                text-[#08f] max-sm:static max-sm:pt-[12px] max-sm:mt-[12px] max-sm:justify-end"
                >
                  <p>자세히보기</p>
                  <img
                    src="/images/icons/blue.svg"
                    alt="자세히보기"
                    className="w-[12px] h-[12px] ml-[2px]"
                  />
                </em>
              </div>
            </Link>
          </li>
          {/* 알드라이브 */}
          <li className="w-[calc(25%-15px)] max-md:w-[calc(50%-10px)] max-sm:w-full transition-all duration-200 hover:-translate-y-[10px] max-md:hover:translate-y-0">
            <Link
              href="/products/ALDRIVE"
              className="rounded-[16px] overflow-hidden block shadow-[0_0_2px_rgba(0,0,0,0.08),4px_12px_36px_rgba(0,0,0,0.09)]"
            >
              <img
                src="/images/img_product_aldrive.png"
                alt="알드라이브"
                className="object-cover w-full h-[100px]"
              />
              <div className="min-h-[240px] pt-[20px] px-[20px] pb-[24px] relative max-sm:min-h-0">
                <div className="flex justify-start items-center gap-[10px] min-h-[44px]">
                  <img
                    src="/images/icon_120_aldrive.png"
                    alt="알드라이브"
                    className="w-[44px] h-[44px] rounded-[8px]"
                  />
                  <p className="text-[20px] leading-[1.4] font-bold break-keep text-gray-600">
                    알드라이브
                  </p>
                </div>
                <p className="text-[13px] pt-[20px] text-gray-600 max-md:text-[14px] max-md:pt-[12px]">
                  클라이언트와 서버 간의 파일 송수신 기능 외에, WebDAV 등 다양한
                  프로토콜 파일 전송을 지원합니다.
                </p>
                <em
                  className="absolute right-[20px] bottom-[24px] flex items-center text-[13px]
                text-[#08f] max-sm:static max-sm:pt-[12px] max-sm:mt-[12px] max-sm:justify-end"
                >
                  <p>자세히보기</p>
                  <img
                    src="/images/icons/blue.svg"
                    alt="자세히보기"
                    className="w-[12px] h-[12px] ml-[2px]"
                  />
                </em>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
