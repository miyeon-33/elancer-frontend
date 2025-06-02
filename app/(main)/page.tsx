import MainSlider from '@/app/components/home/MainSlider';
import Pick from '@/app/components/home/Pick';
import Platform from '@/app/components/home/Platform';

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto h-[1800px]">
      <MainSlider />
      <Platform />
      <Pick />
      {/* <License />
      <Integration />
      <Promotion />
      <Tip />
      <Shortcut /> */}
    </main>
  );
}
