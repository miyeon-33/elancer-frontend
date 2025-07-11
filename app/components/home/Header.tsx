'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <header className="sticky top-0 bg-[#f6f7f9] border-b border-[#ececf1] z-20  w-full ">
      <div className=" h-[76px] justify-between px-[20px] mx-auto flex items-center max-sm:max-w-[768px] max-sm:flex-col max-sm:items-start max-sm:h-auto relative max-w-[1200px]">
        {/* 모바일 사이드메뉴 */}
        {isSideOpen && (
          <>
            <div
              className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
              onClick={() => setIsSideOpen(false)}
            ></div>
            <div className=" w-[80%] py-[36px] px-[20px]  bg-[#fff] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)] absolute left-0 top-0 z-30">
              <div className="h-[951px] flex flex-col gap-y-[24px]">
                <div className="flex flex-col items-start py-[8px] gap-[8px]">
                  <img src="/images/icons/mblogo.svg" />
                </div>
                <div>
                  <p className="text-[#58575e] text-[14px]">
                    로그인하고
                    <br />
                    이랜서의 다양한 프로젝트를 만나보세요.
                  </p>
                </div>
                <Link
                  href="/signup"
                  className="flex justify-start items-center"
                >
                  <span className="text-[#1b1c1e] text-[12px] font-normal">
                    회원가입
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </Link>
                <Link
                  href="/elogin"
                  className="flex h-[44px] py-[16px] px-[24px] justify-center items-center gap-[6px] rounded-[6px] bg-[#fa751e]"
                >
                  <span className="text-[#fff] text-[16px] font-bold">
                    로그인
                  </span>
                </Link>
                <div className="flex flex-col gap-[12px]">
                  <div className="flex flex-col items-start">
                    <Link href="#" className="py-[10px]">
                      <span className="text-[#1b1c1e] font-bold text-[18px]">
                        프리랜서 찾기
                      </span>
                    </Link>
                    <Link href="/list-partner" className="py-[10px]">
                      <span className="text-[#1b1c1e] font-bold text-[18px]">
                        프리랜서 보기
                      </span>
                    </Link>
                    <Link href="/list-partner?pf=턴키" className="py-[10px]">
                      <span className="text-[#1b1c1e] font-bold text-[18px]">
                        재택 프로젝트
                      </span>
                    </Link>
                    <Link href="#" className="py-[10px]">
                      <span className="text-[#1b1c1e] font-bold text-[18px]">
                        블로그
                      </span>
                    </Link>
                    <Link href="#" className="py-[10px]">
                      <span className="text-[#1b1c1e] font-bold text-[18px]">
                        커뮤니티
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="h-[1px] bg-[#ececf1]"></div>
                <div className="flex flex-col items-start">
                  <p className="text-[12px] text-[#8a8a93] py-[10px]">더보기</p>
                  <Link href="/company" className="py-[6px]">
                    <span className="text-[#777a83] text-[15px] font-semibold hover:text-[#ff6948]">
                      회사소개
                    </span>
                  </Link>
                  <Link href="/guide" className="py-[6px]">
                    <span className="text-[#777a83] text-[15px] font-semibold hover:text-[#ff6948]">
                      이용안내
                    </span>
                  </Link>
                  <Link href="/howtouse-service" className="py-[6px]">
                    <span className="text-[#777a83] text-[15px] font-semibold hover:text-[#ff6948]">
                      FAQ
                    </span>
                  </Link>
                  <Link href="/https://www.ecs153.com/" className="py-[6px]">
                    <span className="text-[#777a83] text-[15px] font-semibold hover:text-[#ff6948]">
                      코워킹 스페이스
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
        {/* 모바일버튼 */}
        <div className="max-sm:flex max-sm:justify-between max-sm:w-full items-center">
          <Link href="/" className="flex gap-[4px] w-[186px]">
            <img
              src="/images/icons/logo-815984.927499af.svg"
              className="w-[116px] max-sm:w-[98px] max-sm:h-[48px]"
            />
          </Link>
          <div className="max-sm:block hidden">
            <div className="flex justify-start gap-[12px]">
              <button type="button" onClick={() => setIsMenuOpen(true)}>
                <img src="/images/icons/ic-24-line-search-gray600.ff41d7e0.svg" />
              </button>
              <button type="button" onClick={() => setIsSideOpen(true)}>
                <img src="/images/icons/ic-24-line-list-gray600.a9557c58.svg" />
              </button>
            </div>
          </div>
        </div>
        {/* 토글메뉴 */}
        {isMenuOpen && (
          <>
            <div
              className="fixed top-0 left-0 w-full h-full bg-black opacity-50 hidden max-sm:block"
              onClick={() => setIsMenuOpen(false)}
            ></div>
            <div className="absolute top-0 left-0 w-full h-[60px] bg-[#fff] max-sm:block hidden py-[12px] px-[20px] gap-[8px]">
              <button className="flex w-full justify-start items-center pt-[12px] gap-[6px] text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#38383D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
                <span className="text-[16px] font-medium">통합검색</span>
              </button>
            </div>
            <div className="absolute bg-[#fff] flex left-0 top-[76px] flex-col items-center justify-start w-full max-h-[700px] pb-[32px] z-20 shadow-[0px_8px_16px_rgba(0,0,0,0.1)] max-sm:top-[55px] max-sm:pt-[16px] max-sm:px-[20px] max-sm:gap-[16px]">
              <form className="w-full max-w-[636px] mx-auto py-[32px] relative max-sm:py-0">
                <div className="absolute top-1/2 -translate-y-1/2 left-[16px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </div>
                <input
                  className="w-full flex h-[56px] rounded-[6px] border border-[#dedfe7] py-[24px] pr-[40px] pl-[48px] text-[#38383d] hover:border-[#ff5400]"
                  placeholder="어떤 프로젝트를 찾으세요?"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                {inputValue.trim() !== '' && (
                  <button
                    className="absolute right-[12px] top-1/2 -translate-y-1/2 flex items-center"
                    onClick={() => setInputValue('')}
                  >
                    <img
                      src="/images/icons/svgexport-2.svg"
                      className="w-[20px] h-[20px]"
                    />
                  </button>
                )}
              </form>
              <div className="bg-[#fff] flex flex-col gap-[8px] px-[56px] w-full max-w-[636px] max-sm:py-[32px] max-sm:px-0">
                <h1 className="text-[#1b1c1e] text-[18px] font-bold max-sm:text-[16px]">
                  추천 검색어
                </h1>
                <div className="h-[1px] bg-[#ececf1] w-full max-w-[524px] max-sm:max-w-full"></div>
                <ul className="flex flex-col gap-[16px]">
                  <li
                    className="flex gap-[16px] text-[#38383d] text-[16px] font-normal
                  max-sm:text-[14px]"
                  >
                    <h1 className="text-[16px] font-bold text-[#fa751e]">1</h1>
                    JAVA
                  </li>
                  <li className="flex gap-[16px] text-[#38383d] text-[16px] font-normal   max-sm:text-[14px]">
                    <h1 className="text-[16px] font-bold text-[#fa751e]">2</h1>
                    개발
                  </li>
                  <li className="flex gap-[16px] text-[#38383d] text-[16px] font-normal   max-sm:text-[14px]">
                    <h1 className="text-[16px] font-bold text-[#fa751e]">3</h1>
                    운영
                  </li>
                  <li className="flex gap-[16px] text-[#38383d] text-[16px] font-normal   max-sm:text-[14px]">
                    <h1 className="text-[16px] font-bold text-[#777a83]">4</h1>
                    React
                  </li>
                  <li className="flex gap-[16px] text-[#38383d] text-[16px] font-normal   max-sm:text-[14px]">
                    <h1 className="text-[16px] font-bold text-[#777a83]">5</h1>
                    반응형
                  </li>
                </ul>
              </div>
              <button
                className="bg-[#fff] flex justify-end w-full max-w-[636px] gap-[4px] px-[56px] max-sm:px-[16px]"
                onClick={() => setIsMenuOpen(false)}
              >
                <h1 className="text-[38383d] text-[14px] font-normal">닫기</h1>
                <img src="/images/icons/close-icon.ac392cb5.svg" />
              </button>
            </div>
          </>
        )}
        {/* GNB */}
        <ul className="inline-flex justify-center items-start gap-[24px] max-sm:flex max-sm:items-center max-sm:gap-[16px] max-sm:h-[55px]">
          <li className="inline-block">
            <Link href="#" className="text-[#2a2b2e] text-[16px] font-bold">
              프리랜서
            </Link>
          </li>
          <li className="inline-block">
            <Link
              href="/list-partner"
              className="text-[#2a2b2e] text-[16px] font-bold"
            >
              상주 프로젝트
            </Link>
          </li>
          <li className="inline-block">
            <Link
              href="/list-partner?pf=턴키"
              className="text-[#2a2b2e] text-[16px] font-bold"
            >
              재택 프로젝트
            </Link>
          </li>
          <li className="inline-block relative group">
            <Link href="#" className="text-[#2a2b2e] text-[16px] font-bold">
              블로그
            </Link>
            <div
              className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:inline-flex p-[8px] flex-col items-start rounded-[8px] border border-[rgba(236,236,241)] bg-[rgba(255,255,255)] shadow-[rgba(0px_0px_0px_0.08px)_0px_4px_8px_0px] mt-[8px]"
              onMouseEnter={(e) => e.currentTarget.classList.add('inline-flex')}
              onMouseLeave={(e) =>
                e.currentTarget.classList.remove('inline-flex')
              }
            >
              <Link
                href="#"
                className="w-[136px] py-[6px] px-[12px] flex items-center text-[rgb(27_28_30)] text-[14px] font-normal hover:text-[rgb(255,105,72)] hover:font-bold hover:rounded-[6px] hover:bg-[rgb(246,247,249)]"
              >
                ALL NEW
              </Link>
              <Link
                href="#"
                className="w-[136px] py-[6px] px-[12px] flex items-center text-[rgb(27_28_30)] text-[14px] font-normal hover:text-[rgb(255,105,72)]
                hover:font-bold hover:rounded-[6px] hover:bg-[rgb(246,247,249)]"
              >
                개발테크
              </Link>
              <Link
                href="#"
                className="w-[136px] py-[6px] px-[12px] flex items-center text-[rgb(27_28_30)] text-[14px] font-normal hover:text-[rgb(255,105,72)]
                hover:font-bold hover:rounded-[6px] hover:bg-[rgb(246,247,249)]"
              >
                디자인 테크
              </Link>
              <Link
                href="#"
                className="w-[136px] py-[6px] px-[12px] flex items-center text-[rgb(27_28_30)] text-[14px] font-normal hover:text-[rgb(255,105,72)]
                hover:font-bold hover:rounded-[6px] hover:bg-[rgb(246,247,249)]"
              >
                구매 테크
              </Link>
              <Link
                href="#"
                className="w-[136px] py-[6px] px-[12px] flex items-center text-[rgb(27_28_30)] text-[14px] font-normal hover:text-[rgb(255,105,72)]
                hover:font-bold hover:rounded-[6px] hover:bg-[rgb(246,247,249)]"
              >
                인사 테크
              </Link>
              <Link
                href="#"
                className="w-[136px] py-[6px] px-[12px] flex items-center text-[rgb(27_28_30)] text-[14px] font-normal hover:text-[rgb(255,105,72)]
                hover:font-bold hover:rounded-[6px] hover:bg-[rgb(246,247,249)]"
              >
                홍보 & 마케팅 테크
              </Link>
              <Link
                href="#"
                className="w-[136px] py-[6px] px-[12px] flex items-center text-[rgb(27_28_30)] text-[14px] font-normal hover:text-[rgb(255,105,72)]
                hover:font-bold hover:rounded-[6px] hover:bg-[rgb(246,247,249)]"
              >
                물류 테크
              </Link>
              <Link
                href="#"
                className="w-[136px] py-[6px] px-[12px] flex items-center text-[rgb(27_28_30)] text-[14px] font-normal hover:text-[rgb(255,105,72)]
                hover:font-bold hover:rounded-[6px] hover:bg-[rgb(246,247,249)]"
              >
                전략 테크
              </Link>
              <Link
                href="#"
                className="w-[136px] py-[6px] px-[12px] flex items-center text-[rgb(27_28_30)] text-[14px] font-normal hover:text-[rgb(255,105,72)]
                hover:font-bold hover:rounded-[6px] hover:bg-[rgb(246,247,249)]"
              >
                제조 테크
              </Link>
              <Link
                href="#"
                className="w-[136px] py-[6px] px-[12px] flex items-center text-[rgb(27_28_30)] text-[14px] font-normal hover:text-[rgb(255,105,72)]
                hover:font-bold hover:rounded-[6px] hover:bg-[rgb(246,247,249)]"
              >
                Balance UP
              </Link>
              <Link
                href="#"
                className="w-[136px] py-[6px] px-[12px] flex items-center text-[rgb(27_28_30)] text-[14px] font-normal hover:text-[rgb(255,105,72)]
                hover:font-bold hover:rounded-[6px] hover:bg-[rgb(246,247,249)]"
              >
                박우진 칼럼
              </Link>
              <Link
                href="#"
                className="w-[136px] py-[6px] px-[12px] flex items-center text-[rgb(27_28_30)] text-[14px] font-normal hover:text-[rgb(255,105,72)]
                hover:font-bold hover:rounded-[6px] hover:bg-[rgb(246,247,249)]"
              >
                실리콘밸리 AI 칼럼
              </Link>
            </div>
          </li>
          <li className="inline-block relative group">
            <Link href="#" className="text-[#2a2b2e] text-[16px] font-bold">
              커뮤니티
            </Link>
            <div
              className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:inline-flex p-[8px] flex-col items-start rounded-[8px] border border-[rgba(236,236,241)] bg-[rgba(255,255,255)] shadow-[rgba(0px_0px_0px_0.08px)_0px_4px_8px_0px] mt-[8px]"
              onMouseEnter={(e) => e.currentTarget.classList.add('inline-flex')}
              onMouseLeave={(e) =>
                e.currentTarget.classList.remove('inline-flex')
              }
            >
              <Link
                href="#"
                className="w-[136px] py-[6px] px-[12px] flex items-center text-[rgb(27_28_30)] text-[14px] font-normal hover:text-[rgb(255,105,72)]
                hover:font-bold hover:rounded-[6px] hover:bg-[rgb(246,247,249)]"
              >
                이랜서 NEWS
              </Link>
              <Link
                href="#"
                className="w-[136px] py-[6px] px-[12px] flex items-center text-[rgb(27_28_30)] text-[14px] font-normal hover:text-[rgb(255,105,72)]
                hover:font-bold hover:rounded-[6px] hover:bg-[rgb(246,247,249)] break-keep
                whitespace-nowrap flex-nowrap"
              >
                이랜서 런클럽 (ERC)
              </Link>
              <Link
                href="#"
                className="w-[136px] py-[6px] px-[12px] flex items-center text-[rgb(27_28_30)] text-[14px] font-normal hover:text-[rgb(255,105,72)]
                hover:font-bold hover:rounded-[6px] hover:bg-[rgb(246,247,249)]"
              >
                이베프
              </Link>
              <Link
                href="#"
                className="w-[136px] py-[6px] px-[12px] flex items-center text-[rgb(27_28_30)] text-[14px] font-normal hover:text-[rgb(255,105,72)]
                hover:font-bold hover:rounded-[6px] hover:bg-[rgb(246,247,249)]"
              >
                언론보도
              </Link>
              <Link
                href="#"
                className="w-[136px] py-[6px] px-[12px] flex items-center text-[rgb(27_28_30)] text-[14px] font-normal hover:text-[rgb(255,105,72)]
                hover:font-bold hover:rounded-[6px] hover:bg-[rgb(246,247,249)]"
              >
                이랜서 생각
              </Link>
              <Link
                href="#"
                className="w-[136px] py-[6px] px-[12px] flex items-center text-[rgb(27_28_30)] text-[14px] font-normal hover:text-[rgb(255,105,72)]
                hover:font-bold hover:rounded-[6px] hover:bg-[rgb(246,247,249)]"
              >
                이랜서 소리함
              </Link>
            </div>
          </li>
        </ul>
        <div className="flex items-center gap-[12px] max-sm:hidden">
          <button type="button" onClick={() => setIsMenuOpen(true)}>
            <img src="/images/icons/search.808d692a.svg" className="w-[25px]" />
          </button>
          <div className="flex items-center gap-[4px]">
            <Link
              href="/elogin"
              className="flex h-[36px] px-[24px] justify-center items-center gap-[8px] rounded-[24px] border-[#e7e7e7] bg-[#fff] border"
            >
              <p className="text-[#38383d] text-[13px] font-semibold">로그인</p>
            </Link>
            <Link
              href="/signup"
              className="flex h-[36px] px-[24px] justify-center items-center gap-[8px] rounded-[24px] border-[#e7e7e7] bg-[#ff6948] border"
            >
              <p className="text-[#fff] text-[13px] font-semibold">회원가입</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
