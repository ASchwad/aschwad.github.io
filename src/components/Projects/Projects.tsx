import React, { useState } from 'react';
import './Projects.css';
import { projects } from './metadata';
import useWindowDimensions from '../../hooks/getWindowDimensions';

type IProject = {
  key: string,
  title: string,
  description: string,
  preview_image: string,
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState('ff');
  const { width } = useWindowDimensions();

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
  function ProjectDetails({ project }: { project: IProject | undefined }) {
    return (
      <div key={project?.key} className='project-details' style={{ backgroundColor: 'transparent' }}>
        <h6> </h6>
        <div style={{ color: "white", paddingLeft: 0 }}>
          <h4>{project?.title}</h4>
          <p>{project?.description}</p>
        </div>
        <img alt={project?.title} src={require("./images/" + project?.preview_image)} style={{ width: "100%", marginBottom: 15 }}></img>
      </div >
    )
  };

  if (width < 650) {
    return (
      <div className='projects-container'>
        <div className="projects-slider">
          {/* <div>
          <IconButton>
          <ChevronLeftIcon sx={{ color: '#FDF420' }} />
          </IconButton>
          <IconButton>
          <ChevronRightIcon sx={{ color: '#FDF420' }} />
          </IconButton>
        </div> */}
          {projects.map(project => <ProjectDetails project={project} />)}
        </div>
      </div>
    )
  }


  return (
    <div className="projects-container">
      <div className="projects-list">
        <h6>Key Projects</h6>
        <ProjectsList projects={projects.filter((project) => project.type === 'key')} />
        <h6>Minor Projects</h6>
        <ProjectsList projects={projects.filter((project) => project.type === 'minor')} />
      </div>
      <ProjectDetails project={projects.find(p => p.key === selectedProject)} />
    </div>
  );
}