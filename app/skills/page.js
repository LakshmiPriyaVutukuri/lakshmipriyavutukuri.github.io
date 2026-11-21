import PageNav from '@/components/PageNav';
import SkillGroup from '@/components/SkillGroup';
import { SKILL_GROUPS } from '@/lib/skills';

export const metadata = { title: 'Skills' };

export default function SkillsPage() {
  return (
    <>
      <header className="page_header">
        <h1>Skills</h1>
        <p className="lead">Grouped by how comfortable I am with each one.</p>
      </header>

      <div className="skill_stack">
        {SKILL_GROUPS.map((group) => (
          <SkillGroup key={group.label} group={group} />
        ))}
      </div>

      <PageNav current="/skills" />
    </>
  );
}
