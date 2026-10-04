import { IconSparkles } from "./Icons.jsx";

export default function ProjectMedia({ project, labelled = false, aspect = "16 / 10" }) {
  if (!project.image) {
    // Generate a sleek, modern procedural artwork for projects without screenshots
    const isAi = project.category === "ai";
    const isFullstack = project.category === "fullstack";

    return (
      <div
        className={`project-fallback ${isAi ? "fallback-ai" : isFullstack ? "fallback-fullstack" : "fallback-default"}`}
        style={{ aspectRatio: aspect }}
        aria-hidden="true"
      >
        <div className="fallback-glow" />
        <div className="fallback-content">
          <div className="fallback-badge">
            <IconSparkles size={14} />
            <span>{project.category?.toUpperCase() || "PROJECT"}</span>
          </div>
          <span className="fallback-title">{project.title}</span>
          <div className="fallback-tags">
            {project.stack.slice(0, 3).map((tech) => (
              <span key={tech} className="fallback-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-media-wrapper" style={{ aspectRatio: aspect }}>
      <img
        src={project.image}
        alt={labelled ? `${project.title} preview screenshot` : ""}
        loading="lazy"
        decoding="async"
        className="project-image"
      />
    </div>
  );
}
