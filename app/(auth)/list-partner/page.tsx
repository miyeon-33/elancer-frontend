import Category from '@/app/components/list-partner/Category';
import Project from '@/app/components/list-partner/Project';
import SubFooter from '@/app/components/list-partner/SubFooter';
import SubHeader from '@/app/components/list-partner/SubHeader';
import SubIntroduce from '@/app/components/list-partner/SubIntroduce';

async function getProject() {
  const res = await fetch('http://localhost:3001/project', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function ListPartner() {
  const data = await getProject();

  return (
    <main className="bg-[rgb(27,28,30)]">
      <SubHeader />
      <SubIntroduce />
      <Category />
      <Project data={data} />
      <SubFooter />
    </main>
  );
}
