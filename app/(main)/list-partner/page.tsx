import Project from '@/app/components/list-partner/Project';
import Link from 'next/link';

export default async function Partner() {
  async function getProject() {
    const res = await fetch('http://localhost:3001/list-partner');

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }
  const data = await getProject();

  return (
    <main className="max-w-[2560px] border mx-auto w-[calc(100%-80px)] max-md:w-[calc(100%-40px)]">
      <ul>
        <li>
          <Link href="/project_detail/1">product ALTools</Link>
        </li>
        <li>
          <Link href="/products/ALZIP">product 2</Link>
        </li>
        <li>
          <Link href="/products/3">product 3</Link>
        </li>
        <li></li>
      </ul>
      <Project data={data} />
    </main>
  );
}
