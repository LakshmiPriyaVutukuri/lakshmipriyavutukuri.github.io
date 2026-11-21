const SEGMENTS = 3;

export default function SkillGroup({ group }) {
  const { label, level, skills } = group;
  return (
    <section className="card skill_group" aria-labelledby={`skill_${label}`}>
      <div className="skill_header">
        <h2 id={`skill_${label}`} className="skill_label">
          {label}
        </h2>
        <div
          className="meter"
          role="img"
          aria-label={`Proficiency: ${label}, ${level} of ${SEGMENTS}`}
        >
          {Array.from({ length: SEGMENTS }, (_, i) => (
            <span key={i} className={`meter_segment${i < level ? ' is_filled' : ''}`} />
          ))}
        </div>
      </div>
      <ul className="chip_list">
        {skills.map((skill) => (
          <li key={skill} className="chip chip_large">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
