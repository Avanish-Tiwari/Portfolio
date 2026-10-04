import { useState, useMemo } from "react";
import { projects } from "../data/profile.js";
import ProjectMedia from "../components/ProjectMedia.jsx";
import {
  IconSearch,
  IconExternal,
  IconGitHub,
  IconSparkles,
} from "../components/Icons.jsx";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI & Local Models" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "react", label: "React & Next.js" },
  { id: "frontend", label: "JavaScript & UI" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'list'

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "all" ||
        project.category === activeCategory ||
        (activeCategory === "react" &&
          (project.category === "react" || project.stack.includes("React")));

      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesQuery =
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.stack.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="projects-page">
      <header className="page-header">
        <div className="hero-pill">
          <IconSparkles size={14} />
          <span>PORTFOLIO SHOWCASE</span>
        </div>
        <h1 className="page-title">
          Selected <span className="gradient-text">Works & Applications</span>
        </h1>
        <p className="page-lede">
          From full-stack Next.js dashboards and client-side AI apps to responsive
          web interfaces. Filter by category or search by technology stack.
        </p>
      </header>

      {/* Control Bar: Filter Tabs, Search & View Switcher */}
      <div className="projects-controls">
        <div className="filter-tabs" role="tablist" aria-label="Project categories">
          {categories.map((tab) => {
            const count =
              tab.id === "all"
                ? projects.length
                : projects.filter(
                    (p) =>
                      p.category === tab.id ||
                      (tab.id === "react" &&
                        (p.category === "react" || p.stack.includes("React")))
                  ).length;

            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeCategory === tab.id}
                className={`filter-tab ${activeCategory === tab.id ? "active" : ""}`}
                onClick={() => setActiveCategory(tab.id)}
              >
                <span>{tab.label}</span>
                <span className="tab-count">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="search-and-view">
          <div className="search-box">
            <IconSearch size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search by tech or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search projects"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          <div className="view-toggle" role="group" aria-label="View mode">
            <button
              type="button"
              className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
              title="Grid view"
              aria-label="Grid view"
            >
              ⊞ Grid
            </button>
            <button
              type="button"
              className={`view-btn ${viewMode === "list" ? "active" : ""}`}
              onClick={() => setViewMode("list")}
              title="Detailed list view"
              aria-label="Detailed list view"
            >
              ☰ List
            </button>
          </div>
        </div>
      </div>

      {/* Results Count Banner */}
      <div className="results-status">
        <span>
          Showing <strong>{filteredProjects.length}</strong> of{" "}
          {projects.length} projects
        </span>
        {(searchQuery || activeCategory !== "all") && (
          <button
            type="button"
            className="reset-filter-link"
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
          >
            Reset filters
          </button>
        )}
      </div>

      {/* Projects Display */}
      {filteredProjects.length === 0 ? (
        <div className="empty-state">
          <p className="empty-title">No projects found</p>
          <p className="empty-desc">
            No projects matched your search criteria for “{searchQuery}”.
          </p>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
          >
            Clear Search
          </button>
        </div>
      ) : viewMode === "grid" ? (
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <article className="project-grid-card" key={project.title}>
              <div className="card-media-wrap">
                <ProjectMedia project={project} labelled />
                <span className="card-index-pill">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                {project.featured && (
                  <span className="card-featured-pill">Featured</span>
                )}
              </div>

              <div className="card-content">
                <div className="card-header">
                  <h2 className="card-title">{project.title}</h2>
                  <span className="card-category-badge">
                    {project.category}
                  </span>
                </div>

                <p className="card-desc">{project.description}</p>

                {project.highlights && (
                  <ul className="card-highlights">
                    {project.highlights.slice(0, 2).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                <div className="card-stack">
                  {project.stack.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="card-actions">
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
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="projects-list-view">
          {filteredProjects.map((project, index) => (
            <article className="project-list-row" key={project.title}>
              <div className="list-media">
                <ProjectMedia project={project} labelled aspect="16 / 11" />
              </div>

              <div className="list-details">
                <div className="list-meta">
                  <span className="list-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="list-category">
                    {project.category?.toUpperCase()}
                  </span>
                  {project.featured && (
                    <span className="card-featured-pill">Featured</span>
                  )}
                </div>

                <h2 className="list-title">{project.title}</h2>
                <p className="list-desc">{project.description}</p>

                {project.highlights && (
                  <ul className="list-highlights">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                <div className="card-stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="list-actions">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-primary"
                    >
                      <span>Live Site</span>
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
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
