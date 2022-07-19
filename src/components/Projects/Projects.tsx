import React, { useState } from 'react';
import './Projects.css';
import { projects } from './metadata';


type IProject = {
  key: string,
  title: string,
  description: string,
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState('ff');

  function ProjectsList({ projects }: { projects: IProject[] }) {
    return <div className="projects">
      {
        projects.map(project => {
          return (
            <div className="project" style={selectedProject === project.key ? { color: "#fdf420" } : {}} key={project.key} onMouseOver={() => setSelectedProject(project.key)} onClick={() => setSelectedProject(project.key)}>
              <h4>{project.title}</h4>
            </div>
          );
        }
        )
      }
    </div>
  };
  function ProjectDetails() {
    const project = projects.find(p => p.key === selectedProject);
    return (
      <div className="project-details">
        <h4>{project?.title}</h4>
        <p>{project?.description}</p>
      </div>
    )
  };

  return (
    <div className="projects-container">
      <div className="projects-list">
        <h5>Key Projects</h5>
        <ProjectsList projects={projects.filter((project) => project.type === 'key')} />
        <h5>Minor Projects</h5>
        <ProjectsList projects={projects.filter((project) => project.type === 'minor')} />
      </div>
      <ProjectDetails />
    </div>
  );
}