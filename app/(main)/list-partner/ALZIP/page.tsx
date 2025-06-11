import AlzipDownload from '@/app/components/list-partner/ALZIP/AlzipDownload';
import AlzipFunction from '@/app/components/list-partner/ALZIP/AlzipFunction';
import AlzipSec1 from '@/app/components/list-partner/ALZIP/AlzipSec1';
import AlzipSec2 from '@/app/components/list-partner/ALZIP/AlzipSec2';
import AlzipSec3 from '@/app/components/list-partner/ALZIP/AlzipSec3';
import History from '@/app/components/list-partner/ALZIP/History';

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
