import { Link } from "react-router-dom";
import { profile, projects } from "../data/profile.js";
import ProjectMedia from "../components/ProjectMedia.jsx";

export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">
          {profile.location} · {profile.role}
        </p>
        <h1>{profile.name}</h1>
        <p className="lede">{profile.intro}</p>
        <div className="actions">
          <Link className="button" to="/projects">
            See projects
          </Link>
          <a className="button button-quiet" href={profile.resume}>
            Download resume
          </a>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Selected work</h2>
          <Link to="/projects">All projects</Link>
        </div>
        <div className="project-grid">
          {projects.slice(0, 3).map((project) => (
            <article className="project-card" key={project.title}>
              <ProjectMedia project={project} />
              <div className="project-card-body">
                <h3>{project.title}</h3>
                <p>{project.stack.join(" · ")}</p>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live site
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
