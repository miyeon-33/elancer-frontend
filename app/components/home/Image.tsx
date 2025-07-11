import Link from 'next/link';

export default function Image() {
  return (
    <div className="max-w-[1200px] mx-auto max-md:px-[20px] max-sm:px-[20px]">
      <Link
        href="#"
        className="rounded-[16px] pb-[120px] block max-sm:flex max-sm:justify-center max-sm:items-center max-sm:py-[68px]"
      >
        <img
          src="/images/icons/runclub-banner.167783e9.svg"
          className="block max-sm:hidden"
        />
        <img
          src="/images/icons/runclub-banner-mobile.84d8bb07.svg"
          className="hidden max-sm:block"
        />
      </Link>
    </div>
  );
}
