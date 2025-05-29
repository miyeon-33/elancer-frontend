import AlzipDownload from '@/app/components/products/ALZIP/AlzipDownload';
import AlzipFunction from '@/app/components/products/ALZIP/AlzipFunction';
import AlzipSec1 from '@/app/components/products/ALZIP/AlzipSec1';
import AlzipSec2 from '@/app/components/products/ALZIP/AlzipSec2';
import AlzipSec3 from '@/app/components/products/ALZIP/AlzipSec3';
import History from '@/app/components/products/ALZIP/History';

export default function Alzip() {
  return (
    <main className="pb-[120px]">
      <AlzipDownload />
      <AlzipSec1 />
      <AlzipSec2 />
      <AlzipSec3 />
      <AlzipFunction />
      <History />
    </main>
  );
}
