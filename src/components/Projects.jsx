import { useState } from "react";
import SectionHeading from "./SectionHeading";
import projects from "../data/projects";

// Project showcase with client-side category filtering.
function Projects() {
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category.split(" / ")[0])),
  ];
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category.includes(filter));

  return (
    <section className="section-wrap projects-section" id="projects">
      <SectionHeading
        eyebrow="Selected work"
        title={
          <>
            A few things I've
            <br />
            <span>put into the world.</span>
          </>
        }
      />
      <div className="filter-row">
        {categories.map((category) => (
          <button
            className={filter === category ? "filter active" : "filter"}
            onClick={() => setFilter(category)}
            aria-pressed={filter === category}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {visible.map((project, index) => (
          <article
            className="project-card"
            key={project.id}
          >
            <div className="project-preview">
              <span className="preview-number">0{index + 1}</span>
              <span className="preview-code">&lt;/&gt;</span>
              {project.image ? (
                <img
                  className="preview-image"
                  src={project.image}
                  alt={`${project.name} preview`}
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="preview-window">
                  <span />
                  <span />
                  <span />
                  <strong>{project.name}</strong>
                </div>
              )}
            </div>
            <div className="project-info">
              <div className="project-title">
                <div>
                  <span className="project-category">{project.category}</span>
                  <h3>{project.name}</h3>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.name} source`}
                >
                  GH
                </a>
              </div>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <div className="project-links">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live project <span>↗</span>
                  </a>
                )}
                <a href={project.github} target="_blank" rel="noreferrer">
                  Source code <span>↗</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
