import Link from 'next/link';
import Image from 'next/image';

// Every card renders the same six rows in the same order. The cards use CSS
// subgrid (see .project_card in globals.css), so titles, meta lines,
// descriptions, tools, pictures, and links line up across cards side by side.
export default function ProjectCard({ project }) {
  const { title, meta, summary, tools, images, links } = project;
  return (
    <article className="card project_card">
      <h2 className="project_title"><Link href={`/projects/${project.slug}`}>{title}</Link></h2>
      <p className="project_meta">{meta}</p>

      <div className="project_summary">
        {summary.map((para) => (
          <p key={para.slice(0, 24)}>{para}</p>
        ))}
      </div>

      <div className="project_tools">
        <h3 className="tools_heading">Tools and methods</h3>
        <ul className="chip_list" aria-label={`Tools and methods for ${title}`}>
          {tools.map((tool) => (
            <li key={tool} className="chip">
              {tool}
            </li>
          ))}
        </ul>
      </div>

      <div className="project_media">
        {images.map((image) => (
          <figure key={image.caption} className="project_figure">
            <Image
              src={image.src}
              alt={image.alt}
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 360px"
              className="project_image"
            />
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>

      <div className="project_links">
        <Link href={`/projects/${project.slug}`} className="button button_secondary">View project details</Link>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="button button_secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
            <span className="visually_hidden"> (opens in a new tab)</span>
          </a>
        ))}
      </div>
    </article>
  );
}
