import { http, HttpResponse } from 'msw';
import notice from './notice.json';

let maxId = Math.max(...notice.map((item) => item.id));
let sortedNotice = notice.sort((a, b) => a.id - b.id);

export const noticeHandlers = [
  http.get('http://localhost:9090/notice/:id', async ({ params }) => {
    await sleep(200);

    const { id } = params;
    const noticeData = notice.find((item) => item.id === Number(id));

    return HttpResponse.json(noticeData);
  }),

  http.get('http://localhost:9090/notice', async ({ request }) => {
    await sleep(200);

    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page')) || 1;

    function getDataByPage(
      data: {
        id: number;
        title: string;
        date: string;
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
    return HttpResponse.json(getDataByPage(sortedNotice, page, 10));
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
