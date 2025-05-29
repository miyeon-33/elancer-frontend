import { createMiddleware } from '@mswjs/http-middleware';
import express from 'express';
import cors from 'cors';
import { handlers } from '@/mocks/handlers';
import { noticeHandlers } from '@/mocks/notice-handlers';

const app = express();
const port = 9090;

app.use(
  cors({
    origin: 'http://localhost:3000', // 클라이언트 주소
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(express.json());
app.use(createMiddleware(...handlers, ...noticeHandlers)); // MSW 핸들러 연결

app.listen(port, () => console.log(`Mock server is running on port: ${port}`));
