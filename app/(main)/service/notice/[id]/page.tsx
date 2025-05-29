import Link from 'next/link';

async function getNoticeData(id: string) {
  const response = await fetch(`http://localhost:9090/notice/${id}`);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

export default async function noticeDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const noticeData = await getNoticeData(id);

  return (
    <div className="min-h-[(100vh-310px)] pt-[80px] max-sm:pt-[60px]">
      <div className="mx-auto max-w-[1120px] pt-[40px] pb-[80px] max-md:px-[40px] max-sm:py-[40px] max-sm:px-[20px]">
        <div className="mb-[72px] max-sm:hidden">
          <ul className="flex justify-start items-center">
            <li className="text-[14px] text-[#8b95a1] flex justify-start items-center">
              <Link
                href="/"
                className="after:inline-block after:w-[20px] after:h-[20px] after:content[''] after:bg-[url('/images/icons/layout.svg')] after:bg-no-repeat after:mx-[4px] flex items-center leading-none text-[#8b95a1] transition-all duration-200 hover:text-[#333d4b]"
              >
                홈
              </Link>
            </li>
            <li className="text-[14px] text-[#8b95a1] flex justify-start items-center">
              <p className="after:inline-block after:w-[20px] after:h-[20px] after:content[''] after:bg-[url('/images/icons/layout.svg')] after:bg-no-repeat after:mx-[4px] flex items-center leading-none text-[#8b95a1]">
                고객센터
              </p>
            </li>
            <li className="text-[14px] text-[#8b95a1] flex justify-start items-center">
              <p className="leading-none text-[#8b95a1]">공지사항</p>
            </li>
          </ul>
        </div>
        <div className="pb-[40px] border-b border-[#d1d6db] max-sm:pb-[20px]">
          <p className="block text-[#4e5968] pb-[16px] text-[15px] max-sm:pb-[12px]">
            {noticeData.date}
          </p>
          <h2 className="text-[32px] text-gray-600 font-bold max-sm:text-[20px]">
            {noticeData.title}
          </h2>
        </div>
        <div className="border-b border-[#d1d6db]">
          <div className="py-[48px] max-sm:py-[20px]">
            <p className="my-[10px] text-[#222]">{noticeData.details}</p>
          </div>
        </div>
        <div className="pt-[48px] flex justify-center items-center max-md:pt-[20px]">
          <Link href="/service/notice">
            <button className="h-[52px] text-[15px] rounded-[8px] px-[24px] flex justify-center items-center font-bold text-[#fff] bg-[#1a1a1a] hover:bg-[#484848] transition-all duration-200">
              목록 보기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
