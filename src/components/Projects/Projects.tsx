import React, { useState } from 'react';
import './Projects.css';
import { projects } from './metadata';
import { Card, CardContent } from '@mui/material';


type IProject = {
  key: string,
  title: string,
  description: string,
  preview_image: string,
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState('ff');

  function ProjectsList({ projects }: { projects: IProject[] }) {
    return <div className="projects">
      {
        projects.map(project => {
          return (
            <div className="project" style={selectedProject === project.key ? { color: "#fdf420" } : {}} key={project.key} onMouseOver={() => setSelectedProject(project.key)}>
              <h5>{project.title}</h5>
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
      <Card className='project-details' sx={{ backgroundColor: 'transparent' }}>
        <h6> </h6>
        <CardContent sx={{ color: "white", paddingLeft: 0 }}>
          <h4>{project?.title}</h4>
          <p>{project?.description}</p>
        </CardContent>
        <img alt={project?.title} src={require("./images/" + project?.preview_image)} style={{ width: "100%", marginBottom: 15 }}></img>
      </Card >
    )
  };

  return (
    <div className="projects-container">
      <div className="projects-list">
        <h6>Key Projects</h6>
        <ProjectsList projects={projects.filter((project) => project.type === 'key')} />
        <h6>Minor Projects</h6>
        <ProjectsList projects={projects.filter((project) => project.type === 'minor')} />
      </div>
      <ProjectDetails />
    </div>
  );
}