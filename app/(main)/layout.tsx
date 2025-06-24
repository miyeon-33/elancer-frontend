import ConditionalHeader from '@/app/components/home/ConditionalHeader';
import ConditionalFooter from '@/app/components/home/ConditionalFooter';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ConditionalHeader />
      {children}
      <ConditionalFooter />
    </div>
  );
}
