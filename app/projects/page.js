import PageNav from '@/components/PageNav';
import ProjectCard from '@/components/ProjectCard';
import { LEADERSHIP } from '@/lib/leadership';
import { PROJECTS } from '@/lib/projects';

// Render this page on the server for every request (no static prerender).
export const dynamic = 'force-dynamic';

export const metadata = { title: 'Projects' };

export default function ProjectsPage() {
  return (
    <>
      <header className="page_header">
        <h1>Projects</h1>
        <p className="lead">
          Hands-on work across embedded systems, robotics, and quantum machine learning.
        </p>
      </header>

      <div className="grid grid_projects">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <section className="section" aria-labelledby="leadership_heading">
        <h2 id="leadership_heading">Leadership</h2>
        <ul className="leadership_list">
          {LEADERSHIP.map((item) => (
            <li key={item.slice(0, 24)} className="card">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <PageNav current="/projects" />
    </>
  );
}
