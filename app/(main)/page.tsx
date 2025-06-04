import MainSlider from '@/app/components/home/MainSlider';
import Pick from '@/app/components/home/Pick';
import Platform from '@/app/components/home/Platform';
import Suggestion from '@/app/components/home/Suggestion';

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto h-[2800px]">
      <MainSlider />
      <Platform />
      <Pick />
      <Suggestion />
      {/* <Integration />
      <Promotion />
      <Tip />
      <Shortcut /> */}
    </main>
  );
}
