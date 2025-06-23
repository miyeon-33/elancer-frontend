import Category from '@/app/components/list-partner/Category';
import Project from '@/app/components/list-partner/Project';
import SubFooter from '@/app/components/list-partner/SubFooter';
import SubHeader from '@/app/components/list-partner/SubHeader';
import SubIntroduce from '@/app/components/list-partner/SubIntroduce';

export default async function ListPartner() {
  return (
    <main className="bg-[rgb(27,28,30)]">
      <SubHeader />
      <SubIntroduce />
      <Category />
      <Project />
      <SubFooter />
    </main>
  );
}
