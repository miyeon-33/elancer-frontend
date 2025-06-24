'use client';

import Footer from '@/app/components/home/Footer';
import SubFooter from '@/app/components/home/SubFooter';
import { usePathname } from 'next/navigation';

export default function ConditionalFooter() {
  const pathname = usePathname();
  return pathname === '/list-partner' ? <SubFooter /> : <Footer />;
}
