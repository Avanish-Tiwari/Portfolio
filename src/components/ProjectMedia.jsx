export default function ProjectMedia({ project, labelled = false }) {
  if (!project.image) {
    return (
      <div className="project-fallback" aria-hidden="true">
        <span>{project.stack[0]}</span>
      </div>
    );
  }

  return (
    <img
      src={project.image}
      alt={labelled ? `${project.title} screenshot` : ""}
    />
  );
}
