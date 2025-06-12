import Category from '@/app/components/list-partner/Category';
import Project from '@/app/components/list-partner/Project';
import SubHeader from '@/app/components/list-partner/SubHeader';
import SubIntroduce from '@/app/components/list-partner/SubIntroduce';

export default function ListPartner() {
  async function getProject() {
    const res = await fetch('http://localhost:3001/list-partner');

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }
  const data = getProject();
  return (
    <main className="bg-[rgb(27,28,30)] h-[8000px]">
      <SubHeader />
      <SubIntroduce />
      <Category />
      <Project data={data} />
    </main>
  );
}
