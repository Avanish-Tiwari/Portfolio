import { useState } from "react";
import { Link } from "react-router-dom";
import { profile, projects } from "../data/profile.js";
import ProjectMedia from "../components/ProjectMedia.jsx";
import { useToast } from "../context/ToastContext.jsx";
import {
  IconArrowRight,
  IconDownload,
  IconSparkles,
  IconExternal,
  IconGitHub,
  IconCopy,
  IconCheck,
  IconMail,
} from "../components/Icons.jsx";

export default function Home() {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      showToast(`Copied ${profile.email} to clipboard!`);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      showToast(`Email: ${profile.email}`);
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-pill">
            <IconSparkles size={15} />
            <span>Frontend & React Specialist · {profile.location}</span>
          </div>

          <h1 className="hero-title">
            Crafting scalable <span className="gradient-text">web experiences</span> with speed & precision.
          </h1>

          <p className="hero-lede">{profile.intro}</p>

          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              <span>View Projects</span>
              <IconArrowRight size={18} />
            </Link>

            <a
              href={profile.resume}
              download
              className="btn btn-secondary"
              title="Download Avanish Tiwari Resume"
            >
              <IconDownload size={18} />
              <span>Download CV</span>
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="btn btn-ghost"
              title="Copy email to clipboard"
            >
              {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
              <span>{copied ? "Email Copied!" : "Copy Email"}</span>
            </button>
          </div>
        </div>

        {/* Hero Ambient Glow Visual */}
        <div className="hero-visual" aria-hidden="true">
          <div className="code-card">
            <div className="code-card-header">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="code-card-title">avanish.config.ts</span>
            </div>
            <pre className="code-snippet">
              <code>{`const developer = {
  name: "${profile.name}",
  role: "${profile.role}",
  experience: "${profile.experience}",
  focus: ["React 19", "Next.js 15", "TypeScript"],
  availability: "Open to opportunities",
  passion: "Pixel-perfect, accessible UI"
};`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="metrics-section">
        <div className="metrics-grid">
          {profile.metrics.map((metric) => (
            <div className="metric-card" key={metric.label}>
              <span className="metric-value">{metric.value}</span>
              <span className="metric-label">{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Highlights */}
      <section className="stack-highlight-section">
        <div className="stack-highlight-header">
          <span className="section-eyebrow">CORE TOOLKIT</span>
          <h2>Technologies I work with daily</h2>
        </div>
        <div className="stack-pills-row">
          {profile.skills.map((skill) => (
            <span key={skill} className="stack-pill">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-section">
        <div className="section-header-flex">
          <div>
            <span className="section-eyebrow">PORTFOLIO HIGHLIGHTS</span>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <Link to="/projects" className="link-arrow">
            <span>Explore all {projects.length} projects</span>
            <IconArrowRight size={16} />
          </Link>
        </div>

        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <article className="featured-card" key={project.title}>
              <div className="featured-media">
                <ProjectMedia project={project} />
                <span className="category-badge">
                  {project.category?.toUpperCase() || "FEATURED"}
                </span>
              </div>

              <div className="featured-body">
                <div className="featured-title-wrap">
                  <h3>{project.title}</h3>
                </div>

                <p className="featured-desc">{project.description}</p>

                {project.highlights && (
                  <ul className="project-highlight-list">
                    {project.highlights.slice(0, 2).map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}

                <div className="featured-stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="featured-footer">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-primary"
                    >
                      <span>Live Demo</span>
                      <IconExternal size={14} />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-secondary"
                    >
                      <IconGitHub size={14} />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="cta-section">
        <div className="cta-card">
          <div className="cta-glow" aria-hidden="true" />
          <span className="section-eyebrow">GET IN TOUCH</span>
          <h2>Ready to build something exceptional?</h2>
          <p className="cta-text">
            Whether you have an open frontend position, want to discuss a project,
            or simply talk shop about modern React and Next.js, my inbox is always open.
          </p>
          <div className="cta-actions">
            <a
              href={`mailto:${profile.email}`}
              className="btn btn-primary"
            >
              <IconMail size={18} />
              <span>Send Email</span>
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="btn btn-secondary"
            >
              {copied ? <IconCheck size={18} /> : <IconCopy size={18} />}
              <span>{copied ? "Email Copied!" : "Copy Email"}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
