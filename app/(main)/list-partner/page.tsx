import Category from '@/app/components/list-partner/Category';
import Project from '@/app/components/list-partner/Project';
import ProjectWrap from '@/app/components/list-partner/ProjectWrap';
import SubIntroduce from '@/app/components/list-partner/SubIntroduce';

export default async function ListPartner() {
  return (
    <main className="bg-[rgb(27,28,30)]">
      <SubIntroduce />
      <ProjectWrap />
    </main>
  );
}
