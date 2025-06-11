import Link from 'next/link';

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = getRandomInt(2);

  return (
    <div className="min-h-[(100vh-310px)] pt-[80px] max-sm:pt-[60px]">
      <div className="pb-[120x]"></div>
      <div>{children}</div>
    </div>
  );
}
