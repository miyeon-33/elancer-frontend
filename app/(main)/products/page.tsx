import Link from 'next/link';

export default function Products() {
  const productId = 100;

  return (
    <main className="max-w-[2560px] border mx-auto w-[calc(100%-80px)] max-md:w-[calc(100%-40px)]">
      <ul>
        <li>
          <Link href="/products/ALTOOLS">product ALTools</Link>
        </li>
        <li>
          <Link href="/products/ALZIP">product 2</Link>
        </li>
        <li>
          <Link href="/products/3">product 3</Link>
        </li>
        <li>
          <Link href={`/products/${productId}`}>product {productId}</Link>
        </li>
      </ul>
    </main>
  );
}
