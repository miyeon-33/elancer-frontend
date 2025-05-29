'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Tip() {
  const [isMoblie, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1025);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="max-w-[2560px] w-[calc(100%-80px)] rounded-[28px] mx-auto mt-[28px] max-md:w-[calc(100%-40px)]">
      <div className="py-[120px] max-md:py-[80px]">
        <h3
          className="text-[36px] font-bold break-keep text-center text-gray-600
        max-md:text-[24px]"
        >
          더욱 다양하고 쾌적하게 활용하는 꿀팁
        </h3>
        <div
          className="grid grid-cols-3 grid-rows-2 gap-[28px] mt-[80px] max-md:mt-[40px]
        max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-[20px]"
        >
          <Link
            href="/adzero/intro"
            className="py-[80px] px-[60px] row-start-1 row-end-3 col-start-1 col-end-2
            min-h-[360px] text-left rounded-[28px] relative overflow-hidden bg-[url('/images/gridBox1.png')] bg-cover bg-[100%_100%] transition-all duration-200 hover:-translate-y-[10px] group max-md:p-[20px] max-md:w-full max-md:hover:translate-y-0"
          >
            <h4
              className="text-[32px] leading-1.4 font-bold text-gray-600 break-keep
            max-md:text-[20px]"
            >
              {isMoblie ? (
                '광고 없이, 제휴 설치 없이.'
              ) : (
                <>
                  광고 없이,
                  <br />
                  제휴 설치 없이.
                </>
              )}
            </h4>
            <p className="pt-[24px] text-[15px] text-gray-600 max-md:pt-[12px]">
              쾌적한 PC환경을 제공하는
              <br />
              광고 없는 알툴즈 AD-ZERO
            </p>
            <div className="absolute top-[36px] right-[36px] w-[33px] h-[33px] bg-[url('/images/icons/tip.svg')] bg-no-repeat transition-all duration-200 group-hover:translate-x-[10px]"></div>
          </Link>
          <Link
            href="https://blog.naver.com/estpublic/222448734832"
            className="p-[36px] row-start-1 row-end-2 col-start-2 col-end-3
            min-h-[360px] text-left rounded-[28px] relative overflow-hidden bg-[url('/images/gridBox2.png')] bg-cover bg-[100%_100%] transition-all duration-200 hover:-translate-y-[10px] group max-md:w-full max-md:min-h-[220px] max-md:rounded-[16px] max-md:py-[20px] max-md:px-[24px] max-md:hover:translate-y-0"
          >
            <div className="z-20">
              <h4 className="text-[20px] leading-1.4 font-bold text-gray-600 break-keep">
                알PDF, 인쇄도 더 다양하게
              </h4>
              <p className="pt-[12px] text-[15px] text-gray-600">
                알PDF로 문서 인쇄하는 방법
              </p>
              <div className="absolute top-[36px] right-[36px] w-[33px] h-[33px] bg-[url('/images/icons/tip.svg')] bg-no-repeat transition-all duration-200 group-hover:translate-x-[10px]"></div>
            </div>
          </Link>
          <Link
            href="https://blog.naver.com/estpublic/223787263512"
            className="p-[36px] row-start-1 row-end-2 col-start-3 col-end-4
            min-h-[360px] text-left rounded-[28px] relative overflow-hidden bg-[url('/images/gridBox3.png')] bg-cover bg-[100%_100%] transition-all duration-200 hover:-translate-y-[10px] group max-md:w-full max-md:min-h-[220px] max-md:rounded-[16px] max-md:py-[20px] max-md:px-[24px] max-md:hover:translate-y-0"
          >
            <div className="z-20">
              <h4 className="text-[20px] leading-1.4 font-bold text-gray-600 break-keep">
                알캡처, 이미지 배경을 투명하게
              </h4>
              <p className="pt-[12px] text-[15px] text-gray-600">
                캡처한 이미지에서 원하는 영역만​
                <br />
                골라서 저장할 수 있어요.
              </p>
              <div className="absolute top-[36px] right-[36px] w-[33px] h-[33px] bg-[url('/images/icons/tip.svg')] bg-no-repeat transition-all duration-200 group-hover:translate-x-[10px]"></div>
            </div>
          </Link>
          <Link
            href="https://blog.naver.com/estpublic/222160800027"
            className="p-[36px] row-start-2 row-end-3 col-start-2 col-end-3
            min-h-[360px] text-left rounded-[28px] relative overflow-hidden bg-[url('/images/gridBox4.png')] bg-cover bg-[100%_100%] transition-all duration-200 hover:-translate-y-[10px] group max-md:w-full max-md:min-h-[220px] max-md:rounded-[16px] max-md:py-[20px] max-md:px-[24px] max-md:hover:translate-y-0"
          >
            <div className="z-20">
              <h4 className="text-[20px] leading-1.4 font-bold text-gray-600 break-keep">
                알집, 압축파일 이름이 깨질 때
              </h4>
              <p className="pt-[12px] text-[15px] text-gray-600">
                알집 모바일 유니코드 설정으로
                <br />
                깨짐없이 압축 해제하는 방법
              </p>
              <div className="absolute top-[36px] right-[36px] w-[33px] h-[33px] bg-[url('/images/icons/tip.svg')] bg-no-repeat transition-all duration-200 group-hover:translate-x-[10px]"></div>
            </div>
          </Link>
          <Link
            href="https://blog.naver.com/estpublic/222348990244"
            className="p-[36px] row-start-2 row-end-3 col-start-3 col-end-4
            min-h-[360px] text-left rounded-[28px] relative overflow-hidden bg-[url('/images/gridBox5.png')] bg-cover bg-[100%_100%] transition-all duration-200 hover:-translate-y-[10px] group max-md:w-full max-md:min-h-[220px] max-md:rounded-[16px] max-md:py-[20px] max-md:px-[24px] max-md:hover:translate-y-0"
          >
            <div className="z-20">
              <h4 className="text-[20px] leading-1.4 font-bold text-gray-600 break-keep">
                알씨, 급할 때는 집에서!
              </h4>
              <p className="pt-[12px] text-[15px] text-gray-600">
                알씨를 활용하여
                <br />
                셀프로 증명사진 만들기
              </p>
              <div className="absolute top-[36px] right-[36px] w-[33px] h-[33px] bg-[url('/images/icons/tip.svg')] bg-no-repeat transition-all duration-200 group-hover:translate-x-[10px]"></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
