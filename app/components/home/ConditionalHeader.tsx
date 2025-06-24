'use client';

import Header from '@/app/components/home/Header';
import SubHeader from '@/app/components/home/SubHeader';
import { usePathname } from 'next/navigation';

export default function ConditionalHeader() {
  const pathname = usePathname();
  return pathname === '/list-partner' ? <SubHeader /> : <Header />;
}
