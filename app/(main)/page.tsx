import Customer from '@/app/components/home/Customer';
import Image from '@/app/components/home/Image';
import MainSlider from '@/app/components/home/MainSlider';
import Manager from '@/app/components/home/Manager';
import Matching from '@/app/components/home/Matching';
import News from '@/app/components/home/News';
import Pick from '@/app/components/home/Pick';
import Platform from '@/app/components/home/Platform';
import Suggestion from '@/app/components/home/Suggestion';

export default function Home() {
  return (
    <main className="mx-auto bg-[#f6f7f9] pt-[32px]">
      <MainSlider />
      <Platform />
      <Pick />
      <Suggestion />
      <News />
      <Matching />
      <Manager />
      <Customer />
      <Image />
    </main>
  );
}
