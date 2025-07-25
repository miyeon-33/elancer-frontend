import type { Metadata } from 'next';
import './globals.css';
import { pretendard } from '@/app/components/fonts';
import TanStackProvider from '@/providers/TanStackProvider';
import ThemeProvider from '@/app/components/ThemeProvider';

export const metadata: Metadata = {
  title: {
    default: '프리랜서 1등 플랫폼: 이랜서 | 기업의 프로젝트 재의뢰율 98%',
    template: '알툴즈 | 내 PC 필수품',
  },
  description: '네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <ThemeProvider>
        <body className={pretendard.className}>
          <TanStackProvider>{children}</TanStackProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
