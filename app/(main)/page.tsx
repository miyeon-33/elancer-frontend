import MainSlider from '@/app/components/home/MainSlider';
import Platform from '@/app/components/home/Platform';

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto h-[1800px]">
      <MainSlider />
      <Platform />
      {/* <Subscribe />
      <License />
      <Integration />
      <Promotion />
      <Tip />
      <Shortcut /> */}
    </main>
  );
}
