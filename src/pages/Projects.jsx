import { projects } from "../data/profile.js";
import ProjectMedia from "../components/ProjectMedia.jsx";

export default function Projects() {
  return (
    <section className="page">
      <p className="eyebrow">Projects</p>
      <h1>Recent work.</h1>
      <p className="lede">
        Full-stack apps and smaller interface projects, from task and job
        trackers to country explorers.
      </p>
      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project-row" key={project.title}>
            <ProjectMedia project={project} labelled />
            <div>
              <p className="index">{String(index + 1).padStart(2, "0")}</p>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p className="stack">{project.stack.join(" · ")}</p>
              <p className="project-links">
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live site
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  Source
                </a>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
