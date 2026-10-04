import { profile } from "../data/profile.js";
import {
  IconSparkles,
  IconBriefcase,
  IconGraduation,
  IconAward,
  IconCheck,
} from "../components/Icons.jsx";

export default function About() {
  return (
    <div className="about-page">
      <header className="page-header">
        <div className="hero-pill">
          <IconSparkles size={14} />
          <span>BACKGROUND & PHILOSOPHY</span>
        </div>
        <h1 className="page-title">
          Engineering with <span className="gradient-text">precision</span> and product empathy.
        </h1>
        <p className="page-lede">
          Based in {profile.location} with {profile.experience} building web products.
          I specialize in React, Next.js, and modern TypeScript architecture to deliver
          seamless digital experiences that users love.
        </p>
      </header>

      {/* Main Split: Bio Story + Key Highlights */}
      <div className="about-split-section">
        <div className="about-narrative">
          <h2 className="section-title">The Journey So Far</h2>
          <div className="story-paragraphs">
            <p>
              Hi, I’m <strong>{profile.name}</strong>. Over the past 4+ years, I’ve
              specialized in translating complex product requirements into fast,
              accessible, and maintainable user interfaces.
            </p>
            <p>
              Currently, as a Senior Scripting Executive and React Developer at{" "}
              <strong>Ipsos</strong>, I lead frontend development for data-intensive
              survey applications, architecting modular React component patterns
              that improved cross-team development velocity and boosted code reusability by 35%.
            </p>
            <p>
              Before Ipsos, I honed my skills at <strong>Phronesis Partners</strong>,
              optimizing high-traffic client portals for speed and SEO, and explored
              backend systems and Linux environments at <strong>Ameyo</strong>.
            </p>
            <p>
              I believe great software lives at the intersection of performant code,
              rigorous attention to detail, and deep empathy for the end user. When
              I’m not coding, I explore emerging web capabilities, play video games,
              and contribute to open-source software.
            </p>
          </div>

          <div className="personal-quote-card">
            <p className="quote-text">
              “Success is the sum of small efforts, repeated day in and day out.”
            </p>
            <span className="quote-author">— Personal Creed</span>
          </div>
        </div>

        <aside className="about-sidebar">
          {/* Skills Breakdown by Category */}
          <div className="sidebar-card">
            <h3 className="sidebar-heading">
              <IconSparkles size={16} />
              <span>Skills by Discipline</span>
            </h3>

            {profile.skillCategories.map((group) => (
              <div key={group.category} className="skill-group">
                <span className="skill-group-title">{group.category}</span>
                <div className="skill-pills">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Stats Summary */}
          <div className="sidebar-card stats-highlight-card">
            <h3 className="sidebar-heading">
              <IconCheck size={16} />
              <span>Core Strengths</span>
            </h3>
            <ul className="strength-list">
              <li>Next.js 15 App Router & Server Actions</li>
              <li>Component Design Systems & Token Architecture</li>
              <li>Performance Optimization & CWV (LCP/INP)</li>
              <li>State Management with Redux Toolkit & Context</li>
              <li>REST API Architecture & PostgreSQL Integration</li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Experience Timeline Section */}
      <section className="timeline-section">
        <div className="section-header-flex">
          <div>
            <span className="section-eyebrow">CAREER PATH</span>
            <h2 className="section-title">Professional Experience</h2>
          </div>
        </div>

        <div className="timeline-container">
          {profile.workHistory.map((job, index) => (
            <div className="timeline-item" key={`${job.company}-${index}`}>
              <div className="timeline-dot-wrap">
                <div className="timeline-dot">
                  <IconBriefcase size={14} />
                </div>
                {index < profile.workHistory.length - 1 && (
                  <div className="timeline-line" />
                )}
              </div>

              <div className="timeline-content-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{job.role}</h3>
                    <span className="timeline-company">{job.company}</span>
                  </div>
                  <div className="timeline-badge-wrap">
                    <span className="timeline-period">{job.period}</span>
                    <span className="timeline-location">{job.location}</span>
                  </div>
                </div>

                <ul className="timeline-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Honors Section */}
      <section className="credentials-section">
        <div className="credentials-grid">
          {/* Education Card */}
          <div className="credential-card">
            <div className="credential-header">
              <IconGraduation size={20} className="credential-icon" />
              <h3>Education</h3>
            </div>
            {profile.education.map((edu) => (
              <div key={edu.degree} className="edu-item">
                <h4 className="edu-degree">{edu.degree}</h4>
                <p className="edu-institution">{edu.institution}</p>
                <span className="edu-meta">
                  {edu.period} · {edu.location}
                </span>
              </div>
            ))}
          </div>

          {/* Honors & Certifications Card */}
          <div className="credential-card">
            <div className="credential-header">
              <IconAward size={20} className="credential-icon" />
              <h3>Awards & Certifications</h3>
            </div>
            <div className="awards-list">
              {profile.awards.map((award) => (
                <div key={award.title} className="award-item">
                  <span className="award-title">{award.title}</span>
                  <span className="award-issuer">
                    {award.issuer} · {award.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
