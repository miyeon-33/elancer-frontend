import { http, HttpResponse } from 'msw';
import faq from './faq.json';

let maxId = Math.max(...faq.map((item) => item.id));

export const handlers = [
  http.get('http://localhost:9090/service/FAQ', async ({ request }) => {
    await sleep(200);

    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page')) || 1;
    const menu = Number(url.searchParams.get('menu')); // '전체'는 menu<0
    const keyword = url.searchParams.get('keyword') || ''; // 검색어 가져오기

    let filteredData = faq;

    // 조건1: menu와 keyword가 모두 있을 경우
    if (menu > 0 && keyword) {
      filteredData = faq.filter(
        (item) =>
          item.menu === menu &&
          item.title.toLowerCase().includes(keyword.toLowerCase())
      );
    } else if (menu < 0 && keyword) {
      // 조건2: keyword만 있는 경우 ('전체'에 검색어 포함된 데이터만 렌더링)
      filteredData = faq.filter((item) =>
        item.title.toLowerCase().includes(keyword.toLowerCase())
      );
    } else if (menu > 0 && !keyword) {
      // 조건3: menu만 있는 경우
      filteredData = faq.filter((item) => item.menu === menu);
    } else {
      filteredData = faq;
    }

    return HttpResponse.json(getDataByPage(filteredData, page, 10));

    function getDataByPage(
      data: {
        id: number;
        title: string;
        category: string;
        menu: number;
        details: string;
      }[],
      page: number,
      limit: number
    ) {
      const totalPages = Math.ceil(data.length / limit);

      if (page < 1 || page > totalPages) {
        return { result: [], total: 0 }; // 잘못된 페이지 요청시 빈배열 반환
      }

      const start = (page - 1) * limit;
      const end = start + limit;

      return {
        result: data.slice(start, end),
        total: data.length,
      };
    }
  }),

  // id 조회 핸들러
  http.get('http://localhost:9090/service/FAQ/:FAQId', async ({ params }) => {
    await sleep(200);

    const { FAQId } = params;
    const faqItem = faq.find((item) => item.id === Number(FAQId));

    if (!faqItem) {
      return new HttpResponse(null, {
        status: 404,
        statusText: 'FAQ Not Found',
      });
    }
    return HttpResponse.json(faqItem);
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
