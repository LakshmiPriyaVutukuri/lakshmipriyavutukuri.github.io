import Image from 'next/image';

import ProjectCard from '@/components/ProjectCard';
import SkillGroup from '@/components/SkillGroup';
import ContactCard from '@/components/ContactCard';

import { INTRO, PROFILE, CONTACTS } from '@/lib/site_content';
import { PROJECTS } from '@/lib/projects';
import { SKILL_GROUPS } from '@/lib/skills';
import { LEADERSHIP } from '@/lib/leadership';

import profilePhoto from '@/public/images/profile_photo.jpg';

export default function HomePage() {
  return (
    <>
      {/* HOME SECTION */}
      <section
        id="home"
        className="hero"
        aria-labelledby="hero_name"
      >
        <div className="hero_heading">
          <h1 id="hero_name" className="hero_name">
            {PROFILE.name}
          </h1>

          <p className="hero_title">
            {PROFILE.title}
          </p>

          <p className="hero_degree">
            {PROFILE.degree}
            <br />
            {PROFILE.school}
          </p>
        </div>

        <div className="hero_photo">
          <Image
            src={profilePhoto}
            alt={`Portrait of ${PROFILE.name}`}
            priority
            sizes="(max-width: 767px) 42vw, 340px"
            className="hero_photo_img"
          />
        </div>

        <p className="hero_intro">
          {INTRO}
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section">
        <h2>About Me</h2>

        <p className="lead">
          My academic journey began in Electrical and Electronics
          Engineering, where I developed an interest in applying
          technology to solve real-world problems.
        </p>

        <p>
          Through projects involving embedded systems, automation,
          and machine learning, I became increasingly interested
          in how data can be used to understand problems and
          support better decisions.
        </p>

        <p>
          This interest led me to pursue a Master's in Business
          Analytics and Information Management at Purdue University,
          where I am expanding my engineering background with
          analytical and business problem-solving skills.
        </p>

        <div
          className="grid grid_contacts"
          style={{ marginTop: '2rem' }}
        >
          {/* EDUCATION */}
          <div className="card">
            <h3>Education</h3>

            <p>
              <strong>Purdue University</strong>
              <br />
              Master of Science in Business Analytics and
              Information Management
            </p>

            <p>
              <strong>
                Vellore Institute of Technology (VIT)
              </strong>
              <br />
              Bachelor of Technology in Electrical and
              Electronics Engineering
            </p>
          </div>

          {/* EXPERIENCE */}
          <div className="card">
            <h3>Professional Experience</h3>

            <p>
              <strong>Jabil Circuit — Internship</strong>
            </p>

            <p>
              Worked with printed circuit board documentation
              and functional testing logs to understand circuit
              performance and identify potential failure patterns.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3>Beyond Academics</h3>

          <p>
            Outside of academics, I enjoy singing, drawing,
            and cooking. I also enjoy swimming, badminton,
            and table tennis.
          </p>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <p className="lead">
          A collection of my academic and technical projects
          involving embedded systems, robotics, and machine learning.
        </p>

        <div className="grid grid_projects">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section">
        <h2>Skills</h2>

        <p className="lead">
          Technical and analytical skills developed through
          coursework, projects, and professional experience.
        </p>

        <div className="skill_stack">
          {SKILL_GROUPS.map((group) => (
            <SkillGroup
              key={group.label}
              group={group}
            />
          ))}
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section id="leadership" className="section">
        <h2>Leadership & Involvement</h2>

        <p className="lead">
          Experiences that have helped me develop teamwork,
          communication, and organizational skills.
        </p>

        <ul className="leadership_list">
          {LEADERSHIP.map((item, index) => (
            <li key={index} className="card">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section">
        <h2>Contact</h2>

        <p className="lead">
          I would be glad to connect and explore opportunities
          to collaborate.
        </p>

        <div className="grid grid_contacts">
          {CONTACTS.map((contact) => (
            <ContactCard
              key={contact.kind}
              contact={contact}
            />
          ))}
        </div>
      </section>
    </>
  );
}