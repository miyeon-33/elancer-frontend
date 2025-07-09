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
