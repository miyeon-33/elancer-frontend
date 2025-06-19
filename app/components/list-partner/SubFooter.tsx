import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full h-[258px] bg-[#1b1c1e] border-t border-[#161719] max-sm:border-0 max-sm:h-auto">
      <div className="flex flex-col py-[32px] px-[40px] max-w-[1200px] mx-auto max-sm:p-[24px] max-sm:items-start max-sm:gap-[16px]">
        <nav className="flex justify-between">
          <div className="flex items-center gap-[24px] max-sm:items-start max-sm:gap-[6px] max-sm:flex-wrap">
            <Link
              href="/list-enterprise"
              className="text-[#f3f4f6] text-[15px] font-semibold max-sm:flex max-sm:items-center max-sm:py-[8px] max-sm:px-[16px] max-sm:gap-[4px] max-sm:rounded-[4px] max-sm:border max-sm:border-[#101011] max-sm:text-[#ececf1] max-sm:text-[12px]"
            >
              <img
                src="/images/icons/ico-user-profile-check.bf2ba85a.svg"
                className="hidden max-sm:block"
              />
              프리랜서 보기
            </Link>
            <Link
              href="/list-partner"
              className="text-[#f3f4f6] text-[15px] font-semibold max-sm:flex max-sm:items-center max-sm:py-[8px] max-sm:px-[16px] max-sm:gap-[4px] max-sm:rounded-[4px] max-sm:border max-sm:border-[#101011] max-sm:text-[#ececf1] max-sm:text-[12px]"
            >
              <img
                src="/images/icons/ico-file-search.2754afec.svg"
                className="hidden max-sm:block"
              />
              프로젝트 보기
            </Link>
            <Link
              href="/blog"
              className="text-[#f3f4f6] text-[15px] font-semibold max-sm:flex max-sm:items-center max-sm:py-[8px] max-sm:px-[16px] max-sm:gap-[4px] max-sm:rounded-[4px] max-sm:border max-sm:border-[#101011] max-sm:text-[#ececf1] max-sm:text-[12px]"
            >
              <img
                src="/images/icons/ico-message-chat.e61ce2bc.svg"
                className="hidden max-sm:block"
              />
              블로그
            </Link>
            <Link
              href="https://www.ecs153.com/"
              className="text-[#f3f4f6] text-[15px] font-semibold max-sm:flex max-sm:items-center max-sm:py-[8px] max-sm:px-[16px] max-sm:gap-[4px] max-sm:rounded-[4px] max-sm:border max-sm:border-[#101011] max-sm:text-[#ececf1] max-sm:text-[12px]"
            >
              <img
                src="/images/icons/ico-lightbulb.145d240c.svg"
                className="hidden max-sm:block"
              />
              코워킹스페이스
            </Link>
            <Link
              href="https://www.elancerglobal.com/blog/"
              className="text-[#f3f4f6] text-[15px] font-semibold max-sm:flex max-sm:items-center max-sm:py-[8px] max-sm:px-[16px] max-sm:gap-[4px] max-sm:rounded-[4px] max-sm:border max-sm:border-[#101011] max-sm:text-[#ececf1] max-sm:text-[12px]"
            >
              <img
                src="/images/icons/ico-global.769a1243.svg"
                className="hidden max-sm:block"
              />
              Global Blog
            </Link>
            <Link
              href="/howtouse-service"
              className="text-[#f3f4f6] text-[15px] font-semibold max-sm:flex max-sm:items-center max-sm:py-[8px] max-sm:px-[16px] max-sm:gap-[4px] max-sm:rounded-[4px] max-sm:border max-sm:border-[#101011] max-sm:text-[#ececf1] max-sm:text-[12px]"
            >
              <img
                src="/images/icons/ico-file-question.c1773bea.svg"
                className="hidden max-sm:block"
              />
              FAQ
            </Link>
          </div>
          <div className="flex items-center gap-[16px] max-sm:hidden">
            <Link
              href="/company"
              className="text-[#c9c8cd] text-[13px] font-semibold -tracking-[0.5px]"
            >
              회사소개
            </Link>
            <Link
              href="/terms"
              className="text-[#c9c8cd] text-[13px] font-semibold -tracking-[0.5px]"
            >
              이용약관
            </Link>
            <Link
              href="/policy"
              className="text-[#c9c8cd] text-[13px] font-semibold -tracking-[0.5px]"
            >
              개인정보처리방침
            </Link>
          </div>
        </nav>
        <div className="pt-[56px] flex justify-between items-end w-full max-sm:pt-0 max-sm:flex-col max-sm:items-start max-sm:pb-[16px]">
          <div className="max-sm:flex max-sm:flex-col max-sm:items-start max-sm:self-stretch max-sm:gap-[8px]">
            <div className="inline-flex items-center gap-[12px] max-sm:flex max-sm:justify-between max-sm:self-stretch">
              <img
                src="images/icons/ic-footer-logo.5bbbc0f9.svg"
                className="max-sm:w-[24px]"
              />
              <div className="hidden max-sm:flex max-sm:items-start max-sm:gap-[8px]">
                <Link href="https://www.instagram.com/elancer_kr/">
                  <img src="/images/instagram-mo.png" />
                </Link>
                <Link href="https://www.facebook.com/elancerkr/photos/?_rdr">
                  <img src="/images/facebook-mo.png" className="w-[24px]" />
                </Link>
                <Link href="https://www.youtube.com/@ITfreelancer">
                  <img src="/images/youtube-mo.png" className="w-[24px]" />
                </Link>
              </div>
              <div className="text-[#636773] text-[12px] font-normal -tracking-[0.5px] block max-sm:hidden">
                <div className="flex items-center gap-[12px]">
                  <span>(주)이랜서</span>
                  <span>대표이사 : 박우진</span>
                  <span>서울특별시 강남구 테헤란로 410, 금강타워 11층</span>
                </div>
                <div className="flex items-center gap-[12px]">
                  <span>전화 : 02-545-0042</span>
                  <span>팩스 : 02-6008-2059</span>
                </div>
                <div className="flex items-center gap-[12px]">
                  <span>사업자번호 : 209-81-25311</span>
                  <span>직업소개사업 등록번호 : 제2004-3220081-11-500078</span>
                  <span>개인정보보호정책 책임자 : 송상권</span>
                </div>
              </div>
            </div>
            <div className="hidden max-sm:flex max-sm:justify-between max-sm:w-full">
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col w-full items-start gap-[4px]">
                  <span className="text-[#636773] text-[11px] font-normal">
                    (주)이랜서 대표이사 : 박우진
                  </span>
                  <span className="text-[#636773] text-[11px] font-normal">
                    서울특별시 강남구 테헤란로 410, 금강타워 11층
                  </span>
                </div>
                <div className="flex items-center gap-[8px] text-[#636773] text-[11px] font-semibold">
                  <span>전화 : 02-545-0042</span>
                  <span>팩스 : 02-6008-2059</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-[8px] pt-[28px]">
                <Link
                  href="https://play.google.com/store/apps/details?id=kr.co.vividnext.elancer"
                  className="flex items-center justify-center gap-[6px] bg-[#fff] rounded-[6px] border border-[#e1e4ea] py-[8px] px-[12px]"
                >
                  <img src="/images/icons/google-play-icon.e2f2105e.svg" />
                  <p className="font-semibold text-[12px] text-[#38383d] -tracking-[0.5px]">
                    Google Play
                  </p>
                </Link>
                <Link
                  href="https://apps.apple.com/id/app/%EC%9D%B4%EB%9E%9C%EC%84%9C-elancer-%ED%94%84%EB%A6%AC%EB%9E%9C%EC%84%9C-%ED%94%8C%EB%9E%AB%ED%8F%BC/id1595556096"
                  className="flex items-center justify-center gap-[6px] bg-[#fff] rounded-[6px] border border-[#e1e4ea] py-[8px] px-[12px] w-full"
                >
                  <img src="/images/icons/apple-store-icon.1885b6a7.svg" />
                  <p className="font-semibold text-[12px] text-[#38383d] -tracking-[0.5px]">
                    App Store
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[4px] max-sm:hidden">
            <Link
              href="https://play.google.com/store/apps/details?id=kr.co.vividnext.elancer"
              className="flex items-center justify-center gap-[6px] bg-[#fff] rounded-[6px] border border-[#eee] py-[8px] px-[12px]"
            >
              <img src="/images/icons/google-play-icon.e2f2105e.svg" />
              <p className="font-semibold text-[12px] text-[#000]">
                Google Play
              </p>
            </Link>
            <Link
              href="https://apps.apple.com/id/app/%EC%9D%B4%EB%9E%9C%EC%84%9C-elancer-%ED%94%84%EB%A6%AC%EB%9E%9C%EC%84%9C-%ED%94%8C%EB%9E%AB%ED%8F%BC/id1595556096"
              className="flex items-center justify-center gap-[6px] bg-[#fff] rounded-[6px] border border-[#eee] py-[8px] px-[12px]"
            >
              <img src="/images/icons/apple-store-icon.1885b6a7.svg" />
              <p className="font-semibold text-[12px] text-[#000]">App Store</p>
            </Link>
          </div>
          <div className="hidden max-sm:block">
            <div className="flex w-full flex-col items-start gap-[4px] text-[#777a83] text-[11px] font-normal -tracking-[0.5px]">
              <span>사업자번호 : 209-81-25311</span>
              <span>직업소개사업 등록번호 : 제2004-3220081-11-500078</span>
              <span>개인정보보호정책 책임자 : 송상권</span>
            </div>
          </div>
        </div>
        <div className="hidden max-sm:flex max-sm:justify-center max-sm:items-center max-sm:gap-[12px] max-sm:self-stretch">
          <Link
            href="/company"
            className="text-[#c9c8cd] text-[13px] font-semibold"
          >
            회사소개
          </Link>
          <div className="w-[1px] h-[12px] bg-[#101011]"></div>
          <Link
            href="/terms"
            className="text-[#c9c8cd] text-[13px] font-semibold"
          >
            이용약관
          </Link>
          <div className="w-[1px] h-[12px] bg-[#101011]"></div>
          <Link
            href="/policy"
            className="text-[#c9c8cd] text-[13px] font-semibold"
          >
            개인정보처리방침
          </Link>
        </div>
        <div className="hidden max-sm:flex max-sm:py-[16px] max-sm:px-[8px] max-sm:items-center max-sm:gap-[8px] max-sm:self-stretch max-sm:justify-center">
          <div className="text-[#9d9ca3] text-[10px] font-normal -tracking-[0.5px]">
            Copyright (C) 2000 - 2025 ELANCER All Rights Reserved.
          </div>
        </div>
      </div>
      <div className="py-[12px] border-t border-[rgb(16,16,17)] bg-[#1b1c1e] max-sm:hidden block">
        <div className="flex justify-between items-center px-[40px] max-w-[1200px] mx-auto">
          <div className="text-[#636773] text-[12px] font-normal -tracking-[0.5px]">
            Copyright (C) 2000 - 2025 ELANCER All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
