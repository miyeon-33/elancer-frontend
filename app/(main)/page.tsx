import Integration from '@/app/components/home/Integration';
import License from '@/app/components/home/License';
import MainSlider from '@/app/components/home/MainSlider';
import ProductList from '@/app/components/home/ProductList';
import Promotion from '@/app/components/home/Promotion';
import Shortcut from '@/app/components/home/Shortcut';
import Subscribe from '@/app/components/home/Subscribe';
import Tip from '@/app/components/home/Tip';

export default function Home() {
  return (
    <main className="pt-[80px]">
      <MainSlider />
      <ProductList />
      <Subscribe />
      <License />
      <Integration />
      <Promotion />
      <Tip />
      <Shortcut />
    </main>
  );
}
