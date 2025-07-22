import ConditionalHeader from '@/app/components/home/ConditionalHeader';
import ConditionalFooter from '@/app/components/home/ConditionalFooter';
import Chatbot from '@/app/components/Chatbot';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ConditionalHeader />
      {children}
      <Chatbot />
      <ConditionalFooter />
    </div>
  );
}
