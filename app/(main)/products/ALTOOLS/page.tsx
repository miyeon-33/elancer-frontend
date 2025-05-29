import Download from '@/app/components/products/ALTOOLS/Download';
import Functions from '@/app/components/products/ALTOOLS/Functions';
import Section1 from '@/app/components/products/ALTOOLS/Section1';
import Section2 from '@/app/components/products/ALTOOLS/Section2';

type ProductDetailsProp = {
  params: Promise<{ productId: string }>;
};

// 메타데이터 동적으로 생성하는 함수, 이름변경 불가
export async function generateMetadata({ params }: ProductDetailsProp) {
  const { productId } = await params;

  const title = await new Promise((resolve) => {
    setTimeout(() => resolve(`갤럭시 ${productId}`), 200);
  });

  return {
    title: `Product ${title}`,
  };
}

export default async function Altools({ params }: ProductDetailsProp) {
  return (
    <main className="pb-[120px]">
      <Download />
      <Section1 />
      <Section2 />
      <Functions />
    </main>
  );
}
